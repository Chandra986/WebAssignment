let button = document.getElementById('button');
let input = document.getElementById('input');

input.addEventListener('keypress', (e) => {
    if(e.keyCode == 13){
        getDefinition()
    }
})

button.addEventListener('click', (e) => {
    e.preventDefault()
    getDefinition()
})

function getDefinition() {
    let inputName = input.value
    if(inputName){
        fetch('https://www.dictionaryapi.com/api/v3/references/learners/json/' + inputName + '?key=75466890-2d5c-4a38-8dc2-b058d2c8de44')
        .then(res => res.json())
        .then((data) => {
            console.log(data[0])
            if(data[0].hwi){
                let parent = document.getElementById('result_container');
                parent.innerHTML = `<p> ${data[0].shortdef[0]} </p>
                            <audio controls autoplay>
                            <source src="https://media.merriam-webster.com/audio/prons/en/us/mp3/${data[0].meta.id.charAt(0)}/${data[0].hwi.prs[0].sound.audio}.mp3">
                            </audio>`
            }  else{
                input.value = data[0]
                getDefinition()
            }
        })
    }
}