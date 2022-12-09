let button = document.getElementsByTagName('button')[0];
let inputName = document.getElementsByTagName('input')[0];
let unorderList = document.getElementsByTagName('ul')[0];

button.addEventListener('click', () => {
    let listName = inputName.value;
    inputName.value = "";
    let list = document.createElement('li');
    let span = document.createElement('span');
    let listButton = document.createElement('button');

    list.appendChild(span);
    span.innerText = listName;
    list.appendChild(listButton);
    unorderList.appendChild(list);
    listButton.innerText = 'Delete';

    listButton.addEventListener('click', () => {
        list.remove();
    })
})