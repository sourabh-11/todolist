"use strict";
const input = document.getElementById('input');
const buttonElement = document.getElementById('submitBtn');
const allElements = document.getElementById('all');
// // Function to render saved items from localStorage
function renderFromLocalStorage() {
    const storedItems = JSON.parse(localStorage.getItem('todoItems') || '[]');
    storedItems.forEach((item) => {
        createAndAppendItem(item);
    });
}
// // Function to create and append a new item to the DOM
function createAndAppendItem(value) {
    let div = document.createElement("div");
    div.className = "main";
    let ul = document.createElement("li");
    ul.textContent = value;
    div.appendChild(ul);
    allElements.insertAdjacentElement("beforeend", div);
}
// // Add event listener to the button
buttonElement.addEventListener("click", () => {
    const valuesss = input.value.trim(); // Trim input to remove extra spaces
    if (!valuesss)
        return; // Ignore empty input
    // 
    //   console.log(valuesss);
    //   // Save the value in localStorage
    const storedItems = JSON.parse(localStorage.getItem('todoItems') || '[]');
    storedItems.push(valuesss);
    localStorage.setItem('todoItems', JSON.stringify(storedItems));
    //   // Add the item to the DOM
    createAndAppendItem(valuesss);
    //   // Clear the input field
    input.value = "";
});
// // Render items from localStorage on page load
renderFromLocalStorage();