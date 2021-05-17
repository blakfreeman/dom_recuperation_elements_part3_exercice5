let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}

let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}

let elements = document.querySelectorAll("#liste-competences > h2")
let i = 0;

for(let el in competences){
    let titre = elements[i]
    titre.innerText = `${competences[el]}` 

    let competLength = competences[el].length
    let verif = competences[el].substr(0, competLength - 1)
    // pour avoir juste le personnage !
    if (verif > 50 && verif < 100 && verif !=50){ // prioritÃ© logique !!
        titre.style.backgroundColor = "green"
        titre.style.color = "white"
    } else if (verif == 100){
        titre.style.backgroundColor = "gold"
    }else if (verif < 50){
        titre.style.backgroundColor ="red"
    }
    titre.style.width = `${verif}%`
    i++
}