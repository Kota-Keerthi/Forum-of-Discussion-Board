
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const postContent = document.querySelector('textarea[name="post-content"]').value;
    if (postContent.trim() !== '') {
        const postElement = document.createElement('article');
        postElement.textContent = postContent;
        document.querySelector('.discussion-threads').appendChild(postElement);
        document.querySelector('textarea[name="post-content"]').value = '';
    } else {
        alert('Please enter some content for your post.');
    }
});