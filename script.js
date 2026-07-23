const musica = document.getElementById("musica");

musica.volume = 0.35;


const boton = document.getElementById("btnComenzar");

const mensaje = document.getElementById("mensaje");

const inicio = document.getElementById("inicio");

const historia = document.getElementById("historia");

const final = document.getElementById("final");

console.log("inicio:", inicio);

console.log("historia:", historia);

boton.addEventListener("click",()=>{

    musica.play().catch(error=>{
        console.log(error);
    });


    inicio.style.display="none";

    historia.style.display="block";


    console.log("Inicio:", inicio);

    console.log("Historia:", historia);

});
const contenedor = document.getElementById("hearts");

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("heart");

    corazon.innerHTML = "❤";

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.animationDuration = (3 + Math.random() * 4) + "s";

    corazon.style.fontSize = (20 + Math.random() * 40) + "px";

    contenedor.appendChild(corazon);

    setTimeout(() => {

        corazon.remove();

    }, 7000);

}

let lluviaCorazones;

boton.addEventListener("click", () => {

    musica.play().catch(() => {});

    boton.style.display="none";

    mensaje.innerHTML="❤️ Bienvenida a esta pequeña sorpresa ❤️";

    lluviaCorazones = setInterval(crearCorazon,500);

});

const btnSiguiente = document.getElementById("btnSiguiente");

const fotoHistoria = document.getElementById("fotoHistoria");

const tituloHistoria = document.getElementById("tituloHistoria");

const textoHistoria = document.getElementById("textoHistoria");

let momento = 1;

btnSiguiente.addEventListener("click",()=> {
    
    momento++;
    
    function cambiarRecuerdo(imagen, titulo, texto){
        
        fotoHistoria.style.opacity = 0;
        tituloHistoria.style.opacity = 0;

        setTimeout(()=>{
            fotoHistoria.src = imagen;
            tituloHistoria.textContent = titulo;
            textoHistoria.textContent = texto;
            
            fotoHistoria.style.opacity = 1;
            tituloHistoria.style.opacity = 1;
            textoHistoria.style.opacity = 1;
        
        },1000);

    }
    if (momento === 2){

        cambiarRecuerdo(
            "img/2foto.jpeg",
            "Otro momento hermoso",
            "Gracias por cada sonrisa y por todos esos buenos momentos que haces especial en mi vida ❤️."
        
        );
    
    }

    if(momento === 3) {

        cambiarRecuerdo(

        "img/brva.JPEG",
        "Un recuerdo guardado ❤️",
        "Espero que este nuevo año venga lleno de felicidad, sueños y momentos increibles."

        );
    }

if(momento === 4){

    historia.style.display="none";

    final.style.display="block";
}
});