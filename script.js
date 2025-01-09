document.addEventListener('DOMContentLoaded', () => {
document.getElementById('post-form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Submit button clicked');
    const content = document.getElementById("post-content").value;
    });

  function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    posts.forEach((post) => {
      const postDiv = document.createElement('div');
      postDiv.textContent = post.content;
      postList.appendChild(postDiv);
    });
  }
});
  
  // Fetch posts when the page loads
  fetch('http://localhost:3000/api/posts')
    .then((response) => response.json())
    .then((posts) => displayPosts(posts));