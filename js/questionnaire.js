let questionnaire=[
    {"Question":"Première question",
        "Réponse":[
            {"id":"1","answer":"vrai1"},
            {"id":"2","answer":"faux1"}
        ]
    },
    {"Question":"Deuxième question",
        "Réponse":[
            {"id":"1","answer":"vrai2"},
            {"id":"2","answer":"faux2"}
        ]
    }
]
const questions = [
    {
        question: "Forme de la terre",
        reponses: [
            {
                valeur: "ronde",
                status: true
            },
            {
                valeur: "plate",
                status: false
            }
        ]
    },
    {
        question: "Qui etait Nestor Makhno",
        reponses: [
            {
                valeur: "President urss",
                status: false
            },
            {
                valeur: "Anarchiste ukrainien",
                status: true
            }
        ]
    }
]

const quizz = document.getElementById('quizz')
questions.forEach((el) => {
    quizz.innerHTML += "<div>"
    quizz.innerHTML += `<h2>${el.question}</h2>`
    el.reponses.forEach((rep) => {
        quizz.innerHTML += `<button id=${rep.status}>${rep.valeur}</button>`
    })
    quizz.innerHTML += "</div>"
})


document.querySelectorAll('button').forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (button.id == "true"){
            alert("Bonne reponse")
        }else{
            alert("Mauvaise reponse")
        }
    })
})