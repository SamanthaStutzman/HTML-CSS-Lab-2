"use strict"

//each time the form is submitted, a new item with the given name is added to the list selected by the type radio buttons

const itemAddForm = document.querySelector('#item-list-add');

itemAddForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const itemToAdd = document.querySelector('#item-to-add');
    
    if (itemToAdd.value && isNaN(itemToAdd.value)) {
        // <li></li>
        const itemHTML = document.createElement('li');
        
        // <li class="list-item"></li>
        // itemHTML.classList.add('list-item');
        
        // <li class="list-item"> Text from the input in Here </li>
        itemHTML.innerText = itemToAdd.value;
        
        // //strike through
        itemHTML.addEventListener('click', e => {
            itemHTML.classList.toggle('completed');
        });
        
        // //remove from list
        itemHTML.addEventListener('dblclick', e => {
            itemHTML.remove();
        });
         
        const fruitList = document.querySelector('.item-list-fruit');
        const veggieList = document.querySelector('.item-list-veggie');

        const fruitButton = document.querySelector('.fruit-button');
        const veggieButton = document.querySelector('.veggie-button');
        
        if (fruitButton.checked) {
            fruitList.appendChild(itemHTML);
        } else if (veggieButton.checked) {
            veggieList.appendChild(itemHTML);
        }

    }

});