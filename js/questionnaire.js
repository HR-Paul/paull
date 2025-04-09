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