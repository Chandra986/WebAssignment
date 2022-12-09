let gallery = document.getElementsByTagName('img')[0];

    let right = document.getElementsByClassName('fa-caret-right')[0];
    let image = 0;
     right.addEventListener('click' , () => {
           if(image <= 9){
            image +=1;
            gallery.src = `https://cdn.freecodecamp.org/curriculum/css-photo-gallery/${image}.jpg`;
           }
     })

     
    let left = document.getElementsByClassName('fa-caret-left')[0];
     left.addEventListener('click' , () => {
           if(image > 1){
            image -=1;
            gallery.src = `https://cdn.freecodecamp.org/curriculum/css-photo-gallery/${image}.jpg`;
           }
     })

     document.addEventListener('mousedown', function(event) {
     if (event.detail > 1) {
     event.preventDefault();
  }
}, false);