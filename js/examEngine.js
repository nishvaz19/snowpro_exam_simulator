/* ======================================================
   GLOBAL STATE
   ====================================================== */
let fullBank = [];       // Shuffled source data
let examQuestions = [];  // Questions picked adaptively
let answers = {};        // User selections {questionIndex: optionIndex}
let flagged = [];
let current = 0;
let EXAM_SIZE = 500;     // Session length

let currentDifficulty = "easy"; 
let usedQuestionIds = new Set(); 
let hintPersistent = false;      

let examTimer;
let timeRemaining = 60 * 120; // 120 minutes

/* ======================================================
   CORE EXAM ENGINE
   ====================================================== */

function startExam() {
    if (typeof questionBank === 'undefined') {
        console.error("questionBank is missing.");
        return;
    }

    // 1. Load and Shuffle the entire bank first
    //fullBank = shuffleArray([...questionBank]);
    fullBank = questionBank
    // 2. Reset State
    examQuestions = [];
    usedQuestionIds.clear();
    answers = {};
    flagged = [];
    current = 0;
    currentDifficulty = "easy";
    hintPersistent = false; 

    // 3. Kick off
    pickNextAdaptiveQuestion();
    startTimer();
    loadQuestion();
}

/**
 * SHUFFLE UTILITY
 * Randomizes the order of the bank so difficulty pools are random.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * ADAPTIVE LOGIC
 */
function pickNextAdaptiveQuestion() {
    if (current > 0) {
        const lastIndex = current - 1;
        const secondLastIndex = current - 2;

        const lastCorrect = answers[lastIndex] === examQuestions[lastIndex].answer;
        const secondLastCorrect = secondLastIndex >= 0 ? 
            (answers[secondLastIndex] === examQuestions[secondLastIndex].answer) : false;

        // Step Down: 1 Wrong
        if (!lastCorrect) {
            if (currentDifficulty === "hard") currentDifficulty = "medium";
            else if (currentDifficulty === "medium") currentDifficulty = "easy";
        } 
        // Step Up: 2 Correct
        else if (lastCorrect && secondLastCorrect) {
            if (currentDifficulty === "easy") currentDifficulty = "medium";
            else if (currentDifficulty === "medium") currentDifficulty = "hard";
        }
    }

    // Find available question from shuffled pool matching difficulty
    let pool = fullBank.filter(q => q.difficulty === currentDifficulty && !usedQuestionIds.has(q.id));
    
    // Fallback if difficulty exhausted
    if (pool.length === 0) pool = fullBank.filter(q => !usedQuestionIds.has(q.id));

    if (pool.length > 0) {
        const selectedQuestion = pool[0]; // Take first from shuffled bank
        examQuestions.push(selectedQuestion);
        usedQuestionIds.add(selectedQuestion.id);
    }
}

/**
 * LIVE SCORE UPDATE
 * Displays H, M, E breakdown and total score
 */
function updateRunningScore() {
    let stats = { hard: 0, medium: 0, easy: 0, correct: 0, answered: 0 };

    examQuestions.forEach((q, i) => {
        if (answers[i] !== undefined) {
            stats.answered++;
            if (answers[i] === q.answer) {
                stats.correct++;
                if (q.difficulty === "hard") stats.hard++;
                else if (q.difficulty === "medium") stats.medium++;
                else if (q.difficulty === "easy") stats.easy++;
            }
        }
    });

    const scoreEl = document.getElementById("runningScore");
    if (scoreEl) {
        scoreEl.innerHTML = `H:${stats.hard} M:${stats.medium} E:${stats.easy} | Score: ${stats.correct}/${stats.answered}`;
    }
}

function loadQuestion() {
    let q = examQuestions[current];
    if (!q) return;

    document.getElementById("question").innerHTML = (current + 1) + ". " + q.question;
    
    let flagMark = flagged.includes(current) ? " 🚩" : "";
    document.getElementById("progress").innerHTML = 
        `Question ${current + 1} / ${EXAM_SIZE} [${q.difficulty.toUpperCase()}]${flagMark}`;

    updateRunningScore();
    renderOptions(q);
    
    const hintBox = document.getElementById("hint");
    if (hintBox) {
        hintBox.innerHTML = `<b>Explanation:</b> ${q.explanation || "N/A"}`;
        hintBox.style.display = hintPersistent ? "block" : "none"; 
    }
}

function renderOptions(q) {
    let html = "";
    q.options.forEach((opt, i) => {
        let checked = answers[current] === i ? "checked" : "";
        html += `
            <label class="option" style="display:block; margin-bottom:10px; cursor:pointer; padding:10px; border:1px solid #eee; border-radius:5px;">
                <input type="radio" name="opt" value="${i}" ${checked} onclick="saveAnswer(${i})">
                ${opt}
            </label>
        `;
    });
    document.getElementById("options").innerHTML = html;
}

function saveAnswer(value) {
    answers[current] = value;
    updateRunningScore();
}

/* ======================================================
   NAVIGATION
   ====================================================== */

function nextQuestion() {
    if (answers[current] === undefined) {
        alert("Selection required for adaptive calculation.");
        return;
    }

    if (current < EXAM_SIZE - 1) {
        current++;
        if (!examQuestions[current]) pickNextAdaptiveQuestion();
        loadQuestion();
        window.scrollTo(0,0);
    } else {
        submitExam();
    }
}

function prevQuestion() {
    if (current > 0) {
        current--;
        loadQuestion();
        window.scrollTo(0,0);
    }
}

function showHint() {
    let h = document.getElementById("hint");
    if(h) {
        h.style.display = "block";
        hintPersistent = true; 
    }
}

function flagCurrent() {
    if (flagged.includes(current)) {
        flagged = flagged.filter(f => f !== current);
    } else {
        flagged.push(current);
    }
    loadQuestion();
}

/* ======================================================
   TIMER & RESULTS
   ====================================================== */

function startTimer() {
    if (examTimer) clearInterval(examTimer);
    examTimer = setInterval(() => {
        timeRemaining--;
        let mins = Math.floor(timeRemaining / 60);
        let secs = timeRemaining % 60;
        const timerEl = document.getElementById("timer");
        if(timerEl) timerEl.innerHTML = `Time: ${mins}:${secs < 10 ? "0" : ""}${secs}`;
        if (timeRemaining <= 0) submitExam();
    }, 1000);
}

function submitExam() {
    clearInterval(examTimer);
    let score = 0;
    let levelBreakdown = {}; 
    let detailedReviewHTML = ""; 
    const finalCount = examQuestions.length;

    examQuestions.forEach((q, i) => {
        const diff = q.difficulty || "unclassified";
        if (!levelBreakdown[diff]) levelBreakdown[diff] = { correct: 0, total: 0 };
        levelBreakdown[diff].total++;

        const isCorrect = answers[i] === q.answer;
        if (isCorrect) {
            score++;
            levelBreakdown[diff].correct++;
        }

        detailedReviewHTML += `
            <div class="review-item" style="margin-bottom:20px; padding:15px; border:1px solid #ddd; border-radius:8px;">
                <b>Q${i + 1} [${diff.toUpperCase()}]:</b> ${q.question}<br>
                <span style="color: ${isCorrect ? 'green' : 'red'}">
                    Your answer: ${q.options[answers[i]] || "<i>Not answered</i>"}
                </span><br>
                <span style="color: green">Correct answer: ${q.options[q.answer]}</span><br>
                <p style="font-size:0.9em; background:#f9f9f9; padding:10px; margin-top:10px; border-radius:5px;">
                    <i>${q.explanation || ""}</i>
                </p>
            </div>
        `;
    });

    const percent = Math.round((score / finalCount) * 100);
    saveExamResults(window.currentExamType || "General", score, finalCount, levelBreakdown);

    document.getElementById("results").innerHTML = `
        <div style="text-align:center; padding:20px; background:#f0f4f8; border-radius:10px;">
            <h1>Final Result: ${percent}%</h1>
            <h2>Score: ${score} / ${finalCount}</h2>
            <button onclick="location.reload()" style="padding:10px 20px;">Restart Exam</button>
        </div>
        <hr>${detailedReviewHTML}
    `;
    window.scrollTo({ top: document.getElementById("results").offsetTop, behavior: 'smooth' });
}

function saveExamResults(examType, score, total, levelBreakdown) {
    let history = JSON.parse(localStorage.getItem("exam_history") || "[]");
    history.push({
        date: new Date().toLocaleString(),
        exam: examType,
        score: score,
        total: total,
        percentage: Math.round((score / total) * 100),
        levels: levelBreakdown 
    });
    localStorage.setItem("exam_history", JSON.stringify(history));
}
