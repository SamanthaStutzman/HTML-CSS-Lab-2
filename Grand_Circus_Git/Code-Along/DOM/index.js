document.write('<p>Javascript is pretty cool</p>');

console.log(document.body.childNodes);

const paragraph = document.querySelector('p');
console.log(paragraph.innerHTML);

const nameOfUser = prompt('What is your name?');

const name = document.querySelector('.name');
name.innerHTML = nameOfUser;

const backgroundColor = prompt('Please enter a background color');

const background = document.querySelector('#background');
background.style.backgroundColor = backgroundColor;

const backgroundText = document.createElement('p');
backgroundText.textContent = `You selected ${backgroundColor}`;
background.append(backgroundText);

background.classList.add('background');

background.classList.add('background-row');
background.classList.remove('background');
