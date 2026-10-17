/* =====================================================
   PROJECT IQBAL — MAIN ENGINE
   File: script.js
   ===================================================== */

"use strict";

(() => {
  const DATA = window.IQBAL_DATA;

  if (!DATA || !Array.isArray(DATA.exams) ||
      !Array.isArray(DATA.subjects) ||
      !Array.isArray(DATA.questions)) {
    console.error("PROJECT IQBAL: data.js load nahi hua.");
    return;
  }

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  const STORAGE_KEY = "project_iqbal_v3";

  const DEFAULT_STATE = {
    selectedExam: "",
    notes: [],
    attempted: 0,
    correct: 0,
    completedTopics: [],
    history: [],
    dailyTarget: 20,
    dailyActivity: {}
  };

  let state = loadState();

  let activeExamCategory = "All";
  let currentSubject = null;
  let currentTopic = null;

  let quizQuestions = [];
  let quizIndex = 0;
  let quizAttempted = 0;
  let quizCorrect = 0;
  let answeredCurrent = false;
  let quizSessionActive = false;
  let currentQuizSubject = "All";

  let toastTimer = null;


  /* ---------- SAFE HELPERS ---------- */

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function makeId(prefix = "id") {
    return prefix + "_" +
      Date.now().toString(36) + "_" +
      Math.random().toString(36).slice(2, 9);
  }

  function todayKey() {
    const now = new Date();
    return [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0")
    ].join("-");
  }

  function formatDate(value) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "Unknown date";
    }

    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function percent(correct, total) {
    return total > 0
      ? Math.round((correct / total) * 100)
      : 0;
  }

  function shuffle(items) {
    const copy = [...items];

    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
  }

  function showToast(message) {
    const toast = $("#toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return structuredCloneSafe(DEFAULT_STATE);
      }

      const parsed = JSON.parse(saved);

      return {
        ...structuredCloneSafe(DEFAULT_STATE),
        ...parsed,
        notes: Array.isArray(parsed.notes) ? parsed.notes : [],
        completedTopics: Array.isArray(parsed.completedTopics)
          ? parsed.completedTopics : [],
        history: Array.isArray(parsed.history) ? parsed.history : [],
        dailyActivity:
          parsed.dailyActivity &&
          typeof parsed.dailyActivity === "object"
            ? parsed.dailyActivity : {}
      };
    } catch (error) {
      console.error("Saved data read nahi ho saka:", error);
      return structuredCloneSafe(DEFAULT_STATE);
    }
  }

  function structuredCloneSafe(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (error) {
      console.error("Data save nahi hua:", error);
      showToast("Storage full ya unavailable hai. Backup le lo.");
      return false;
    }
  }


  /* ---------- NAVIGATION ---------- */

  function showPage(pageName) {
    const page = $("#page-" + pageName);

    if (!page) return;

    $$(".page").forEach(item => {
      item.classList.toggle("active", item === page);
    });

    $$(".nav-btn").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.page === pageName
      );
    });

    $("#mainNav")?.classList.remove("mobile-open");

    const menu = $("#menuToggle");
    if (menu) menu.setAttribute("aria-expanded", "false");

    if (pageName === "home") renderHome();
    if (pageName === "exams") renderExams();
    if (pageName === "subjects") renderSubjects();
    if (pageName === "notes") renderNotes();
    if (pageName === "progress") renderProgress();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function initNavigation() {
    document.addEventListener("click", event => {
      const button = event.target.closest("[data-page]");

      if (!button) return;

      const pageName = button.dataset.page;

      if (pageName) {
        showPage(pageName);
      }
    });

    $("#menuToggle")?.addEventListener("click", () => {
      const nav = $("#mainNav");
      const isOpen = nav.classList.toggle("mobile-open");

      $("#menuToggle").setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });
  }


  /* ---------- EXAMS ---------- */

  function getSelectedExam() {
    return DATA.exams.find(exam =>
      exam.id === state.selectedExam
    ) || null;
  }

  function renderExams() {
    const grid = $("#examGrid");
    if (!grid) return;

    const search = ($("#examSearch")?.value || "")
      .trim()
      .toLowerCase();

    const exams = DATA.exams.filter(exam => {
      const matchesSearch =
        exam.name.toLowerCase().includes(search) ||
        exam.description.toLowerCase().includes(search);

      const matchesCategory =
        activeExamCategory === "All" ||
        exam.category === activeExamCategory;

      return matchesSearch && matchesCategory;
    });

    if (!exams.length) {
      grid.innerHTML = `
        <div class="empty-state">
          <strong>No exams found</strong>
          <p>Search badal kar try karo.</p>
        </div>`;
      return;
    }

    grid.innerHTML = exams.map(exam => `
      <article class="exam-card ${
        state.selectedExam === exam.id ? "selected" : ""
      }">
        <div class="exam-icon">${escapeHTML(exam.icon)}</div>

        <h3>${escapeHTML(exam.name)}</h3>

        <p>${escapeHTML(exam.description)}</p>

        <span class="exam-category">
          ${escapeHTML(exam.category)}
        </span>

        <button
          class="primary-btn card-action"
          data-select-exam="${escapeHTML(exam.id)}">
          ${
            state.selectedExam === exam.id
              ? "Selected ✓"
              : "Select Exam →"
          }
        </button>
      </article>
    `).join("");
  }

  function selectExam(examId) {
    const exam = DATA.exams.find(item => item.id === examId);

    if (!exam) return;

    state.selectedExam = examId;
    saveState();

    renderExams();
    renderHome();
    renderSubjects();

    showToast(exam.name + " selected!");

    showPage("home");
  }

  function initExams() {
    $("#examSearch")?.addEventListener("input", renderExams);

    $("#examCategories")?.addEventListener("click", event => {
      const button = event.target.closest("[data-category]");

      if (!button) return;

      activeExamCategory = button.dataset.category;

      $$("#examCategories .filter-btn").forEach(item => {
        item.classList.toggle("active", item === button);
      });

      renderExams();
    });

    $("#examGrid")?.addEventListener("click", event => {
      const button = event.target.closest("[data-select-exam]");

      if (button) {
        selectExam(button.dataset.selectExam);
      }
    });
  }


  /* ---------- SUBJECTS ---------- */

  function findSubject(subjectId) {
    return DATA.subjects.find(subject =>
      subject.id === subjectId
    ) || null;
  }

  function renderSubjects() {
    const grid = $("#subjectGrid");
    if (!grid) return;

    const selectedExam = getSelectedExam();

    $("#subjectsExamName").textContent =
      selectedExam
        ? selectedExam.name
        : "Common Subjects";

    const search = ($("#subjectSearch")?.value || "")
      .trim()
      .toLowerCase();

    const filtered = DATA.subjects.filter(subject => {
      const nameMatches =
        subject.name.toLowerCase().includes(search);

      const topicMatches = subject.topics.some(topic =>
        topic.name.toLowerCase().includes(search)
      );

      return !search || nameMatches || topicMatches;
    });

    grid.classList.toggle("hidden", Boolean(currentSubject));
    $("#topicArea")?.classList.toggle("hidden", !currentSubject);
    $("#lessonArea")?.classList.add("hidden");

    grid.innerHTML = filtered.length
      ? filtered.map(subject => `
          <article class="subject-card">
            <div class="subject-icon">
              ${escapeHTML(subject.icon)}
            </div>

            <h3>${escapeHTML(subject.name)}</h3>

            <p>${escapeHTML(subject.description)}</p>

            <p>${subject.topics.length} study topics</p>

            <button
              class="secondary-btn"
              data-open-subject="${escapeHTML(subject.id)}">
              Explore Subject →
            </button>
          </article>
        `).join("")
      : `
        <div class="empty-state">
          <strong>No subject found</strong>
          <p>Dusra keyword try karo.</p>
        </div>`;

    if (currentSubject) {
      renderTopics();
    }
  }

  function openSubject(subjectId) {
    currentSubject = findSubject(subjectId);
    currentTopic = null;

    if (!currentSubject) return;

    renderSubjects();

    $("#topicArea")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function renderTopics() {
    if (!currentSubject) return;

    $("#currentSubjectTitle").textContent =
      currentSubject.name;

    const search = ($("#subjectSearch")?.value || "")
      .trim()
      .toLowerCase();

    const topics = currentSubject.topics.filter(topic =>
      !search ||
      topic.name.toLowerCase().includes(search) ||
      currentSubject.name.toLowerCase().includes(search)
    );

    const list = $("#topicList");

    list.innerHTML = topics.length
      ? topics.map((topic, index) => {
          const key = currentSubject.id + ":" + topic.id;
          const completed = state.completedTopics.includes(key);

          return `
            <button
              class="topic-item"
              data-open-topic="${escapeHTML(topic.id)}">

              <span class="topic-number">${index + 1}</span>

              <span class="topic-info">
                <strong>${escapeHTML(topic.name)}</strong>
                <small>
                  ${completed ? "Completed ✓" : "Open study material →"}
                </small>
              </span>

              <span class="topic-status">
                ${completed ? "✓" : "›"}
              </span>
            </button>
          `;
        }).join("")
      : `
        <div class="empty-state">
          <strong>No matching topic</strong>
          <p>Search badal kar dekho.</p>
        </div>`;
  }

  function openTopic(topicId) {
    if (!currentSubject) return;

    const topic = currentSubject.topics.find(item =>
      item.id === topicId
    );

    if (!topic) return;

    currentTopic = topic;

    $("#lessonTitle").textContent = topic.name;

    // Lesson content comes from our authored data.
    $("#lessonBody").innerHTML = topic.content;

    $("#lessonArea")?.classList.remove("hidden");

    $("#markLessonBtn").textContent =
      state.completedTopics.includes(
        currentSubject.id + ":" + topic.id
      )
        ? "Mark as Incomplete"
        : "Mark as Completed ✓";

    $("#lessonArea")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function toggleTopicCompletion() {
    if (!currentSubject || !currentTopic) return;

    const key = currentSubject.id + ":" + currentTopic.id;
    const index = state.completedTopics.indexOf(key);

    if (index >= 0) {
      state.completedTopics.splice(index, 1);
      showToast("Topic marked incomplete.");
    } else {
      state.completedTopics.push(key);
      showToast("Topic completed! Well done.");
    }

    saveState();
    renderTopics();
    renderProgress();
    renderHome();

    $("#markLessonBtn").textContent =
      state.completedTopics.includes(key)
        ? "Mark as Incomplete"
        : "Mark as Completed ✓";
  }

  function initSubjects() {
    $("#subjectSearch")?.addEventListener("input", () => {
      renderSubjects();
    });

    $("#subjectGrid")?.addEventListener("click", event => {
      const button = event.target.closest("[data-open-subject]");

      if (button) {
        openSubject(button.dataset.openSubject);
      }
    });

    $("#topicList")?.addEventListener("click", event => {
      const button = event.target.closest("[data-open-topic]");

      if (button) {
        openTopic(button.dataset.openTopic);
      }
    });

    $("#backToSubjects")?.addEventListener("click", () => {
      currentSubject = null;
      currentTopic = null;
      renderSubjects();
    });

    $("#backToTopics")?.addEventListener("click", () => {
      $("#lessonArea")?.classList.add("hidden");
      currentTopic = null;

      $("#topicArea")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    $("#markLessonBtn")?.addEventListener(
      "click",
      toggleTopicCompletion
    );

    $("#practiceTopicBtn")?.addEventListener("click", () => {
      if (!currentSubject || !currentTopic) return;

      const subjectMap = {
        maths: "Maths",
        reasoning: "Reasoning",
        history: "History",
        geography: "Geography",
        polity: "Polity",
        science: "Science",
        economy: "Economy",
        hindi: "Hindi",
        english: "English",
        computer: "Computer",
        gk: "GK"
      };

      $("#practiceSubject").value =
        subjectMap[currentSubject.id] || "All";

      $("#practiceDifficulty").value = "All";
      $("#practiceCount").value = "All";

      startPractice(currentTopic.id);
      showPage("practice");
    });
  }


  /* ---------- DAILY TARGET ---------- */

  function saveDailyTarget() {
    const input = $("#dailyTarget");

    const value = Number(input.value);

    if (!Number.isInteger(value) || value < 1 || value > 1000) {
      showToast("Target 1 se 1000 ke beech integer hona chahiye.");
      return;
    }

    state.dailyTarget = value;

    saveState();
    renderHome();

    showToast("Daily target save ho gaya.");
  }

  function getTodayActivity() {
    return Number(state.dailyActivity[todayKey()] || 0);
  }

  function renderDailyTarget() {
    const target = Math.max(1, Number(state.dailyTarget) || 20);
    const done = getTodayActivity();

    $("#dailyTarget").value = target;

    $("#dailyProgressBar").style.width =
      Math.min(100, (done / target) * 100) + "%";

    $("#dailyProgressText").textContent =
      `${done} / ${target} questions completed today`;
  }


  /* ---------- HOME DASHBOARD ---------- */

  function renderHome() {
    const exam = getSelectedExam();

    $("#selectedExamName").textContent =
      exam ? exam.name : "Abhi exam select karo";

    $("#selectedExamDescription").textContent =
      exam
        ? exam.description + " — study shuru karne ke liye Subjects kholo."
        : "Apna target exam choose karke preparation shuru karo.";

    $("#homeAttempted").textContent = state.attempted;
    $("#homeCorrect").textContent = state.correct;

    $("#homeAccuracy").textContent =
      percent(state.correct, state.attempted) + "%";

    renderDailyTarget();
  }


  /* ---------- PRACTICE ENGINE ---------- */

  function getSubjectNameFromId(id) {
    const subject = findSubject(id);
    return subject ? subject.name : "All";
  }

  function getPracticePool(topicId = null) {
    const selectedSubject = $("#practiceSubject").value;
    const difficulty = $("#practiceDifficulty").value;

    return DATA.questions.filter(question => {
      const matchesSubject =
        selectedSubject === "All" ||
        question.subject === selectedSubject;

      const matchesDifficulty =
        difficulty === "All" ||
        question.difficulty === difficulty;

      const matchesTopic =
        !topicId ||
        question.topic === topicId;

      return matchesSubject && matchesDifficulty && matchesTopic;
    });
  }

  function startPractice(topicId = null) {
    const pool = getPracticePool(topicId);

    if (!pool.length) {
      showToast("Is filter ke liye abhi questions available nahi hain.");
      return;
    }

    const countValue = $("#practiceCount").value;

    const count = countValue === "All"
      ? pool.length
      : Number(countValue);

    quizQuestions = shuffle(pool).slice(0, count);

    quizIndex = 0;
    quizAttempted = 0;
    quizCorrect = 0;
    answeredCurrent = false;
    quizSessionActive = true;

    currentQuizSubject = $("#practiceSubject").value;

    $("#quizArea").classList.remove("hidden");
    $("#quizResults").classList.add("hidden");

    showQuestion();

    $("#quizArea").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function showQuestion() {
    const question = quizQuestions[quizIndex];

    if (!question) {
      finishPractice();
      return;
    }

    answeredCurrent = false;

    $("#quizSubjectLabel").textContent = question.subject;

    $("#quizQuestionCounter").textContent =
      `Question ${quizIndex + 1} of ${quizQuestions.length}`;

    $("#quizProgressBar").style.width =
      ((quizIndex / quizQuestions.length) * 100) + "%";

    $("#questionDifficulty").textContent =
      question.difficulty;

    $("#questionExamLabel").textContent =
      question.type === "PYQ"
        ? `PYQ${question.year ? " · " + question.year : ""}`
        : "Practice Question";

    $("#questionText").textContent = question.question;

    $("#questionOptions").innerHTML =
      question.options.map((option, index) => `
        <button
          class="option-btn"
          data-option="${index}">

          <span class="option-letter">
            ${String.fromCharCode(65 + index)}
          </span>

          <span>${escapeHTML(option)}</span>
        </button>
      `).join("");

    $("#answerFeedback").className = "answer-feedback hidden";
    $("#answerFeedback").textContent = "";

    $("#nextQuestionBtn").disabled = true;

    $("#nextQuestionBtn").textContent =
      quizIndex === quizQuestions.length - 1
        ? "Finish Practice ✓"
        : "Next Question →";
  }

  function answerQuestion(selectedIndex) {
    if (answeredCurrent) return;

    const question = quizQuestions[quizIndex];

    if (!question) return;

    answeredCurrent = true;
    quizAttempted++;

    const correct = selectedIndex === question.answer;

    if (correct) {
      quizCorrect++;
    }

    const buttons = $$("#questionOptions .option-btn");

    buttons.forEach((button, index) => {
      button.disabled = true;

      if (index === question.answer) {
        button.classList.add("correct");
      } else if (index === selectedIndex && !correct) {
        button.classList.add("incorrect");
      }
    });

    const feedback = $("#answerFeedback");

    feedback.classList.remove("hidden");
    feedback.classList.add(
      correct ? "correct-feedback" : "incorrect-feedback"
    );

    feedback.innerHTML = `
      <strong>
        ${correct ? "Correct Answer! ✓" : "Incorrect Answer"}
      </strong>
      <p>
        Correct option:
        ${String.fromCharCode(65 + question.answer)}.
        ${escapeHTML(question.options[question.answer])}
      </p>
      <p>${escapeHTML(question.explanation || "Explanation available nahi hai.")}</p
