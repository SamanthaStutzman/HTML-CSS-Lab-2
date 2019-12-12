"use strict";

function main () {
    
    let select = id => (document.querySelector(id));
    let selectAll = id => (document.querySelectorAll(id));
    
    // Add the "big" class to the "grow-me" paragraph
    let growMe = select("#grow-me");
    growMe.classList.add("big");
    
    // Remove the "big" class to the "shrink-me" paragraph
    let shrinkMe = select("#shrink-me");
    shrinkMe.classList.remove("big");
    
    // Find all the <li>s and log their text content to the console
    let list = selectAll("li");
    for (let item of list) {
        console.log (item.innerHTML); 
    }
    
    // Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
    let link = select(".link");
    link.setAttribute("href", "https://www.example.com");
    link.innerHTML = "somewhere";
    
    // Set the "display" CSS property of the "hide-me" paragraph to "none"
    let hideMe = select("#hide-me");
    hideMe.style.display = "none";
    
    // Set the "display" CSS property of the "show-me" paragraph to "block".
    let showMe = select("#show-me");
    showMe.style.display = "block";
    
    // Get the text that the user enters into the "name" input box
    //use it to set a welcome message in the <h1>
    let name = select("#name").value;
    let h1 = select("h1");
    h1.innerHTML = (`Welcome ${name}`); 

}