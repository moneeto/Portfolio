window.addEventListener("scroll", reveal)

function reveal() {
    var reveals = document.querySelectorAll('.reveal')
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 300;

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
    }
}


function mostrarSkills() {
    var skillButton = document.getElementById('buttonSkill');
    var skillLogos = document.getElementById('logos-skills');
    if(skillButton.click){
        skillLogos.style.opacity = 1;
        skillButton.style.animation = 'none';
        skillLogos.style.display = 'flex';
        skillButton.innerHTML = 'Fact: my favourite tool is CSS'
    }
}


// Temporizador de funcion de 5 segundos
function EliminarTexto() {
    var contenedorTexto = document.getElementById("contenedorTexto");
    var frontendText = document.getElementById("frontendText");
    var developerText = document.getElementById("developerText");
    var tppDiv = document.getElementById("tppDiv");
    var bodyId = document.getElementById("bodyId");

        contenedorTexto.removeChild(frontendText);
        contenedorTexto.removeChild(developerText);
        tppDiv.style.display = "flex";
        bodyId.style.overflowY = "scroll";
}
setTimeout(EliminarTexto, 5000);         


// NAVBAR scroll
window.addEventListener("scroll", function(){
    var nav = document.querySelector("ul");
    nav.classList.toggle("scrollDown",window.scrollY > 0);
})

window.addEventListener("click", function(){
    var card = document.getElementsByClassName("proyecto-card")
    
})
































