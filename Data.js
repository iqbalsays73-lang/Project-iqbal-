"use strict";

window.IQBAL_DATA = {

  exams: [
    { id: "chsl", name: "SSC CHSL", category: "SSC", description: "10+2 level examination" },
    { id: "cgl", name: "SSC CGL", category: "SSC", description: "Graduate level examination" },
    { id: "mts", name: "SSC MTS", category: "SSC", description: "Multi Tasking Staff" },
    { id: "gd", name: "SSC GD", category: "SSC", description: "Constable examination" },
    { id: "cpo", name: "SSC CPO", category: "SSC", description: "Sub-Inspector examination" },

    { id: "pet", name: "UPSSSC PET", category: "Police", description: "Uttar Pradesh preliminary eligibility test" },
    { id: "upsi", name: "UP Police SI", category: "Police", description: "Sub-Inspector examination" },
    { id: "upconstable", name: "UP Police Constable", category: "Police", description: "Constable recruitment examination" },

    { id: "ntpc", name: "Railway NTPC", category: "Railway", description: "Non-Technical Popular Categories" },
    { id: "groupd", name: "Railway Group D", category: "Railway", description: "Level 1 recruitment examination" },
    { id: "alp", name: "Railway ALP", category: "Railway", description: "Assistant Loco Pilot" },

    { id: "ibps", name: "IBPS Clerk", category: "Other", description: "Bank clerical examination" },
    { id: "sbi", name: "SBI Clerk", category: "Other", description: "Junior Associate examination" },
    { id: "uppsc", name: "UPPSC PCS", category: "Other", description: "Provincial Civil Services" },
    { id: "ctet", name: "CTET", category: "Teaching", description: "Central Teacher Eligibility Test" },
    { id: "nda", name: "NDA", category: "Other", description: "National Defence Academy" },
    { id: "cds", name: "CDS", category: "Other", description: "Combined Defence Services" },
    { id: "other", name: "Other Government Exams", category: "Other", description: "General government exam preparation" }
  ],

  subjects: [

    {
      id: "maths",
      name: "Maths",
      icon: "🔢",
      topics: [
        {
          id: "number-system",
          name: "Number System",
          content: `
            <h3>Number System — Basic Notes</h3>
            <p><b>Natural Numbers:</b> 1, 2, 3, 4, ...</p>
            <p><b>Whole Numbers:</b> 0, 1, 2, 3, ...</p>
            <p><b>Integers:</b> ..., -2, -1, 0, 1, 2, ...</p>
            <p><b>Even Number:</b> Jo 2 se poori tarah divide ho.</p>
            <p><b>Odd Number:</b> Jo 2 se poori tarah divide na ho.</p>
            <h4>Important Rule</h4>
            <p>Do numbers ke liye: HCF × LCM = Dono numbers ka product.</p>
          `
        },

        {
          id: "percentage",
          name: "Percentage",
          content: `
            <h3>Percentage — Short Notes</h3>
            <p>Percentage ka matlab hota hai per hundred.</p>
            <p><b>Formula:</b> Percentage = (Part / Total) × 100</p>
            <h4>Important Fractions</h4>
            <ul>
              <li>1/2 = 50%</li>
              <li>1/3 ≈ 33.33%</li>
              <li>1/4 = 25%</li>
              <li>1/5 = 20%</li>
              <li>1/8 = 12.5%</li>
              <li>1/10 = 10%</li>
            </ul>
            <h4>Example</h4>
            <p>200 ka 25% = 200 × 25 / 100 = 50.</p>
          `
        },

        {
          id: "ratio",
          name: "Ratio and Proportion",
          content: `
            <h3>Ratio and Proportion</h3>
            <p>Ratio ko a:b ke form mein likhte hain.</p>
            <p>Example: 10:15 = 2:3.</p>
            <p><b>Proportion:</b> a:b = c:d hone par ad = bc.</p>
            <h4>Example</h4>
            <p>2:3 mein total 25 ho, toh parts 10 aur 15 honge.</p>
          `
        },

        {
          id: "profit-loss",
          name: "Profit and Loss",
          content: `
            <h3>Profit and Loss</h3>
            <p><b>Profit = Selling Price − Cost Price</b></p>
            <p><b>Loss = Cost Price − Selling Price</b></p>
            <p>Profit% = (Profit / Cost Price) × 100</p>
            <p>Loss% = (Loss / Cost Price) × 100</p>
            <p>Profit ya loss percentage generally Cost Price par calculate hota hai.</p>
          `
        },

        {
          id: "average",
          name: "Average",
          content: `
            <h3>Average</h3>
            <p><b>Average = Total Sum / Number of Values</b></p>
            <p>5, 10 aur 15 ka average = 30 / 3 = 10.</p>
            <p>Total sum = Average × Number of Values.</p>
          `
        },

        {
          id: "interest",
          name: "Simple and Compound Interest",
          content: `
            <h3>Simple Interest</h3>
            <p>SI = (P × R × T) / 100</p>
            <p>P = Principal, R = Annual Rate, T = Time in Years.</p>
            <h3>Compound Interest</h3>
            <p>Amount = P(1 + R/100)^T</p>
            <p>CI = Amount − Principal.</p>
          `
        },

        {
          id: "time-work",
          name: "Time and Work",
          content: `
            <h3>Time and Work</h3>
            <p>Agar koi vyakti kaam x din mein karta hai, toh ek din ka work = 1/x.</p>
            <p>A aur B milkar kaam karein toh daily work add hota hai.</p>
            <p>Example: A 10 din aur B 15 din mein kaam kare, combined rate = 1/10 + 1/15 = 1/6.</p>
            <p>Isliye dono milkar 6 din mein kaam karenge.</p>
          `
        },

        {
          id: "speed-distance",
          name: "Time, Speed and Distance",
          content: `
            <h3>Speed, Distance and Time</h3>
            <p>Speed = Distance / Time</p>
            <p>Distance = Speed × Time</p>
            <p>Time = Distance / Speed</p>
            <p>km/h se m/s: 5/18 se multiply karo.</p>
            <p>m/s se km/h: 18/5 se multiply karo.</p>
          `
        },

        {
          id: "algebra",
          name: "Algebra",
          content: `
            <h3>Algebra Basics</h3>
            <p>(a + b)² = a² + 2ab + b²</p>
            <p>(a − b)² = a² − 2ab + b²</p>
            <p>a² − b² = (a − b)(a + b)</p>
            <p>x² + (a+b)x + ab = (x+a)(x+b)</p>
          `
        },

        {
          id: "geometry",
          name: "Geometry",
          content: `
            <h3>Geometry Basics</h3>
            <p>Triangle ke teen angles ka sum = 180°.</p>
            <p>Quadrilateral ke interior angles ka sum = 360°.</p>
            <p>Right-angled triangle: a² + b² = c².</p>
            <p>Circle ka diameter = 2 × radius.</p>
          `
        },

        {
          id: "mensuration",
          name: "Mensuration",
          content: `
            <h3>Mensuration Formulae</h3>
            <p>Rectangle area = Length × Breadth.</p>
            <p>Square area = Side².</p>
            <p>Triangle area = 1/2 × Base × Height.</p>
            <p>Circle area = πr².</p>
            <p>Circle circumference = 2πr.</p>
            <p>Cube volume = Side³.</p>
            <p>Cuboid volume = Length × Breadth × Height.</p>
          `
        },

        {
          id: "statistics",
          name: "Statistics and Data Interpretation",
          content: `
            <h3>Statistics</h3>
            <p>Mean = Sum of observations / Number of observations.</p>
            <p>Median = Arranged data ka middle value.</p>
            <p>Mode = Sabse zyada baar aane wali value.</p>
            <p>Data Interpretation mein table, bar graph aur pie chart ko dhyan se padho.</p>
          `
        }
      ]
    },

    {
      id: "reasoning",
      name: "Reasoning",
      icon: "🧠",
      topics: [
        {
          id: "analogy",
          name: "Analogy",
          content: `
            <h3>Analogy</h3>
            <p>Do cheezon ke beech relationship identify karna hota hai.</p>
            <p>Example: Bird : Fly :: Fish : Swim.</p>
            <p>Relation ko pehle samjho, phir answer choose karo.</p>
          `
        },
        {
          id: "series",
          name: "Number and Alphabet Series",
          content: `
            <h3>Series</h3>
            <p>Numbers ke differences, multiplication, division aur alternate pattern check karo.</p>
            <p>Example: 2, 4, 6, 8, ? Answer: 10.</p>
            <p>Alphabet position: A=1, B=2, ..., Z=26.</p>
          `
        },
        {
          id: "coding",
          name: "Coding-Decoding",
          content: `
            <h3>Coding-Decoding</h3>
            <p>Letter position aur shift pattern check karo.</p>
            <p>Example: CAT ko har letter mein +1 shift karein toh DBU.</p>
            <p>Reverse alphabet ya number-based coding bhi ho sakti hai.</p>
          `
        },
        {
          id: "blood",
          name: "Blood Relations",
          content: `
            <h3>Blood Relations</h3>
            <p>Family tree bana kar relation solve karo.</p>
            <p>Question mein gender aur generation ko carefully identify karo.</p>
            <p>Maternal = mother's side; Paternal = father's side.</p>
          `
        },
        {
          id: "direction",
          name: "Direction Sense",
          content: `
            <h3>Direction Sense</h3>
            <p>North, South, East aur West ko diagram mein mark karo.</p>
            <p>North ke right mein East aur left mein West hota hai.</p>
            <p>Final displacement ke liye horizontal aur vertical movement alag count karo.</p>
          `
        },
        {
          id: "syllogism",
          name: "Syllogism",
          content: `
            <h3>Syllogism</h3>
            <p>All, Some aur No statements ke relations check karo.</p>
            <p>Venn diagram se possible conclusions verify karo.</p>
            <p>Apni general knowledge ko nahi, sirf given statements ko follow karo.</p>
          `
        },
        {
          id: "classification",
          name: "Classification and Odd One Out",
          content: `
            <h3>Classification</h3>
            <p>Common property identify karo.</p>
            <p>Numbers, letters, shapes, category ya function ke basis par odd one out ho sakta hai.</p>
          `
        },
        {
          id: "ranking",
          name: "Order and Ranking",
          content: `
            <h3>Order and Ranking</h3>
            <p>Total persons = Rank from left + Rank from right − 1.</p>
            <p>Example: Left se 5th aur right se 7th position ho toh total = 5+7−1 = 11.</p>
          `
        }
      ]
    },

    {
      id: "history",
      name: "History",
      icon: "🏛️",
      topics: [
        {
          id: "prehistoric",
          name: "Prehistoric India",
          content: `
            <h3>Prehistoric India</h3>
            <ul>
              <li>Palaeolithic: Old Stone Age.</li>
              <li>Mesolithic: Middle Stone Age.</li>
              <li>Neolithic: New Stone Age.</li>
              <li>Neolithic period mein agriculture aur settled life ka development hua.</li>
            </ul>
            <p>Exam trick: Stone Age ki pehchan tools aur lifestyle se karo.</p>
          `
        },
        {
          id: "ivc",
          name: "Indus Valley Civilization",
          content: `
            <h3>Indus Valley Civilization</h3>
            <ul>
              <li>Harappa ki excavation 1921 mein Daya Ram Sahni se associated hai.</li>
              <li>Mohenjo-daro ki excavation 1922 mein R. D. Banerji se associated hai.</li>
              <li>Great Bath: Mohenjo-daro.</li>
              <li>Lothal: Dockyard ke liye prasiddh.</li>
              <li>Dholavira: Water management aur urban planning ke liye prasiddh.</li>
            </ul>
          `
        },
        {
          id: "vedic",
          name: "Vedic Period",
          content: `
            <h3>Vedic Period</h3>
            <p>Rigveda sabse purana Veda maana jata hai.</p>
            <p>Early Vedic society mein cattle wealth ka important source the.</p>
            <p>Later Vedic period mein agriculture aur territorial kingdoms ka importance badha.</p>
          `
        },
        {
          id: "mahajanapadas",
          name: "Mahajanapadas",
          content: `
            <h3>Sixteen Mahajanapadas</h3>
            <p>Buddhist texts mein 16 Mahajanapadas ka ullekh milta hai.</p>
            <p>Magadha ke rise mein fertile land, iron resources aur strategic location ka role tha.</p>
            <p>Important names: Magadha, Kosala, Vatsa, Avanti, Vajji.</p>
          `
        },
        {
          id: "buddhism",
          name: "Buddhism and Jainism",
          content: `
            <h3>Buddhism</h3>
            <p>Gautama Buddha ka janm Lumbini se associated hai.</p>
            <p>Unhe Bodh Gaya mein enlightenment mila.</p>
            <p>First sermon Sarnath se associated hai.</p>
            <h3>Jainism</h3>
            <p>Mahavira Jain tradition ke 24th Tirthankara the.</p>
            <p>Rishabhanatha ko first Tirthankara maana jata hai.</p>
          `
        },
        {
          id: "maurya",
          name: "Maurya Empire",
          content: `
            <h3>Maurya Empire</h3>
            <p>Chandragupta Maurya ne Maurya Empire ki sthapna ki.</p>
            <p>Chanakya/Kautilya unse associated hain.</p>
            <p>Ashoka ke Kalinga War ke baad uski policy mein important change aaya.</p>
            <p>Ashoka ke inscriptions ancient Indian history ke important sources hain.</p>
          `
        },
        {
          id: "gupta",
          name: "Gupta Empire",
          content: `
            <h3>Gupta Empire</h3>
            <p>Gupta period ko often classical age kaha jata hai.</p>
            <p>Samudragupta ki achievements Allahabad Pillar inscription se associated hain.</p>
            <p>Chandragupta II ko Vikramaditya bhi kaha jata hai.</p>
            <p>Aryabhata ancient Indian mathematics aur astronomy se associated hain.</p>
          `
        },
        {
          id: "medieval",
          name: "Medieval India",
          content: `
            <h3>Medieval India</h3>
            <p>Delhi Sultanate ke major dynasties: Mamluk, Khalji, Tughlaq, Sayyid aur Lodi.</p>
            <p>Mughal Empire ki sthapna Babur ne 1526 ke First Battle of Panipat ke baad ki.</p>
            <p>Akbar ki administration aur religious policies exam ke important topics hain.</p>
          `
        },
        {
          id: "modern",
          name: "Modern India and National Movement",
          content: `
            <h3>Modern India</h3>
            <ul>
              <li>Indian National Congress ki sthapna 1885 mein hui.</li>
              <li>Swadeshi Movement 1905 ke Bengal Partition se associated hai.</li>
              <li>Non-Cooperation Movement 1920 mein shuru hua.</li>
              <li>Civil Disobedience Movement 1930 mein Dandi March se associated hai.</li>
              <li>Quit India Movement 1942 mein shuru hua.</li>
            </ul>
          `
        }
      ]
    },

    {
      id: "geography",
      name: "Geography",
      icon: "🌍",
      topics: [
        {
          id: "earth",
          name: "Earth and Solar System",
          content: `
            <h3>Earth and Solar System</h3>
            <p>Earth Sun se third planet hai.</p>
            <p>Earth ka rotation day-night ka main cause hai.</p>
            <p>Earth ka revolution aur axial tilt seasons se associated hain.</p>
            <p>Equator 0° latitude par hai.</p>
          `
        },
        {
          id: "india-physical",
          name: "Physical Geography of India",
          content: `
            <h3>Physical Divisions of India</h3>
            <ul>
              <li>Himalayan Mountains</li>
              <li>Northern Plains</li>
              <li>Peninsular Plateau</li>
              <li>Indian Desert</li>
              <li>Coastal Plains</li>
              <li>Islands</li>
            </ul>
            <p>Western Coastal Plains Arabian Sea ke saath aur Eastern Coastal Plains Bay of Bengal ke saath hain.</p>
          `
        },
        {
          id: "rivers",
          name: "Indian Rivers",
          content: `
            <h3>Indian Rivers</h3>
            <p>Himalayan rivers mein perennial rivers ka major group milta hai.</p>
            <p>Important Himalayan river systems: Indus, Ganga aur Brahmaputra.</p>
            <p>Important Peninsular rivers: Godavari, Krishna, Kaveri, Narmada aur Tapi.</p>
            <p>Narmada aur Tapi westward flow karti hain.</p>
          `
        },
        {
          id: "climate",
          name: "Indian Climate and Monsoon",
          content: `
            <h3>Indian Climate and Monsoon</h3>
            <p>India mein monsoon seasonal winds aur rainfall ka major role hai.</p>
            <ul>
              <li>Southwest Monsoon generally June–September ke beech active hota hai.</li>
              <li>Northeast Monsoon Tamil Nadu ke rainfall mein important role nibhata hai.</li>
              <li>Western Ghats ke windward side par orographic rainfall hoti hai.</li>
              <li>Rajasthan ke western parts comparatively arid hain.</li>
            </ul>
          `
        }
      ]
    },

    {
      id: "polity",
      name: "Polity",
      icon: "⚖️",
      topics: [
        {
          id: "constitution",
          name: "Constitution Basics",
          content: `
            <h3>Indian Constitution</h3>
            <p>Constitution 26 November 1949 ko adopt hua.</p>
            <p>Constitution 26 January 1950 ko enforce hua.</p>
            <p>Constituent Assembly ke President Dr. Rajendra Prasad the.</p>
            <p>Drafting Committee ke Chairman Dr. B. R. Ambedkar the.</p>
          `
        },
        {
          id: "preamble",
          name: "Preamble",
          content: `
            <h3>Preamble</h3>
            <p>Preamble Constitution ke basic objectives ko express karta hai.</p>
            <p>Important words: Sovereign, Socialist, Secular, Democratic, Republic.</p>
            <p>Socialist, Secular aur Integrity words 42nd Constitutional Amendment, 1976 se add hue.</p>
          `
        },
        {
          id: "fundamental-rights",
          name: "Fundamental Rights",
          content: `
            <h3>Fundamental Rights</h3>
            <p>Fundamental Rights Part III mein hain.</p>
            <p>Articles 12–35 important hain.</p>
            <p>Right to Equality: Articles 14–18.</p>
            <p>Right to Freedom: Articles 19–22.</p>
            <p>Right to Constitutional Remedies: Article 32.</p>
          `
        },
        {
          id: "dpsp",
          name: "Directive Principles",
          content: `
            <h3>Directive Principles of State Policy</h3>
            <p>DPSP Constitution ke Part IV mein hain.</p>
            <p>Articles 36–51 important hain.</p>
            <p>Ye courts mein directly enforceable nahi hain, lekin governance ke liye important guidelines hain.</p>
          `
        },
        {
          id: "parliament",
          name: "Parliament",
          content: `
            <h3>Parliament of India</h3>
            <p>Parliament mein President, Lok Sabha aur Rajya Sabha shamil hote hain.</p>
            <p>Money Bill Lok Sabha mein introduce hota hai.</p>
            <p>Article 79 Parliament se related hai.</p>
          `
        }
      ]
    },

    {
      id: "science",
      name: "Science",
      icon: "🔬",
      topics: [
        {
          id: "physics",
          name: "Physics Basics",
          content: `
            <h3>Physics Basics</h3>
            <p>Speed = Distance / Time.</p>
            <p>Force ka SI unit Newton hai.</p>
            <p>Work ka SI unit Joule hai.</p>
            <p>Power ka SI unit Watt hai.</p>
            <p>Electric current ka SI unit Ampere hai.</p>
          `
        },
        {
          id: "chemistry",
          name: "Chemistry Basics",
          content: `
            <h3>Chemistry Basics</h3>
            <p>Atom element ki chemical properties ko represent karne wali basic unit hai.</p>
            <p>pH 7 se kam: acidic; 7: neutral; 7 se zyada: basic, standard conditions mein.</p>
            <p>Water ka chemical formula H₂O hai.</p>
          `
        },
        {
          id: "biology",
          name: "Biology Basics",
          content: `
            <h3>Biology Basics</h3>
            <p>Cell life ki basic structural aur functional unit hai.</p>
            <p>Human heart mein four chambers hote hain.</p>
            <p>Plants photosynthesis ke through food banate hain.</p>
            <p>Kidneys blood filtration mein important role nibhati hain.</p>
          `
        }
      ]
    },

    {
      id: "economy",
      name: "Economy",
      icon: "📈",
      topics: [
        {
          id: "economy-basics",
          name: "Indian Economy Basics",
          content: `
            <h3>Indian Economy Basics</h3>
            <p>GDP ek specified period mein country ke andar produce hue final goods aur services ki value measure karta hai.</p>
            <p>Inflation ka matlab general price level mein sustained increase hai.</p>
            <p>RBI India ka central bank hai.</p>
            <p>Budget government ke estimated receipts aur expenditure ka statement hai.</p>
          `
        },
        {
          id: "banking",
          name: "Banking Basics",
          content: `
            <h3>Banking Basics</h3>
            <p>RBI monetary policy aur banking system mein important role nibhata hai.</p>
            <p>Repo rate woh rate hai jis par RBI eligible securities ke against banks ko short-term funds lend karta hai.</p>
            <p>CRR ka full form Cash Reserve Ratio hai.</p>
            <p>SLR ka full form Statutory Liquidity Ratio hai.</p>
          `
        }
      ]
    },

    {
      id: "hindi",
      name: "Hindi",
      icon: "📚",
      topics: [
        {
          id: "hindi-grammar",
          name: "Hindi Grammar Basics",
          content: `
            <h3>Hindi Grammar</h3>
            <p>Sangya kisi vyakti, vastu, sthan ya bhav ka naam hai.</p>
            <p>Sarvanam sangya ke sthan par prayog hota hai.</p>
            <p>Visheshan sangya ya sarvanam ki visheshta batata hai.</p>
            <p>Kriya kisi kaam ya avastha ko batati hai.</p>
          `
        },
        {
          id: "sandhi",
          name: "Sandhi",
          content: `
            <h3>Sandhi</h3>
            <p>Do varnon ke mel se hone wale parivartan ko Sandhi kehte hain.</p>
            <p>Main types: Swar Sandhi, Vyanjan Sandhi aur Visarg Sandhi.</p>
            <p>Sandhi aur Samas ko confuse na karein; dono alag concepts hain.</p>
          `
        },
        {
          id: "samas",
          name: "Samas",
          content: `
            <h3>Samas</h3>
            <p>Do ya adhik shabdon ko milakar sankshipt shabd banane ki prakriya Samas hai.</p>
            <p>Main types: Avyayibhav, Tatpurush, Karmadharaya, Dwandwa, Dvigu aur Bahuvrihi.</p>
          `
        }
      ]
    },

    {
      id: "english",
      name: "English",
      icon: "🔤",
      topics: [
        {
          id: "grammar",
          name: "English Grammar",
          content: `
            <h3>English Grammar</h3>
            <p>Noun names a person, place, thing or idea.</p>
            <p>Pronoun is used in place of a noun.</p>
            <p>Verb expresses an action or state.</p>
            <p>Adjective describes a noun or pronoun.</p>
          `
        },
        {
          id: "vocabulary",
          name: "Vocabulary",
          content: `
            <h3>Vocabulary</h3>
            <p>Synonyms have similar meanings.</p>
            <p>Antonyms have opposite meanings.</p>
            <p>Learn words with their meaning and example sentences.</p>
          `
        }
      ]
    },

    {
      id: "computer",
      name: "Computer",
      icon: "💻",
      topics: [
        {
          id: "computer-basics",
          name: "Computer Fundamentals",
          content: `
            <h3>Computer Fundamentals</h3>
            <p>CPU stands for Central Processing Unit.</p>
            <p>RAM is volatile memory.</p>
            <p>ROM is non-volatile memory.</p>
            <p>Operating system manages computer hardware and software resources.</p>
          `
        }
      ]
    },

    {
      id: "gk",
      name: "General Knowledge",
      icon: "🌟",
      topics: [
        {
          id: "static-gk",
          name: "Static GK Basics",
          content: `
            <h3>Static GK</h3>
            <p>Static GK mein national symbols, important places, books and authors, awards aur organisations jaise topics aate hain.</p>
            <p>Current affairs ko exam ke relevant period ke hisaab se alag se update karna chahiye.</p>
          `
        }
      ]
    }

  ],

  questions: [

    {
      id: "math-001",
      subject: "Maths",
      topic: "percentage",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "200 ka 25% kitna hoga?",
      options: ["25", "40", "50", "75"],
      answer: 2,
      explanation: "200 × 25 / 100 = 50."
    },

    {
      id: "math-002",
      subject: "Maths",
      topic: "number-system",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "12 aur 18 ka HCF kya hai?",
      options: ["2", "3", "6", "9"],
      answer: 2,
      explanation: "12 aur 18 dono ka greatest common factor 6 hai."
    },

    {
      id: "math-003",
      subject: "Maths",
      topic: "percentage",
      difficulty: "Medium",
      type: "Practice",
      year: null,
      question: "Kisi number ka 20% = 60 hai. Number kya hai?",
      options: ["120", "240", "300", "360"],
      answer: 2,
      explanation: "Number = 60 × 100 / 20 = 300."
    },

    {
      id: "math-004",
      subject: "Maths",
      topic: "ratio",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "10:15 ka simplest form kya hai?",
      options: ["1:2", "2:3", "3:5", "5:6"],
      answer: 1,
      explanation: "Dono terms ko 5 se divide karne par 2:3 milta hai."
    },

    {
      id: "math-005",
      subject: "Maths",
      topic: "profit-loss",
      difficulty: "Medium",
      type: "Practice",
      year: null,
      question: "Cost Price ₹400 aur Selling Price ₹500 hai. Profit percentage kitna hai?",
      options: ["20%", "25%", "30%", "40%"],
      answer: 1,
      explanation: "Profit = 100. Profit% = 100/400 × 100 = 25%."
    },

    {
      id: "math-006",
      subject: "Maths",
      topic: "average",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "4, 6, 8 aur 10 ka average kya hai?",
      options: ["6", "7", "8", "9"],
      answer: 1,
      explanation: "Sum 28 hai. Average = 28/4 = 7."
    },

    {
      id: "math-007",
      subject: "Maths",
      topic: "time-work",
      difficulty: "Medium",
      type: "Practice",
      year: null,
      question: "A ek kaam 10 din mein karta hai. Uska ek din ka work kya hai?",
      options: ["1/5", "1/10", "1/15", "10"],
      answer: 1,
      explanation: "Ek din ka work = 1/10."
    },

    {
      id: "math-008",
      subject: "Maths",
      topic: "speed-distance",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "60 km ki distance 2 hours mein cover ki. Speed kya hai?",
      options: ["20 km/h", "30 km/h", "40 km/h", "60 km/h"],
      answer: 1,
      explanation: "Speed = 60/2 = 30 km/h."
    },

    {
      id: "math-009",
      subject: "Maths",
      topic: "algebra",
      difficulty: "Medium",
      type: "Practice",
      year: null,
      question: "(a + b)² ka correct expansion kya hai?",
      options: ["a²+b²", "a²−2ab+b²", "a²+2ab+b²", "a²−b²"],
      answer: 2,
      explanation: "(a+b)² = a² + 2ab + b²."
    },

    {
      id: "reason-001",
      subject: "Reasoning",
      topic: "series",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "2, 4, 6, 8, ?",
      options: ["9", "10", "11", "12"],
      answer: 1,
      explanation: "Har baar 2 add ho raha hai. Answer 10."
    },

    {
      id: "reason-002",
      subject: "Reasoning",
      topic: "analogy",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Bird : Fly :: Fish : ?",
      options: ["Run", "Swim", "Walk", "Jump"],
      answer: 1,
      explanation: "Bird flies; fish swims."
    },

    {
      id: "reason-003",
      subject: "Reasoning",
      topic: "coding",
      difficulty: "Medium",
      type: "Practice",
      year: null,
      question: "Agar CAT ko DBU likha jaye, toh DOG ko kaise likhenge?",
      options: ["EPH", "EOG", "FPH", "DPH"],
      answer: 0,
      explanation: "Har letter ko ek position aage shift kiya gaya hai: D→E, O→P, G→H."
    },

    {
      id: "reason-004",
      subject: "Reasoning",
      topic: "ranking",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Ek line mein Ravi left se 5th aur right se 7th hai. Total persons kitne hain?",
      options: ["10", "11", "12", "13"],
      answer: 1,
      explanation: "Total = 5 + 7 − 1 = 11."
    },

    {
      id: "history-001",
      subject: "History",
      topic: "ivc",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Great Bath kis Harappan site se associated hai?",
      options: ["Lothal", "Harappa", "Mohenjo-daro", "Kalibangan"],
      answer: 2,
      explanation: "Great Bath Mohenjo-daro se associated hai."
    },

    {
      id: "history-002",
      subject: "History",
      topic: "vedic",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Sabse purana Veda kaunsa maana jata hai?",
      options: ["Samaveda", "Rigveda", "Yajurveda", "Atharvaveda"],
      answer: 1,
      explanation: "Rigveda sabse purana Veda maana jata hai."
    },

    {
      id: "history-003",
      subject: "History",
      topic: "buddhism",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Gautama Buddha ko enlightenment kahan mila tha?",
      options: ["Sarnath", "Lumbini", "Bodh Gaya", "Kushinagar"],
      answer: 2,
      explanation: "Bodh Gaya enlightenment se associated hai."
    },

    {
      id: "history-004",
      subject: "History",
      topic: "modern",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Indian National Congress ki sthapna kis saal hui?",
      options: ["1885", "1905", "1919", "1942"],
      answer: 0,
      explanation: "Indian National Congress ki sthapna 1885 mein hui."
    },

    {
      id: "geo-001",
      subject: "Geography",
      topic: "earth",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Earth Sun se kaunsa planet hai?",
      options: ["First", "Second", "Third", "Fourth"],
      answer: 2,
      explanation: "Earth Sun se third planet hai."
    },

    {
      id: "geo-002",
      subject: "Geography",
      topic: "rivers",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Inmein se kaunsi river westward flow karti hai?",
      options: ["Godavari", "Krishna", "Narmada", "Kaveri"],
      answer: 2,
      explanation: "Narmada westward flow karne wali major Peninsular river hai."
    },

    {
      id: "polity-001",
      subject: "Polity",
      topic: "constitution",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Indian Constitution kab enforce hua?",
      options: ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1950"],
      answer: 2,
      explanation: "Constitution 26 January 1950 ko enforce hua."
    },

    {
      id: "polity-002",
      subject: "Polity",
      topic: "fundamental-rights",
      difficulty: "Medium",
      type: "Practice",
      year: null,
      question: "Fundamental Rights Constitution ke kis Part mein hain?",
      options: ["Part I", "Part II", "Part III", "Part IV"],
      answer: 2,
      explanation: "Fundamental Rights Part III mein hain."
    },

    {
      id: "science-001",
      subject: "Science",
      topic: "physics",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Force ka SI unit kya hai?",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      answer: 1,
      explanation: "Force ka SI unit Newton hai."
    },

    {
      id: "science-002",
      subject: "Science",
      topic: "biology",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Life ki basic structural aur functional unit kya hai?",
      options: ["Tissue", "Organ", "Cell", "System"],
      answer: 2,
      explanation: "Cell life ki basic structural aur functional unit hai."
    },

    {
      id: "economy-001",
      subject: "Economy",
      topic: "banking",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "India ka central bank kaunsa hai?",
      options: ["SBI", "RBI", "NABARD", "SEBI"],
      answer: 1,
      explanation: "Reserve Bank of India (RBI) India ka central bank hai."
    },

    {
      id: "hindi-001",
      subject: "Hindi",
      topic: "sandhi",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Sandhi ke mukhya bhed kitne maane jaate hain?",
      options: ["2", "3", "4", "6"],
      answer: 1,
      explanation: "Mukhya bhed Swar Sandhi, Vyanjan Sandhi aur Visarg Sandhi hain."
    },

    {
      id: "english-001",
      subject: "English",
      topic: "grammar",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "Which word is a noun?",
      options: ["Quickly", "Beautiful", "Teacher", "Run"],
      answer: 2,
      explanation: "Teacher is a noun because it names a person."
    },

    {
      id: "computer-001",
      subject: "Computer",
      topic: "computer-basics",
      difficulty: "Easy",
      type: "Practice",
      year: null,
      question: "CPU ka full form kya hai?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Program Utility",
        "Control Processing User"
      ],
      answer: 0,
      explanation: "CPU ka full form Central Processing Unit hai."
    }

  ]

};
