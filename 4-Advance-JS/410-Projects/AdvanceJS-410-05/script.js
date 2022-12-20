let button = document.getElementById('button');

button.addEventListener('click', () => {

    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        let content = document.getElementById('content')
        let author = document.getElementById('author')
        content.innerHTML = `<h1><span>&#8220;</span>${data.content}<span>&#8221;</span></h1>`
        author.innerText = `${data.author}`
    })
})