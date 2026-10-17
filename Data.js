/* =====================================================
   PROJECT IQBAL — DATA FILE
   File: data.js
   ===================================================== */

"use strict";

window.IQBAL_DATA = {

  exams: [
    { id: "chsl", name: "SSC CHSL", category: "SSC", icon: "📝", description: "10+2 level examination" },
    { id: "cgl", name: "SSC CGL", category: "SSC", icon: "🎯", description: "Graduate level examination" },
    { id: "mts", name: "SSC MTS", category: "SSC", icon: "📚", description: "Multi Tasking Staff" },
    { id: "gd", name: "SSC GD", category: "SSC", icon: "🛡️", description: "Constable recruitment" },
    { id: "cpo", name: "SSC CPO", category: "SSC", icon: "👮", description: "Sub-Inspector examination" },
    { id: "pet", name: "UPSSSC PET", category: "Other", icon: "📖", description: "Preliminary Eligibility Test" },
    { id: "upsi", name: "UP Police SI", category: "Police", icon: "🚔", description: "Sub-Inspector recruitment" },
    { id: "upconstable", name: "UP Police Constable", category: "Police", icon: "👮", description: "Police constable examination" },
    { id: "railway_ntpc", name: "Railway NTPC", category: "Railway", icon: "🚆", description: "Non-Technical Popular Categories" },
    { id: "railway_group_d", name: "Railway Group D", category: "Railway", icon: "🚉", description: "Railway Level 1 recruitment" },
    { id: "railway_alp", name: "Railway ALP", category: "Railway", icon: "🚄", description: "Assistant Loco Pilot" },
    { id: "ibps_clerk", name: "IBPS Clerk", category: "Other", icon: "🏦", description: "Bank clerical recruitment" },
    { id: "sbi_clerk", name: "SBI Clerk", category: "Other", icon: "💳", description: "Junior Associate recruitment" },
    { id: "uppsc", name: "UPPSC PCS", category: "Other", icon: "🏛️", description: "State civil services" },
    { id: "ctet", name: "CTET", category: "Teaching", icon: "👨‍🏫", description: "Teacher eligibility test" },
    { id: "nda", name: "NDA", category: "Other", icon: "🎖️", description: "National Defence Academy" },
    { id: "cds", name: "CDS", category: "Other", icon: "🪖", description: "Combined Defence Services" },
    { id: "other", name: "Other Government Exams", category: "Other", icon: "🇮🇳", description: "Build your own preparation plan" }
  ],

  subjects: [
    {
      id: "maths",
      name: "Maths",
      icon: "➗",
      description: "Arithmetic, algebra and quantitative aptitude",
      topics: [
        {
          id: "number-system",
          name: "Number System",
          content: `
            <h3>Number System — Basics</h3>
            <p>Numbers ko unki properties ke according alag-alag categories mein divide kiya jata hai.</p>
            <ul>
              <li>Natural numbers: 1, 2, 3, ...</li>
              <li>Whole numbers: 0, 1, 2, 3, ...</li>
              <li>Integers: ..., -2, -1, 0, 1, 2, ...</li>
              <li>Prime number: Jiske exactly 2 positive factors hon.</li>
              <li>Composite number: 1 se bada number jiske 2 se zyada positive factors hon.</li>
            </ul>
            <div class="trick-box"><strong>Trick:</strong> 2 eklauta even prime number hai. Number 1 na prime hai, na composite.</div>
            <h3>Divisibility Rules</h3>
            <ul>
              <li>2: Last digit even ho.</li>
              <li>3: Digits ka sum 3 se divisible ho.</li>
              <li>5: Last digit 0 ya 5 ho.</li>
              <li>9: Digits ka sum 9 se divisible ho.</li>
              <li>10: Last digit 0 ho.</li>
              <li>11: Alternate digit sums ka difference 0 ya 11 ka multiple ho.</li>
            </ul>`
        },
        {
          id: "percentage",
          name: "Percentage",
          content: `
            <h3>Percentage ka meaning</h3>
            <p>Percentage ka matlab hota hai per hundred.</p>
            <div class="example-box"><strong>Formula:</strong> Percentage = (Part ÷ Total) × 100</div>
            <h3>Important Conversions</h3>
            <ul>
              <li>1/2 = 50%</li>
              <li>1/3 = 33⅓%</li>
              <li>1/4 = 25%</li>
              <li>1/5 = 20%</li>
              <li>1/8 = 12.5%</li>
              <li>1/10 = 10%</li>
            </ul>
            <div class="trick-box"><strong>Short trick:</strong> x% of y = y% of x. Example: 25% of 80 = 80% of 25 = 20.</div>`
        },
        {
          id: "ratio",
          name: "Ratio and Proportion",
          content: `
            <h3>Ratio</h3>
            <p>Ratio do quantities ki comparison hoti hai. Example: 2:3.</p>
            <div class="example-box">Agar ratio 2:3 aur total 50 hai, to total parts = 5. Ek part = 50 ÷ 5 = 10. Quantities 20 aur 30 hongi.</div>
            <div class="trick-box"><strong>Rule:</strong> Ratio ke parts add karke total se divide karo, phir required part se multiply karo.</div>`
        },
        {
          id: "profit-loss",
          name: "Profit and Loss",
          content: `
            <h3>Basic Formulas</h3>
            <ul>
              <li>Profit = Selling Price − Cost Price</li>
              <li>Loss = Cost Price − Selling Price</li>
              <li>Profit% = (Profit ÷ Cost Price) × 100</li>
              <li>Loss% = (Loss ÷ Cost Price) × 100</li>
            </ul>
            <div class="trick-box"><strong>Important:</strong> Profit aur loss percentage normally Cost Price par calculate hota hai.</div>`
        },
        {
          id: "average",
          name: "Average",
          content: `
            <h3>Formula</h3>
            <div class="example-box">Average = Sum of observations ÷ Number of observations</div>
            <p>Example: 10, 20 aur 30 ka average = 60 ÷ 3 = 20.</p>
            <div class="trick-box"><strong>Shortcut:</strong> Sum = Average × Number of observations.</div>`
        },
        {
          id: "interest",
          name: "Simple and Compound Interest",
          content: `
            <h3>Simple Interest</h3>
            <p>SI = (Principal × Rate × Time) ÷ 100</p>
            <h3>Compound Interest</h3>
            <p>Amount = P(1 + R/100)^T</p>
            <p>CI = Amount − Principal.</p>
            <div class="trick-box">Formula apply karte waqt rate aur time ki units check karna zaroori hai.</div>`
        },
        {
          id: "time-work",
          name: "Time and Work",
          content: `
            <h3>Basic Method</h3>
            <p>Agar A kisi kaam ko x din mein karta hai, to uska 1 din ka work = 1/x.</p>
            <div class="example-box">A 10 din mein aur B 15 din mein kaam karta hai. Combined work = 1/10 + 1/15 = 1/6. Dono milkar 6 din mein kaam karenge.</div>
            <div class="trick-box">Work rate add hota hai; total time directly add nahi hota.</div>`
        },
        {
          id: "speed-distance",
          name: "Time, Speed and Distance",
          content: `
            <h3>Three Main Formulas</h3>
            <ul>
              <li>Speed = Distance ÷ Time</li>
              <li>Distance = Speed × Time</li>
              <li>Time = Distance ÷ Speed</li>
            </ul>
            <div class="trick-box">km/h ko m/s mein badalne ke liye 5/18 se multiply karo. m/s ko km/h mein badalne ke liye 18/5 se multiply karo.</div>`
        },
        {
          id: "algebra",
          name: "Algebra",
          content: `
            <h3>Important Identities</h3>
            <ul>
              <li>(a + b)² = a² + 2ab + b²</li>
              <li>(a − b)² = a² − 2ab + b²</li>
              <li>a² − b² = (a − b)(a + b)</li>
              <li>(a + b)³ = a³ + 3a²b + 3ab² + b³</li>
            </ul>
            <div class="trick-box">Factorisation mein middle term ko do terms mein split karo jinka product first × last term ke barabar ho.</div>`
        },
        {
          id: "geometry",
          name: "Geometry",
          content: `
            <h3>Basic Facts</h3>
            <ul>
              <li>Triangle ke angles ka sum = 180°.</li>
              <li>Quadrilateral ke interior angles ka sum = 360°.</li>
              <li>Linear pair ka sum = 180°.</li>
              <li>Vertically opposite angles equal hote hain.</li>
            </ul>`
        },
        {
          id: "mensuration",
          name: "Mensuration",
          content: `
            <h3>Common Formulas</h3>
            <ul>
              <li>Rectangle area = length × breadth.</li>
              <li>Square area = side².</li>
              <li>Triangle area = ½ × base × height.</li>
              <li>Circle area = πr².</li>
              <li>Circle circumference = 2πr.</li>
              <li>Cube volume = side³.</li>
              <li>Cuboid volume = length × breadth × height.</li>
            </ul>`
        },
        {
          id: "statistics",
          name: "Statistics and Data Interpretation",
          content: `
            <h3>Important Concepts</h3>
            <ul>
              <li>Mean = Sum ÷ Number of observations.</li>
              <li>Median = Ordered data ka middle value.</li>
              <li>Mode = Sabse frequently occurring value.</li>
            </ul>
            <p>DI questions mein table, bar graph, pie chart aur line graph se information read ki jati hai.</p>`
        }
      ]
    },

    {
      id: "reasoning",
      name: "Reasoning",
      icon: "🧠",
      description: "Logical and analytical reasoning",
      topics: [
        {
          id: "analogy",
          name: "Analogy",
          content: `
            <h3>Analogy</h3>
            <p>Do cheezon ke beech relation samajhkar teesri cheez ka matching relation find karna hota hai.</p>
            <div class="example-box">Bird : Nest :: Bee : Hive</div>
            <div class="trick-box">Pehle relation identify karo—place, function, part-whole, synonym ya number relation.</div>`
        },
        {
          id: "series",
          name: "Number and Alphabet Series",
          content: `
            <h3>Series Approach</h3>
            <ul>
              <li>Consecutive differences check karo.</li>
              <li>Multiplication/division pattern check karo.</li>
              <li>Alternate terms check karo.</li>
              <li>Squares, cubes aur prime numbers consider karo.</li>
            </ul>
            <div class="example-box">2, 4, 8, 16, ? — har term × 2, answer 32.</div>`
        },
        {
          id: "coding",
          name: "Coding-Decoding",
          content: `
            <h3>Letter Positions</h3>
            <p>A=1, B=2, C=3 ... Z=26.</p>
            <div class="trick-box">Alphabet coding mein +1, −1, reverse alphabet aur position-based shifts check karo.</div>
            <div class="example-box">CAT ko har letter +1 karne par DBU likha jayega.</div>`
        },
        {
          id: "blood-relation",
          name: "Blood Relations",
          content: `
            <h3>Method</h3>
            <p>Question ko family tree ya diagram mein convert karo.</p>
            <ul>
              <li>Mother/father = one generation above.</li>
              <li>Brother/sister = same generation.</li>
              <li>Son/daughter = one generation below.</li>
            </ul>
            <div class="trick-box">Pronouns aur gender ko carefully track karo; assumptions mat banao.</div>`
        },
        {
          id: "direction",
          name: "Direction Sense",
          content: `
            <h3>Directions</h3>
            <p>North upar, South neeche, East right aur West left assume karke diagram banao.</p>
            <div class="trick-box">Right turn clockwise 90° aur left turn anticlockwise 90° hota hai, jab person ki facing direction se dekha jaye.</div>`
        },
        {
          id: "syllogism",
          name: "Syllogism",
          content: `
            <h3>Basic Rules</h3>
            <p>All, Some aur No jaise statements ko Venn diagrams se represent karna useful hai.</p>
            <div class="trick-box">Conclusion ko true tabhi mano jab woh given statements se logically follow kare.</div>`
        },
        {
          id: "classification",
          name: "Classification / Odd One Out",
          content: `
            <h3>Approach</h3>
            <p>Words, letters ya numbers mein common property identify karo. Jo item us property ko follow na kare, woh odd one out ho sakta hai.</p>
            <div class="example-box">2, 4, 6, 9, 10 — 9 odd hai kyunki baaki even numbers hain.</div>`
        },
        {
          id: "ranking",
          name: "Order and Ranking",
          content: `
            <h3>Basic Formula</h3>
            <p>Same person ke liye, total persons = rank from left + rank from right − 1.</p>
            <div class="example-box">Left se 8th aur right se 12th rank: total = 8 + 12 − 1 = 19.</div>`
        }
      ]
    },

    {
      id: "history",
      name: "History",
      icon: "🏛️",
      description: "Ancient, Medieval and Modern India",
      topics: [
        {
          id: "prehistoric",
          name: "Prehistoric India",
          content: `
            <h3>Major Periods</h3>
            <ul>
              <li>Palaeolithic: Old Stone Age.</li>
              <li>Mesolithic: Middle Stone Age.</li>
              <li>Neolithic: New Stone Age.</li>
              <li>Chalcolithic: Copper and stone tools.</li>
            </ul>
            <div class="trick-box">Neolithic period ko agriculture aur settled life ke development se associate kiya jata hai.</div>`
        },
        {
          id: "ivc",
          name: "Indus Valley Civilization",
          content: `
            <h3>Important Facts</h3>
            <ul>
              <li>Harappan civilization ek Bronze Age civilization thi.</li>
              <li>Harappa Ravi river ke paas located tha.</li>
              <li>Mohenjo-daro apne Great Bath ke liye famous hai.</li>
              <li>Dholavira apne water-management system ke liye important hai.</li>
              <li>Lothal ko traditional taur par dockyard remains se associate kiya jata hai.</li>
            </ul>
            <div class="trick-box">Harappan script abhi tak conclusively decipher nahi hui hai.</div>`
        },
        {
          id: "vedic",
          name: "Vedic Period",
          content: `
            <h3>Four Vedas</h3>
            <ul>
              <li>Rigveda: Hymns.</li>
              <li>Samaveda: Melodies and chants.</li>
              <li>Yajurveda: Ritual formulas.</li>
              <li>Atharvaveda: Prayers, charms and other material.</li>
            </ul>
            <div class="trick-box">Rigveda sabse purana Veda mana jata hai.</div>`
        },
        {
          id: "mahajanapadas",
          name: "Mahajanapadas",
          content: `
            <h3>Important Point</h3>
            <p>Ancient India mein Buddhist aur Jain texts 16 Mahajanapadas ka zikr karte hain.</p>
            <div class="trick-box">Magadha ke rise mein fertile land, iron resources, elephants aur river routes ne role play kiya.</div>`
        },
        {
          id: "buddhism-jainism",
          name: "Buddhism and Jainism",
          content: `
            <h3>Buddhism</h3>
            <ul>
              <li>Founder: Gautama Buddha.</li>
              <li>Four Noble Truths aur Eightfold Path central teachings hain.</li>
            </ul>
            <h3>Jainism</h3>
            <ul>
              <li>24th Tirthankara: Mahavira.</li>
              <li>Ahimsa Jain philosophy ka central principle hai.</li>
            </ul>
            <div class="trick-box">Exam questions mein founders, symbols, councils, texts aur important sites compare karo.</div>`
        },
        {
          id: "maurya",
          name: "Maurya Empire",
          content: `
            <h3>Important Rulers</h3>
            <ul>
              <li>Chandragupta Maurya: Maurya Empire ke founder.</li>
              <li>Bindusara: Chandragupta ke successor.</li>
              <li>Ashoka: Kalinga war ke baad Dhamma par emphasis.</li>
            </ul>
            <div class="trick-box">Ashokan inscriptions ke studies mein Brahmi aur Kharosthi scripts important hain.</div>`
        },
        {
          id: "gupta",
          name: "Gupta Period",
          content: `
            <h3>Key Points</h3>
            <ul>
              <li>Samudragupta ki achievements Allahabad Pillar inscription se jaani jati hain.</li>
              <li>Chandragupta II ko Vikramaditya bhi kaha jata hai.</li>
              <li>Aryabhata mathematics aur astronomy se associated hain.</li>
            </ul>
            <div class="trick-box">Gupta period ko art, literature aur science ke important phase ke roop mein padha jata hai.</div>`
        },
        {
          id: "medieval",
          name: "Medieval India",
          content: `
            <h3>Major Themes</h3>
            <ul>
              <li>Delhi Sultanate: Mamluk, Khalji, Tughlaq, Sayyid aur Lodi dynasties.</li>
              <li>Mughal Empire: Babur, Humayun, Akbar, Jahangir, Shah Jahan aur Aurangzeb.</li>
              <li>Bhakti and Sufi movements: Religious and social traditions.</li>
            </ul>
            <div class="trick-box">Dynasties ko chronological order mein padho aur founders, administration, monuments aur important battles ki table banao.</div>`
        },
        {
          id: "modern",
          name: "Modern India and National Movement",
          content: `
            <h3>Important Milestones</h3>
            <ul>
              <li>1757: Battle of Plassey.</li>
              <li>1857: Revolt of 1857.</li>
              <li>1885: Indian National Congress founded.</li>
              <li>1919: Jallianwala Bagh massacre; Rowlatt Act period.</li>
              <li>1920: Non-Cooperation Movement launched.</li>
              <li>1930: Civil Disobedience Movement and Salt March.</li>
              <li>1942: Quit India Movement.</li>
              <li>1947: Indian independence.</li>
            </ul>
            <div class="trick-box">Movements ko year, leader, cause, place aur outcome ke saath revise karo.</div>`
        }
      ]
    },

    {
      id: "geography",
      name: "Geography",
      icon: "🌍",
      description: "Indian and World Geography",
      topics: [
        {
          id: "earth",
          name: "Earth and Solar System",
          content: `
            <h3>Basics</h3>
            <ul>
              <li>Earth apni axis par rotate karti hai.</li>
              <li>Earth ki revolution aur axial tilt seasons ke formation mein important hain.</li>
              <li>Equator latitude 0° hai.</li>
              <li>Prime Meridian longitude 0° hai.</li>
            </ul>`
        },
        {
          id: "india-physical",
          name: "Physical Geography of India",
          content: `
            <h3>Major Physiographic Divisions</h3>
            <ul>
              <li>Himalayan Mountains.</li>
              <li>Northern Plains.</li>
              <li>Peninsular Plateau.</li>
              <li>Indian Desert.</li>
              <li>Coastal Plains.</li>
              <li>Islands.</li>
            </ul>`
        },
        {
          id: "rivers",
          name: "Indian Rivers",
          content: `
            <h3>Major River Systems</h3>
            <ul>
              <li>Indus river system.</li>
              <li>Ganga river system.</li>
              <li>Brahmaputra river system.</li>
              <li>Godavari, Krishna, Kaveri, Narmada and Tapi.</li>
            </ul>
            <div class="trick-box">East-flowing peninsular rivers generally drain into the Bay of Bengal. Narmada and Tapi flow westward into the Arabian Sea.</div>`
        },
        {
          id: "climate",
          name: "Indian Climate and Monsoon",
          content: `
            <h3>Key Concepts</h3>
            <p>Indian climate mein seasonal reversal of winds aur monsoon rainfall ka major role hai.</p>
            <ul>
              <li>Southwest monsoon usually June–September ke period mein active hota hai.</li>
              <li>Northeast monsoon Tamil Nadu ke rainfall 
