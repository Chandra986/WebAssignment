let button = document.getElementsByTagName('button')[0];
        let main = document.getElementsByTagName('main')[0];

        button.addEventListener('click', () => {
            let image = document.createElement('div');
            image.setAttribute('class', 'image');
            main.appendChild(image);
            image.innerHTML = ` <h1 style="font-size: 40px"> Image Element Added. </h1>
            <img src="https://geekster.in/images/logo.svg">`
        })
