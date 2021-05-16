// Changes all the HTML Elements on the page.
// Changes all the HTML attributes on the page
// Changes all the CSS styles on the page.
// Removes existing HTML elements and attributes
// Add new HTML elements and attributes.
// JS can react to all existing HTML events in the page.
// JS can create new HTML events in the page.

var button = document.getElementById('enter')
var input = document.getElementById('userInput')
var ul = document.querySelector('ul')

function inputLength() {
  return input.value.length
}
function createListElement() {
  var li = document.createElement('li')
  li.appendChild(document.createTextNode(input.value))
  ul.appendChild(li)
  input.value = ''
}

function addEventListnerOnButton() {
  if (inputLength() > 0) {
    createListElement()
  }
}
function addEventListnerAfterKeyPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement()
  }
}
button.addEventListener('click', addEventListnerOnButton)

input.addEventListener('keypress', addEventListnerAfterKeyPress)
