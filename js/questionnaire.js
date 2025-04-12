user_answers=""
ind_quest=0

const questions=[
    {
        "question":"Lequel de ces drapeaux n'a jamais représenté les LGBT+ ?",
        "réponses":
        [
            "../img/Original rainbow.png",
            "../img/fake_pride_flag.jpg",
            "../img/pride_no_intersex.jpg",
            "../img/Current pride flag.png"
        ],
        "image":true
    },
    {
        "question":"Lequel de ces drapeaux ne représente pas une communauté queer ?",
        "réponses":
        [
            "../img/Gay_Flag.svg",
            "../img/Aromantic_Flag.svg",
            "../img/Mauritius_Flag.webp",
            "../img/Nonbinary_Flag.svg"
        ],
        "image":true
    },
    {
        "question":"Laquelle de ces appellations n'est pas celle d'une communauté queer ?",
        "réponses":
        [
            "omnisexuel",
            "aromantique",
            "agenré",
            "allosexuels"   
        ],
        "image":false
    },
    {
        "question":"Selon un sondage de l'IFOP en 2023, quelle est la part de LGBT chez la Génération Z ?",
        "réponses":["16 %","9%","5%","1%"],
        "image":false
    }
]

window.onload = initQuiz

let currentQuestionIndex = 0
let triedpath=""
let selectedanswer=null
let selectedbutton=null

function initQuiz() {
    showQuestion()
    document.getElementById("suivant").addEventListener("click", nextQuestion)
}

function showQuestion() {
    const container = document.getElementById("quizz")
    const question = questions[currentQuestionIndex]
    selectedanswer=null
    container.innerHTML = ''
    const title = document.createElement("h2")
    title.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`
    title.className = "text-xl font-bold mb-4 text-center"
    container.appendChild(title)
    container.appendChild(document.createElement("br"))
    const grid=document.createElement("div")
    grid.className="grid grid-cols-2 gap-3 justify-items-center"
    if (question.image) {
        question.réponses.forEach((rep, index) => {
            const btn = document.createElement("button")
            btn.className = "m-2"
            const img = document.createElement("img")
            img.src = rep
            img.alt = `Réponse ${index + 1}`
            img.className = "w-[25vw] h-auto rounded hover:opacity-80"
            btn.appendChild(img)
            btn.onclick = () => validateAnswer(index,btn)
            grid.appendChild(btn)
        })
    } else {
        question.réponses.forEach((rep, index) => {
            const btn = document.createElement("button")
            btn.textContent = rep
            btn.className = "block my-1 px-3 py-1 bg-indigo-700 rounded hover:bg-indigo-500"
            btn.onclick = () => validateAnswer(index,btn)
            grid.appendChild(btn)
        })
    }
    container.appendChild(grid)
    document.getElementById("suivant").classList.add("hidden")
}

function validateAnswer(selectedIndex,btnElement) {
    if (selectedanswer!==null)
    {
        selectedbutton.classList.remove("opacity-50")
    }
    console.log("Réponse sélectionnée:", questions[currentQuestionIndex].réponses[selectedIndex])
    selectedanswer=selectedIndex
    selectedbutton=btnElement
    console.log(btnElement)
    btnElement.classList.add("opacity-50")
    document.getElementById("suivant").classList.remove("hidden")
}

function nextQuestion() {
    triedpath+=`${currentQuestionIndex}${selectedanswer}`
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showEndMessage()
    }
}

function showEndMessage() {
    fetch(triedpath + ".html", { method: "GET" })
        .then(response => {
            if (response.status === 200) 
            {
                window.location.replace(triedpath + ".html")
            } 
            else 
            {
                showFailureMessage()
            }
        })
        .catch(error => 
        {
            console.error(error)
            showFailureMessage()
        })
}

function showFailureMessage(){
    document.getElementById("suivant").classList.add("hidden")
    const container = document.getElementById("quizz")
    container.innerHTML = "You failed... Try to be less straight (forward) next time!"
}
