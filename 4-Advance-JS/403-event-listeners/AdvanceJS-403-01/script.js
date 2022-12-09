let button = document.getElementsByClassName('text')[0];
        let container = document.getElementsByClassName('container')[0];
        document.addEventListener('keyup', (event) => {
            button.remove();

            let text = document.createElement('div');
            text.setAttribute('class', 'text');
            container.appendChild(text);
            text.innerHTML = `<p>You pressed <span>${event.key}</span> </p>`

            let box = document.createElement('div');
            box.setAttribute('class', 'box');
            container.appendChild(box);
            box.innerHTML = `${event.keyCode}`
            document.addEventListener('keydown', () => {
                text.remove();
                box.remove();
            })
        })