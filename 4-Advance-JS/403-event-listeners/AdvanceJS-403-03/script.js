let button = document.getElementsByTagName('button')[0];
let billInput = document.getElementsByTagName('input')[0];
let serviceInput = document.getElementsByTagName('select')[0];
let peopleInput = document.getElementsByTagName('input')[1];

button.addEventListener('click', () => {
  let bill = billInput.value;
  let service = serviceInput.value;
  let people = peopleInput.value;

  if (bill === "" || service == 0 || people === "") {
    alert("please enter some values");
    return;
  }

  var total = (bill * service) / people;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  totalPrice(total);
})

function totalPrice(total) {
  let totalTip = document.getElementsByClassName('total-tip')[0];
  totalTip.innerHTML = `<p> TIP AMOUNT </p>
 <h2> $ ${total}</h2>
 <p> each </p>`
}