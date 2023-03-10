'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelector('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';

//circles.style.backgroundColor = 'red'; Error!
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px';

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('I was here!');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = 'Hello Wolrd!';
// div.innerHTML = '<h1>Hello Wolrd!</h1>';

// div.textContent = '<h1>Hello Wolrd!</h1>'; Error!
// div.textContent = 'Hello!';

// div.innerHTML = '<h1>Hello Wolrd!</h1>';
// div.insertAdjacentHTML('beforebegin', '<h2>Hello!</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Hello!</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Hello!</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Hello!</h2>');

