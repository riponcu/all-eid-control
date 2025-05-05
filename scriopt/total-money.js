document.getElementById('total-btn-m').addEventListener
('click', function() {

    const commentTextBox =  document.getElementById
    ('comment-text-box');
    // console.log('commentTextBox')

    const newComment = commentTextBox.value;
    // console.log(newComment);

    const commentsContainer = document.getElementById
    ('commnets-container')
    // console.log(commentsContainer);

    const commentElement =document.createElement('p')
    commentElement.classList.add('comment');
    commentElement.innerText = newComment;

    commentsContainer.appendChild(commentElement);
    commentTextBox.value = '';
})