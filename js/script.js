function init(){

    const myButton = document.querySelector('#entrybutton');
    const textBox = document.querySelector('#entryinput');
    const myHeading = document.querySelector('#textoutput');

    function myFunction(event) {
        const userMessage = textBox.value;
        alert("Olivia Kulinski: " + userMessage);
        
        myHeading.textContent = userMessage;
    }
    myButton.addEventListener('click', myFunction);

window.addEventListener('load', init);
