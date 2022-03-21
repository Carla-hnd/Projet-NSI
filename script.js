let score = 0
const statements = [
    {
        displayText: "La capitale de l'Inde est Bombay",
        answer: false
    },
    {
        displayText:"Le premier ministre anglais est Boris johnson",
        answer: true
    },
    {
        displayText:"1789 est l'année de la révolution française",
        answer: true
    },{
        displayText: "Lors de la coupe du monde, c'est la Russie qui a affronté la France",
        answer: false
    },
    {
        displayText:"Le Nil est le plus long fleuve du monde",
        answer: false
    },
    {
        displayText:"Dans le film Forrest Gump, l'acteur principal est Tom Hanks"
        answer: true
    },
]
let currentStatmentIndex = 0

function updateScore(updatedScore) {
    document.getElementById('score').innerHTML = updatedScore
}

function showStatement(statementIndex) {
    if(statementIndex > statements.length - 1) {
        endGame(true)
    } else{
        const statement = statements[statementIndex]
        document.getElementById('statement').innerHTML = statement.displayText
    }

}

function endGame(didWin) {
    if (didWin) {
        document.getElementById('winning-screen').style.display = "block"
    } else {
        document.getElementById('losing-screen').style.display = "block"
    }
    document.getElementById('quiz-game').style.display = "none"
}

function startGame() {
        currentStatmentIndex = 0
        score = 0
        updateScore(score)
        showStatement(currentStatmentIndex)
        document.getElementById('losing-screen').style.display = "none"
        document.getElementById('winning-screen').style.display = "none"
        document.getElementById('quiz-game').style.display = "block"
}

function checksAnswer(answer) {
    const correctAnswer = statements[currentStatmentIndex].answer
    if (answer === correctAnswer) {
        score = score + 1
        updateScore(score)
        currentStatmentIndex = currentStatmentIndex + 1
        showStatement(currentStatmentIndex)
        } else {
            endGame(false)
        console.log("Game Over")
    }
}


document.getElementById("true-button")
.addEventListener('click', () => {
    checksAnswer(true)
})

document.getElementById("false-button")
.addEventListener('click', () => {
    checksAnswer(false)
})

document.getElementById('retry-button')
.addEventListener('click', startGame)

showStatement(currentStatmentIndex)