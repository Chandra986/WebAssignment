let input = document.getElementsByClassName("input");


let fNameElement = input[0];
let LNameElement = input[1];
let countryElement = input[2];
let pScoreElement = input[3];

let addButton = input[4];

addButton.addEventListener("click", () =>{

let fName = fNameElement.value.trim();
let LName = LNameElement.value.trim();
let country = countryElement.value.trim();
let pScore = pScoreElement.value.trim();


addPlayer(fName, LName, country, pScore);

fNameElement.value = "";
LNameElement.value = "";
countryElement.value = "";
pScoreElement.value = "";
})

function isAllFieldValid(fName, LName, country, pScore) {
    let alert = document.getElementsByClassName('alert')[0];
      if(fName === "" || LName === "" || country === "" || pScore === "") {
          alert.style.display = "block";
          return false;
      }else{
        alert.style.display = "none";
        return true;
      }
}


function addPlayer(fName, LName, country, pScore) {

let valid = isAllFieldValid(fName, LName, country, pScore);

if(valid === false) {
    return;
}

let playerData = document.createElement("div");
playerData.setAttribute("class", "player-data")

let container = document.getElementsByClassName("container")[0];
container.appendChild(playerData);

let details = document.createElement("div");
details.setAttribute("class", "details");

let pTagName = document.createElement("p");
pTagName.innerText = fName +" " + LName ;


let name = document.createElement('div');
name.setAttribute("class", "name");
name.appendChild(pTagName);

let nameDate = document.createElement('div');
nameDate.setAttribute("class", "name-date");
nameDate.appendChild(name);
details.appendChild(nameDate);

let pTagDate = document.createElement("p");
const tdate = new Date();
let stdate= tdate[Symbol.toPrimitive]('string').slice(4, 21)
pTagDate.innerText = stdate;
pTagDate.setAttribute("class", "date-class")

let date = document.createElement("div");
date.setAttribute("class", "date")
date.appendChild(pTagDate);
nameDate.appendChild(date);

let pTag1 = document.createElement("p");
pTag1.innerText = country;
details.appendChild(pTag1)

let pTag2 = document.createElement("p");
pTag2.setAttribute('id', 'p-tag')
pTag2.innerText = pScore;
details.appendChild(pTag2)

let button = document.createElement("div");
button.setAttribute("class", "button")

let circle1 = document.createElement("div");
circle1.setAttribute("class", "circle");
button.appendChild(circle1);
circle1.innerHTML = ` <i class="fa-solid fa-trash-can"></i>`

let circle2 = document.createElement("div");
circle2.setAttribute("class", "circle");
button.appendChild(circle2);
circle2.innerHTML = ` <p> +5 </p> `

let circle3 = document.createElement("div");
circle3.setAttribute("class", "circle");
button.appendChild(circle3);
circle3.innerHTML = ` <p> -5 </p> `

playerData.appendChild(details);
playerData.appendChild(button)



    let del = circle1;
    del.addEventListener("click", () => {
         container.removeChild(playerData);
    });

    let increment = circle2;
    increment.addEventListener("click", () => {
       let num =  Number(pTag2.innerText);
       num += 5; 
       pTag2.innerText = num;
    })

    let decrement = circle3;
    decrement.addEventListener("click", () => {
        let num =  Number(pTag2.innerText);
        num -= 5; 
        pTag2.innerText = num;
     })
}