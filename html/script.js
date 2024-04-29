// This function changes the text color of the header when clicked
function changeHeaderColor() {
    var header = document.querySelector('header');
    header.style.color = 'red';
}

// This function displays an alert when the button is clicked
function showAlert() {
    alert('Button clicked!');
}

// Add event listeners to call the functions when the button and header are clicked
document.querySelector('header').addEventListener('click', changeHeaderColor);
document.querySelector('button').addEventListener('click', showAlert);
