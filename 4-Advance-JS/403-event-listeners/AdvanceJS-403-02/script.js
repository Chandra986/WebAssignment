let button = document.getElementsByTagName('button');

    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener('click', () => {
        sound(button[i].innerText)
        animation(button[i].innerText);
      });

    }

    document.addEventListener('keypress', (event) => {
      sound(event.key)
      animation(event.key)
    });


    function sound(key) {
      switch (key) {
        case 'w':
          var w = document.getElementById('w');
          w.play();
          break;
        case 'a':
          var a = document.getElementById('a');
          a.play();
        case 's':
          var s = document.getElementById('s');
          s.play();
          break;
        case 'd':
          var d = document.getElementById('d');
          d.play();
          break;
        case 'j':
          var j = document.getElementById('j');
          j.play();
          break;
        case 'k':
          var k = document.getElementById('k');
          k.play();
          break;
        case 'l':
          var l = document.getElementById('l');
          l.play();
          break;
      }
    }

    function animation(key) {
      var currentkey = document.querySelector("." + key)
      currentkey.classList.add("animation");
      setTimeout(function () {
        currentkey.classList.remove("animation");
      }, 100);
    }