
// event listener for button press
document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Click!"); /* Testing */

    // Testing - find and log all form elements
    const allFormInputs = document.querySelector('form');
    console.log(allFormInputs);

    // get name input from form & console.log
    const inputName = document.getElementById('name');
    console.log(inputName.value);

    // get comment input from form & console.log
    const inputComment = document.getElementById('comment');
    console.log(inputComment.value);

});



