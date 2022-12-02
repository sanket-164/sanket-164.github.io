
let horn = new Audio();
horn.src = 'Car Horn.mp3';

let rsdega = new Audio();
rsdega.src = '150 Rupya Dega.mp3';

let laugh = new Audio();
laugh.src = 'AKLaughing.mp3';

let lelo = new Audio();
lelo.src = 'Aloo Lelo Kanda Lelo.mp3';

let car = new Audio();
car.src = 'Car Starting.mp3';


start.addEventListener(('click'), () => {
    document.getElementById("start").remove();
    document.getElementsByTagName("body")[0].innerHTML = "<div class=\"sky\"><div class=\"track\"></div></div><div class=\"lari\"><img src=\"Lari.png\" alt=\"Lari\" height=\"80px\" width=\"160px\"><img src=\"NanaPatekar.png\" alt=\"Nana Patekar\" height=\"80px\" width=\"40px\"></div><div class=\"car\"><div class=\"wheel wheel1\"><img src=\"CarWheel.png\" alt=\"left wheel\"></div><p><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMade By Sanket</b></p><div class=\"wheel wheel2\"><img src=\"CarWheel.png\" alt=\"left wheel\"></div></div><div class=\"horn\"><button id=\"Horn\" onClick=\"playHorn()\">Horn</button></div><script src=\"MovingCar.js\"></script>";
    load();
})

function playHorn() {
    horn.play();
}

function load() {
    lelo.play();

    setTimeout(() => {
        car.play();
        setTimeout(() => {
            car.play();
        }, 4000)
    }, 10000)

    setTimeout(() => {
        rsdega.play();
    }, 5000)

    setTimeout(() => {
        laugh.play();
    }, 6000)
}

let repeatVoice = () => {

    setTimeout(() => {
        rsdega.play();
    }, 7000)

    setTimeout(() => {
        laugh.play();
    }, 8000)

    setTimeout(() => {
        car.play();
        setTimeout(() => {
            car.play();
        }, 4000)
    }, 11000)
}

setInterval(() => {
    lelo.play();
    repeatVoice();
}, 20000)