// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("post-form");
    const postContent = document.getElementById("post-content");
    const postList = document.getElementById("post-list");
  
    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form from refreshing the page
  
      // Get the post content
      const content = postContent.value.trim();
      if (content === "") {
        alert("Please write something before posting.");
        return;
      }
  
      // Create a new post element
      const post = document.createElement("div");
      post.classList.add("post");
  
      // Add content to the post
      const postText = document.createElement("p");
      postText.textContent = content;
  
      // Append the post to the list
      post.appendChild(postText);
      postList.appendChild(post);
  
      // Clear the form
      postContent.value = "";
    });
  });