document.addEventListener('DOMContentLoaded', () => {
document.getElementById('post-form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Submit button clicked');
    const content = document.getElementById("post-content").value;

    fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    })
      .then((response) => response.json())
      .then((posts) => {
        alert('Post added successfully!');
        displayPosts(posts);
      })
      .catch((error) => console.error('Error:', error));
  });

  function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    posts.forEach((post) => {
      const postDiv = document.createElement('div');
      postDiv.textContent = post.content;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deletePost(post.id));

      postDiv.appendChild(deleteButton);

      postList.appendChild(postDiv);
    });
  }
function deletePost(postId) {
    fetch(`http://localhost:3000/api/posts/${postId}`, {
        method: 'DELETE',
    })
    .then((response) => response.json())
    .then((updatedPosts) => {
        displayPosts(updatedPosts); 
    })
    .catch((error) => console.error('Error deleting post:', error));
}
  fetch('http://localhost:3000/api/posts')
  .then((response) => response.json())
  .then((posts) => displayPosts(posts));
});
  
