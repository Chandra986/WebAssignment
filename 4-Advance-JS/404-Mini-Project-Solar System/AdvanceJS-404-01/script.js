let button = document.getElementsByTagName('button')[0];
let planet = document.getElementsByClassName('planet')[0];

let body = document.getElementsByTagName('body')[0];
let numberInput = document.getElementsByTagName('input')[0];
let planetInput = document.getElementsByTagName('select')[0];
let options = document.getElementsByTagName('option');

let planets = {
    "MERCURY": "ProjectImage/mercury.png",
    "VENUS": "ProjectImage/venus.png",
    "EARTH": "ProjectImage/earth.png",
    "MOON": "ProjectImage/moon.png",
    "MARS": "ProjectImage/mars.png",
    "JUPITER": "ProjectImage/jupiter.png",
    "SATURN": "ProjectImage/saturn.png",
    "URANUS": "ProjectImage/uranus.png",
    "NEPTUNE": "ProjectImage/neptune.png",
    "PLUTO": "ProjectImage/pluto.png"
}
let name;
let image;
function myFunction() {
    var x = document.getElementById("mySelect");
    var i = x.selectedIndex;
    name = x.options[i].text;
    image = planets[name];
}

    button.addEventListener('click', () => {
        planet.remove();
        let number = numberInput.value;
        let planetName = planetInput.value;
        if (number === "") {
    let smallBox = document.createElement('div');
    smallBox.setAttribute('class', 'smallBox')
    smallBox.innerHTML = `<div class="miniBox">
            <p> Mass is required </p> 
            </div>`
    body.appendChild(smallBox);
    button.addEventListener('mousedown', () => {
        let del = document.getElementsByClassName('smallBox')[0];
        del.remove();
    })
}  else if(planetName == ""){
    let smallBox = document.createElement('div');
    smallBox.setAttribute('id', 'smallBox')
    smallBox.innerHTML = `<div class="miniBox">
            <p> You did not choose a planet yet </p> 
            </div>`
    body.appendChild(smallBox);
    button.addEventListener('mousedown', () => {
        let delt = document.getElementById('smallBox');
        delt.remove();
    })
 }
else{
        let total = number * planetName;
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);
        let box = document.createElement('div');
        box.setAttribute('class', 'box');
        body.appendChild(box);
        box.innerHTML = `<div class="image">
    <img src="${image}">
</div>
<div class="weight">
    <h2> The weight of the object on <span> ${name} </span></h2>
    <div class="circle">
        <p> ${total} N </p>
    </div>
</div>`
        button.addEventListener('mouseup', () => {
            let del = document.getElementsByClassName('box')[0];
            del.remove();
        }) 
    }
})