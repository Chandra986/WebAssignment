let button = document.getElementById('button');
let input = document.getElementById('input')

input.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        let inputName = input.value;
        getUsers(inputName)
    }
})


button.addEventListener('click', (e) => {
    e.preventDefault()
    let inputName = input.value;
    getUsers(inputName)
})


function getUsers(inputName) {
    fetch('https://api.github.com/search/users?q=' + inputName)
        .then(res => res.json())
        .then((data) => {
            return data;
        })
        .then((item) => {
            addHtml(item)
        })
}

function addHtml(item) {
    for (let i = 0; i < item.items.length; i++) {
        let parent = document.getElementById('parent');
        let items = item.items[i];
        let box = document.createElement('div');
        box.setAttribute('class', 'box')
        box.innerHTML = `
    <div class="image">
    <img src="${items.avatar_url}">
    </div>
    <div class="name_profile">
    <p> ${items.login} </p>
    <a href="${items.html_url}" target="_blank"> Visit profile </a>
    </div>`
        parent.appendChild(box);
        button.addEventListener('mousedown', () => {
            let del = document.getElementsByClassName('box')[0];
            del.remove();
        })
        input.addEventListener('keydown', (e) => {
            if (e.keyCode == 13) {
                let del = document.getElementsByClassName('box')[0];
                del.remove();
            }

        })
    }
}


//clear button
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    let parent = document.getElementById('parent');
    let input = document.getElementById('input');
    parent.innerHTML = "";
    input.value = "";
})