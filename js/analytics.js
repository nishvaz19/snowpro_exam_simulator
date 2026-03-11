function loadStats(){

let attempts =
localStorage.getItem("attempts") || 0

let correct =
localStorage.getItem("correct") || 0

let accuracy = attempts
? Math.round((correct/attempts)*100)
: 0

document.getElementById("stats").innerHTML =

`
Total Attempts: ${attempts}<br>
Correct Answers: ${correct}<br>
Accuracy: ${accuracy}%
`

}
