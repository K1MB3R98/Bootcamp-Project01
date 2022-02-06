
// event listener for button press
document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();

    // get name input from form, save in variable
    const inputName = document.getElementById('name');
    const userName = inputName.value;

    // get email input from form, save in variable (for reset purposes)
    const inputEmail = document.getElementById('email');

    // get comment input from form, save in variable
    const inputComment = document.getElementById('comment');
    const userComment = inputComment.value;


    // if form is not empty --> display the following in Comments section:
    if (userComment !== '') {
        
        // create new commentFlex div inside .comments .wrapper .userComments
        const newCommentFlex = document.createElement("div");
        // add the div to the end of .userComments div
        document.querySelector(".comments .wrapper .userComments").appendChild(newCommentFlex);
        // assign a class to this new div
        newCommentFlex.classList.add('commentFlex');
        // assign a second class for targeting insertion of next divs
        newCommentFlex.classList.add('newComment');
        // testing
        newCommentFlex.style.border = "2px solid red";

        // create newCommentImg div inside .comment .wrapper .userComments .commentFlex/.newComment(class)
        const newCommentImg = document.createElement("div");
        // add newCommentImg
        document.querySelector(".comments .wrapper .userComments .newComment").appendChild(newCommentImg);
        // assign a class to this div
        newCommentImg.classList.add('commentImg');
        // display new comment user img stand-in icon
        newCommentImg.innerHTML = '<i class="fas fa-user fa-4x"></i>';
        // add padding to line up icon with other user images
        newCommentImg.style.border = "2px solid green";
        newCommentImg.style.padding = "0 10px";


        // create newCommentText div inside .comment .wrapper. userComments .newComment
        const newCommentText = document.createElement("div");
        // add newCommentText
        document.querySelector(".comments .wrapper .userComments .newComment").appendChild(newCommentText);
        // assign a class to this div
        newCommentText.classList.add('commentText');
        // testing
        newCommentText.style.border = "2px solid blue";


        // create <p> with class "dateAllCaps" inside newCommentText div to display today's date and user name
        const newDateName = document.createElement("p");
        // add <p>
        document.querySelector(".comments .wrapper .userComments .newComment .commentText").appendChild(newDateName);
        // assign a class to this <p>
        newDateName.classList.add('dateAllCaps');
        // display date and new comment user name
        newDateName.textContent = ` by ${userName}`;


        // create <p> inside newCommentText div and display the user's comment
        const newCommentTextp = document.createElement("p");
        // add <p>
        document.querySelector(".comments .wrapper .userComments .newComment .commentText").appendChild(newCommentTextp);
        // display new comment text
        newCommentTextp.textContent = userComment;


        // clear inputs after submission
        inputName.value = '';
        inputEmail.value = '';
        inputComment.value = '';
    }
});