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

user_answers=""
ind_quest=0

const questions=[
    {
        "question":"Lequel de ces drapeaux n'a jamais représenté les LGBT+ ?",
        "réponses":
        [

        ],
        "images":true
    },
    {
        "question":"Lequel de ces drapeaux ne représente pas une communauté queer ?",
        "réponses":
        [

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
        "question":"",
        "réponses":[],
        "image":true
    }
]

function validate()
{

}