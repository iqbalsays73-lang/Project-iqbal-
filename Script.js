"use strict";

(() => {
  const DATA = window.IQBAL_DATA;

  if (
    !DATA ||
    !Array.isArray(DATA.exams) ||
    !Array.isArray(DATA.subjects) ||
    !Array.isArray(DATA.questions)
  ) {
    console.error("PROJECT IQBAL: Data.js load nahi hua.");
    return;
  }

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const STORAGE_KEY = "project_iqbal_v3";

  const defaultState = {
    selectedExam: "chsl",
    attempted: 0,
    correct: 0,
    completedTopics: [],
    notes: [],
    history: [],
    dailyTarget: 20,
    dailyActivity: {},
    answers: []
  };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

      if (!saved || typeof saved !== "object") {
        return { ...defaultState };
      }

      return {
        ...defaultState,
        ...saved,
        completedTopics: Array.isArray(saved.completedTopics)
          ? saved.completedTopics : [],
        notes: Array.isArray(saved.notes) ? saved.notes : [],
        history: Array.isArray(saved.history) ? saved.history : [],
        answers: Array.isArray(saved.answers) ? saved.answers : [],
        dailyActivity: saved.dailyActivity || {}
      };
    } catch (error) {
      console.error("Saved data load nahi hua:", error);
      return { ...defaultState };
    }
  }

  let state = loadState();

  let currentSubject = null;
  let currentTopic = null;
  let currentQuestions = [];
  let currentQuestionIndex = 0;
  let currentQuizAnswers = [];
  let quizFinished = false;
  let currentNoteEditingId = null;

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error("Progress save nahi hua:", error);
      showToast("Data save nahi ho saka. Browser storage check karein.");
    }
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }

  function todayKey() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function recordDailyActivity() {
    const key = todayKey();

    if (!state.dailyActivity[key]) {
      state.dailyActivity[key] = 0;
    }

    state.dailyActivity[key]++;
  }

  function getTodayAttempts() {
    return Number(state.dailyActivity[todayKey()] || 0);
  }

  function getAccuracy() {
    return state.attempted
      ? Math.round((state.correct / state.attempted) * 100)
      : 0;
  }

  function findExam(id) {
    return DATA.exams.find((exam) => exam.id === id);
  }

  function findSubject(id) {
    return DATA.subjects.find((subject) => subject.id === id);
  }

  function findTopic(topicId) {
    for (const subject of DATA.subjects) {
      const topic = subject.topics.find((item) => item.id === topicId);

      if (topic) {
        return { subject, topic };
      }
    }

    return null;
  }

  function navigate(pageName) {
    $$(".page").forEach((page) => {
      page.classList.toggle("active", page.id === `page-${pageName}`);
    });

    $$("#mainNav [data-page]").forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.page === pageName
      );
    });

    const nav = $("#mainNav");

    if (nav) {
      nav.classList.remove("open");
    }

    renderDashboard();

    if (pageName === "exams") renderExams();
    if (pageName === "subjects") renderSubjects();
    if (pageName === "notes") renderNotes();
    if (pageName === "progress") renderProgress();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setupNavigation() {
    $$("#mainNav [data-page]").forEach((button) => {
      button.addEventListener("click", () => {
        navigate(button.dataset.page);
      });
    });

    const menuToggle = $("#menuToggle");
    const nav = $("#mainNav");

    if (menuToggle && nav) {
      menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
      });
    }

    $$("[data-open-page]").forEach((button) => {
      button.addEventListener("click", () => {
        navigate(button.dataset.openPage);
      });
    });
  }

  function renderDashboard() {
    const exam = findExam(state.selectedExam);

    const name = $("#selectedExamName");
    const description = $("#selectedExamDescription");

    if (name) {
      name.textContent = exam ? exam.name : "Government Exams";
    }

    if (description) {
      description.textContent = exam
        ? exam.description
        : "Choose an exam and start learning.";
    }

    setText("#homeAttempted", state.attempted);
    setText("#homeCorrect", state.correct);
    setText("#homeAccuracy", `${getAccuracy()}%`);

    const targetInput = $("#dailyTarget");

    if (targetInput && document.activeElement !== targetInput) {
      targetInput.value = state.dailyTarget;
    }

    const target = Math.max(1, Number(state.dailyTarget) || 20);
    const today = getTodayAttempts();
    const percentage = Math.min(100, Math.round((today / target) * 100));

    const bar = $("#dailyProgressBar");

    if (bar) {
      bar.style.width = `${percentage}%`;
    }

    const progressText = $("#dailyProgressText");

    if (progressText) {
      progressText.textContent =
        `${today} / ${target} questions completed today (${percentage}%)`;
    }
  }

  function setText(selector, value) {
    const element = $(selector);

    if (element) {
      element.textContent = value;
    }
  }

  function setupDailyTarget() {
    const button = $("#saveDailyTargetBtn");

    if (!button) return;

    button.addEventListener("click", () => {
      const input = $("#dailyTarget");
      const target = Number(input?.value);

      if (!Number.isFinite(target) || target < 1 || target > 10000) {
        showToast("Daily target 1 se 10000 ke beech rakhein.");
        return;
      }

      state.dailyTarget = Math.floor(target);
      saveState();
      renderDashboard();
      showToast("Daily target save ho gaya!");
    });
  }

  function renderExams() {
    const grid = $("#examGrid");

    if (!grid) return;

    const search = ($("#examSearch")?.value || "").toLowerCase();
    const activeCategory =
      $(".exam-filter.active")?.dataset.category || "All";

    const exams = DATA.exams.filter((exam) => {
      const matchesSearch =
        exam.name.toLowerCase().includes(search) ||
        exam.description.toLowerCase().includes(search);

      const matchesCategory =
        activeCategory === "All" ||
        exam.category === activeCategory;

      return matchesSearch && matchesCategory;
    });

    grid.innerHTML = exams.length
      ? exams.map((exam) => `
          <article class="exam-card">
            <div class="card-icon">📘</div>
            <h3>${escapeHTML(exam.name)}</h3>
            <p>${escapeHTML(exam.description)}</p>
            <span class="badge">${escapeHTML(exam.category)}</span>
            <button class="btn btn-primary select-exam"
                    data-exam-id="${escapeHTML(exam.id)}">
              Open Exam
            </button>
          </article>
        `).join("")
      : `<p class="empty-state">Koi exam nahi mila.</p>`;

    $$(".select-exam").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedExam = button.dataset.examId;
        saveState();
        renderDashboard();
        renderSubjects();
        navigate("subjects");
      });
    });
  }

  function setupExamFilters() {
    const search = $("#examSearch");

    if (search) {
      search.addEventListener("input", renderExams);
    }

    $$("#examCategories [data-category]").forEach((button) => {
      button.addEventListener("click", () => {
        $$("#examCategories [data-category]").forEach((item) => {
          item.classList.remove("active");
        });

        button.classList.add("active");
        renderExams();
      });
    });
  }

  function renderSubjects() {
    const grid = $("#subjectGrid");

    if (!grid) return;

    const search = ($("#subjectSearch")?.value || "").toLowerCase();

    const title = $("#subjectsExamName");
    const exam = findExam(state.selectedExam);

    if (title) {
      title.textContent = exam ? exam.name : "All Exams";
    }

    const subjects = DATA.subjects.filter((subject) => {
      const inName = subject.name.toLowerCase().includes(search);

      const inTopic = subject.topics.some((topic) =>
        topic.name.toLowerCase().includes(search)
      );

      return inName || inTopic;
    });

    grid.innerHTML = subjects.length
      ? subjects.map((subject) => {
          const completed = subject.topics.filter((topic) =>
            state.completedTopics.includes(topic.id)
          ).length;

          return `
            <article class="subject-card">
              <div class="card-icon">${escapeHTML(subject.icon || "📚")}</div>
              <h3>${escapeHTML(subject.name)}</h3>
              <p>${subject.topics.length} topics</p>
              <p>${completed} topics completed</p>
              <button class="btn btn-primary open-subject"
                      data-subject-id="${escapeHTML(subject.id)}">
                Open Subject
              </button>
            </article>
          `;
        }).join("")
      : `<p class="empty-state">Koi subject nahi mila.</p>`;

    $$(".open-subject").forEach((button) => {
      button.addEventListener("click", () => {
        openSubject(button.dataset.subjectId);
      });
    });
  }

  function setupSubjectSearch() {
    const search = $("#subjectSearch");

    if (search) {
      search.addEventListener("input", renderSubjects);
    }
  }

  function openSubject(subjectId) {
    currentSubject = findSubject(subjectId);

    if (!currentSubject) return;

    const topicArea = $("#topicArea");
    const lessonArea = $("#lessonArea");
    const grid = $("#subjectGrid");

    if (grid) grid.classList.add("hidden");
    if (topicArea) topicArea.classList.remove("hidden");
    if (lessonArea) lessonArea.classList.add("hidden");

    setText("#currentSubjectTitle", currentSubject.name);

    renderTopics();

    topicArea?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function renderTopics() {
    const list = $("#topicList");

    if (!list || !currentSubject) return;

    list.innerHTML = currentSubject.topics.map((topic) => {
      const completed = state.completedTopics.includes(topic.id);

      return `
        <article class="topic-item">
          <div>
            <h3>${escapeHTML(topic.name)}</h3>
            <p>${completed ? "✓ Completed" : "Not completed"}</p>
          </div>
          <button class="btn btn-secondary open-topic"
                  data-topic-id="${escapeHTML(topic.id)}">
            Study
          </button>
        </article>
      `;
    }).join("");

    $$(".open-topic").forEach((button) => {
      button.addEventListener("click", () => {
        openTopic(button.dataset.topicId);
      });
    });
  }

  function openTopic(topicId) {
    const found = currentSubject?.topics.find(
      (topic) => topic.id === topicId
    );

    if (!found) return;

    currentTopic = found;

    setText("#lessonTitle", found.name);

    const body = $("#lessonBody");

    if (body) {
      body.innerHTML = found.content || "<p>Notes available nahi hain.</p>";
    }

    $("#lessonArea")?.classList.remove("hidden");

    $("#lessonArea")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function setupTopicNavigation() {
    $("#backToSubjects")?.addEventListener("click", () => {
      $("#topicArea")?.classList.add("hidden");
      $("#lessonArea")?.classList.add("hidden");
      $("#subjectGrid")?.classList.remove("hidden");
      currentSubject = null;
    });

    $("#backToTopics")?.addEventListener("click", () => {
      $("#lessonArea")?.classList.add("hidden");
      $("#topicArea")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    $("#markLessonBtn")?.addEventListener("click", () => {
      if (!currentTopic) return;

      if (!state.completedTopics.includes(currentTopic.id)) {
        state.completedTopics.push(currentTopic.id);
        saveState();
      }

      renderTopics();
      renderSubjects();
      renderProgress();
      showToast("Topic completed mark ho gaya!");
    });

    $("#practiceTopicBtn")?.addEventListener("click", () => {
      if (!currentTopic) return;

      navigate("practice");

      const subject = currentSubject?.name || "All";
      const select = $("#practiceSubject");

      if (select) {
        select.value = subject;
      }

      startPractice(currentTopic.id);
    });
  }

  function getPracticePool(topicId = null) {
    const subjectFilter = $("#practiceSubject")?.value || "All";
    const difficultyFilter = $("#practiceDifficulty")?.value || "All";

    return DATA.questions.filter((question) => {
      const matchesTopic = !topicId || question.topic === topicId;

      const matchesSubject =
        subjectFilter === "All" ||
        question.subject.toLowerCase() === subjectFilter.toLowerCase();

      const matchesDifficulty =
        difficultyFilter === "All" ||
        question.difficulty.toLowerCase() === difficultyFilter.toLowerCase();

      return matchesTopic && matchesSubject && matchesDifficulty;
    });
  }

  function shuffle(items) {
    const array = [...items];

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  function startPractice(topicId = null) {
    let pool = getPracticePool(topicId);

    if (!pool.length) {
      showToast("Is filter mein abhi questions available nahi hain.");
      return;
    }

    pool = shuffle(pool);

    const countValue = $("#practiceCount")?.value || "10";

    if (countValue !== "All") {
      const count = Number(countValue);

      if (Number.isFinite(count) && count > 0) {
        pool = pool.slice(0, count);
      }
    }

    currentQuestions = pool;
    currentQuestionIndex = 0;
    currentQuizAnswers = [];
    quizFinished = false;

    $("#quizArea")?.classList.remove("hidden");
    $("#quizResults")?.classList.add("hidden");

    renderQuestion();

    $("#quizArea")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function renderQuestion() {
    const question = currentQuestions[currentQuestionIndex];

    if (!question) {
      finishQuiz();
      return;
    }

    setText("#quizSubjectLabel", question.subject);
    setText(
      "#quizQuestionCounter",
      `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`
    );

    setText("#questionDifficulty", question.difficulty || "Practice");
    setText("#questionExamLabel", question.type || "Practice");
    setText("#questionText", question.question);

    const progress = $("#quizProgressBar");

    if (progress) {
      progress.style.width =
        `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
    }

    const options = $("#questionOptions");
    const feedback = $("#answerFeedback");
    const nextButton = $("#nextQuestionBtn");

    if (feedback) {
      feedback.innerHTML = "";
      feedback.classList.add("hidden");
    }

    if (nextButton) {
      nextButton.disabled = true;
      nextButton.textContent =
        currentQuestionIndex === currentQuestions.length - 1
          ? "Finish Test"
          : "Next Question";
    }

    if (!options) return;

    options.innerHTML = question.options.map((option, index) => `
      <button class="option-button"
              data-option-index="${index}">
        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
        <span>${escapeHTML(option)}</span>
      </button>
    `).join("");

    $$(".option-button").forEach((button) => {
      button.addEventListener("click", () => {
        answerQuestion(Number(button.dataset.optionIndex));
      });
    });
  }

  function answerQuestion(selectedIndex) {
    if (quizFinished) return;

    const question = currentQuestions[currentQuestionIndex];

    if (!question) return;

    const options = $$(".option-button");

    if (options.some((button) => button.disabled)) return;

    const correct = selectedIndex === question.answer;

    options.forEach((button, index) => {
      button.disabled = true;

      if (index === question.answer) {
        button.classList.add("correct");
      }

      if (index === selectedIndex && !correct) {
        button.classList.add("incorrect");
      }
    });

    currentQuizAnswers.push({
      questionId: question.id,
      subject: question.subject,
      topic: question.topic,
      selected: selectedIndex,
      answer: question.answer,
      correct
    });

    state.attempted++;

    if (correct) {
      state.correct++;
    }

    recordDailyActivity();
    saveState();

    const feedback = $("#answerFeedback");

    if (feedback) {
      feedback.classList.remove("hidden");

      feedback.innerHTML = `
        <strong>${correct ? "Correct Answer! ✓" : "Incorrect Answer"}</strong>
        <p>Correct option: ${String.fromCharCode(65 + question.answer)}.
        ${escapeHTML(question.options[question.answer])}</p>
        <p>${escapeHTML(question.explanation || "Explanation available nahi hai.")}</p>
      `;
    }

    const nextButton = $("#nextQuestionBtn");

    if (nextButton) {
      nextButton.disabled = false;
    }

    renderDashboard();
    renderProgress();
  }

  function skipQuestion() {
    if (quizFinished) return;

    const question = currentQuestions[currentQuestionIndex];

    if (!question) return;

    const options = $$(".option-button");

    if (options.some((button) => button.disabled)) return;

    options.forEach((button) => {
      button.disabled = true;

      if (Number(button.dataset.optionIndex) === question.answer) {
        button.classList.add("correct");
      }
    });

    currentQuizAnswers.push({
      questionId: question.id,
      subject: question.subject,
      topic: question.topic,
      selected: null,
      answer: question.answer,
      correct: false,
      skipped: true
    });

    const feedback = $("#answerFeedback");

    if (feedback) {
      feedback.classList.remove("hidden");

      feedback.innerHTML = `
        <strong>Question skipped</strong>
        <p>Correct answer: ${escapeHTML(question.options[question.answer])}</p>
        <p>${escapeHTML(question.explanation || "")}</p>
      `;
    }

    const nextButton = $("#nextQuestionBtn");

    if (nextButton) {
      nextButton.disabled = false;
    }
  }

  function finishQuiz() {
    if (quizFinished) return;

    quizFinished = true;

    const total = currentQuizAnswers.length;
    const correct = currentQuizAnswers.filter((answer) => answer.correct).length;
    const accuracy = total ? Math.round((correct / total) * 100) : 0;

    state.history.unshift({
      date: new Date().toISOString(),
      total,
      correct,
      accuracy,
      exam: state.selectedExam
    });

    state.history = state.history.slice(0, 100);

    state.answers.push(...currentQuizAnswers);
    state.answers = state.answers.slice(-2000);

    saveState();

    $("#quizArea")?.classList.add("hidden");
    $("#quizResults")?.classList.remove("hidden");

    setText("#resultAttempted", total);
    setText("#resultCo
