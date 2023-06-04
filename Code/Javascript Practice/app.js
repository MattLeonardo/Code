document.getElementsByTagName('h3')[0].onclick = function() {
    this.style.backgroundColor = `orange`;
}

//Alert Box
var alertButton = document.getElementById('alert');
alertButton.onclick = function() {
    alert ('Here is our alert box')
}

// Confirm Box
var confirmButton = document.getElementById('confirm');
confirmButton.onclick = function() {
    var userResponse = confirm('Here is our confirm box');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    if (userResponse) {
        displayMessage += 'You like bananas! Did you know they\'re a berry?';
    } else {
        displayMessage += 'you don\'t like bananas because you\'re wrong';
    }
    displayContainer.innerText = displayMessage;
};

//Prompt Box
var promptButton = document.getElementById('prompt');
promptButton.onclick = function() {
    var userResponse = prompt('What is your name?');
    var displayContainer = document.getElementById('promptResponse');
    displayContainer.innerText = 'Hi, ' + userResponse;
}