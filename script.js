// This is JS for Santuary Helpers - Blog page

// event listener for button press
document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();

    const today = currentDate();

    // get name input from form, save in variable
    const inputName = document.getElementById('name');
    const userName = inputName.value;

    // get email input from form, save in variable
    const inputEmail = document.getElementById('email');
    const userEmail = inputEmail.value;

    // get comment input from form, save in variable
    const inputComment = document.getElementById('comment');
    const userComment = inputComment.value;

    

    // if comment section of form is not empty --> display the following in Comments section:
    if (userName !== '' && inputEmail !== '' && userComment !== '') {

        // display submission success notice to user
        alert(`✅ Your comment has been submitted. Thank you for contributing to our community, ${userName}!`);

        // locate the userComments div where the new comment will be displayed
        const newComment = document.querySelector('.userComments');
        // create the new commentFlex div
        const commentToAdd = document.createElement('div');
        // create the div's new html, add user image, and variables
        commentToAdd.innerHTML = `
            <div class = "commentFlex">
                <div class = "commentImg">
                    <i class="fas fa-user fa-4x"></i>
                </div>
                <div class = "commentText">
                    <p class = "dateAllCaps"> ${today} by ${userName}</p>
                    <p>${userComment}</p>
                </div>
            </div>
        `;

        // correct placement to line up text
        commentToAdd.style.paddingLeft = "20px";

        // append new comment to bottom of Comments
        newComment.append(commentToAdd);

        // clear inputs after submission
        inputName.value = '';
        inputEmail.value = '';
        inputComment.value = '';

    } else if (userName == '') {
        alert('What should we call you? 🤔')

    } else if (userEmail == '') {
        alert('Please enter your email! 💌')

    } else if (userComment == '') {
        alert('Whoops! Looks like you forgot to add your comment! Try again 😊')
    };
});



    function currentDate() {
        const date = new Date();

        // convert returned number to day of week
        dayOfWeek = date.getDay();
        const dayNames = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        const weekDay = dayNames[dayOfWeek];

        // convert returned number to month name
        numberOfMonth = date.getMonth();
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const month = monthNames[numberOfMonth];

        // get the date #
        const day = date.getDate();

        // figure out suffix to apply to date #
        numberSuffix = date.getDate();
        if (numberSuffix == 1 || numberSuffix == 21 || numberSuffix == 31) {
            suffix = "st";
        } else if (numberSuffix == 2 || numberSuffix == 22) {
            suffix = "nd";
        } else if (numberSuffix == 3 || numberSuffix == 23) {
            suffix = "rd";
        } else {
            suffix = "th";
        };
    
        // get the full year 
        const year = date.getFullYear();

        // assemble the full date
        const today = `${weekDay} ${month} ${day}${suffix}, ${year}`;

        return today;
    }