import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
    let who = ['Mi perro', 'El bus', 'Mi abuelo', 'Un señor'];
    let action = [' se comió ', ' rompió ', ' me robo ', ' hizo desaparecer '];
    let what = ['la tarea', 'los útiles', 'el celular', 'la plata'];
    let when = [' en el parque.', ' en la calle.', ' en el paradero.', ' en la entrada de mi casa.'];
    let excuses = who[Math.floor(Math.random() * who.length)] + action[Math.floor(Math.random() * action.length)] + what[Math.floor(Math.random() * what.length)] + when[Math.floor(Math.random() * when.length)]; ;

    document.getElementById("excuse").innerText = excuses;
};
