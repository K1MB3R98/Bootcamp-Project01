
// event listener for button press
document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Button Clicked"); /* Testing */

    // Testing - find and log all form elements
    // const allFormInputs = document.querySelector('form');
    // console.log(allFormInputs);

    // get name input from form, save in variable & console.log
    const inputName = document.getElementById('name');
    const userName = inputName.value;
    // console.log(userName);

    // get comment input from form, save in variable & console.log
    const inputComment = document.getElementById('comment');
    const userComment = inputComment.value;
    // console.log(userComment);

    // test putting data on page
    // const changeTest = document.querySelector('.newCommentText');
    // changeTest.textContent = `${userName} ${userComment}`;
    // console.log(changeTest);


    // if form is not empty --> display the following in Comments section:
    if (userComment !== '') {
        
        // create new commentFlex div inside  .comments .wrapper
        // create a div
        const newCommentFlexDiv = document.createElement("div");
        // add the div to the end of .userComments div
        document.querySelector(".comments .wrapper .userComments").appendChild(newCommentFlexDiv);
        // assign a class to this new div
        newCommentFlexDiv.classList.add('commentFlex');
        // assign a second class for targeting insertion of next divs
        newCommentFlexDiv.classList.add('newComment');
        

        // create newCommentImg div inside .comment .wrapper .userComments .commentFlex/ .newComment
        const newCommentImgDiv = document.createElement("div");
        // add newCommentImgDiv
        document.querySelector(".comments .wrapper .userComments .newComment").appendChild(newCommentImgDiv);
        // assign a class to this div
        newCommentImgDiv.classList.add('commentImg');
        // display new comment user img stand-in
        newCommentImgDiv.innerHTML = '<i class="fas fa-user fa-4x"></i>';


        // create newCommentText div inside .comment .wrapper. userComments .newComment
        const newCommentTextDiv = document.createElement("div");
        // add newCommentTextDiv
        document.querySelector(".comments .wrapper .userComments .newComment").appendChild(newCommentTextDiv);
        // assign a class to this div
        newCommentTextDiv.classList.add('commentText');
        // display new comment user name
        newCommentTextDiv.textContent = userName;



        // display new comment text
        // newCommentFlexDiv.textContent = userComment;



        // clear input after submission
        // inputElement.value = '';
    }
});