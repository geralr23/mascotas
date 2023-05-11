function activarmascota(mascota){

    var btn = document.getElementsByClassName("btn");
    for (var i = 0 ; i < btn.length ; i++){
        btn[i].classList.remove("selected");
    }

    var btnselecciona = document.querySelector("button[identificador='" + mascota +"']");
    btnselecciona.classList.add("selected")


    var card = document.getElementsByClassName("card");
    for (var i = 0 ; i < card.length ; i++){
        card[i].classList.remove("visible");
    }

    for (var i = 0 ; i < card.length ; i++){

        if (card[i].classList.contains(mascota)){
            card[i].classList.add("visible");
        }
        
    }


}


// Buscador 

document.addEventListener('keyup' , teclas => {

// console.log(teclas.target.value)

    if(teclas.target.matches('#buscador')){

        document.querySelectorAll('.card').forEach(card => {

            card.querySelector('h2').textContent.toLowerCase().includes(teclas.target.value.toLowerCase())

            ? card.classList.remove('desaparecer')

            : card.classList.add('desaparecer')

        });

    }

}) 