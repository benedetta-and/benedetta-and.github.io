document.getElementById('post-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const content = document.getElementById("post-content").value;
    const password = document.getElementById('post-password').value;

    if (password === 'GeorgeHarrison3377') {
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
      } else {
        alert('Incorrect password. Only authorized users can post.');
      }
    })

  function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    posts.forEach((post) => {
      const postDiv = document.createElement('div');
      postDiv.textContent = post.content;
      postList.appendChild(postDiv);
    });
  }
  
  // Fetch posts when the page loads
  fetch('http://localhost:3000/api/posts')
    .then((response) => response.json())
    .then((posts) => displayPosts(posts));