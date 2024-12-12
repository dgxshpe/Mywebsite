// scripts.js

// Get the blog posts from the server
function getBlogPosts() {
    fetch('/api/blog-posts')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts-container');
            posts.forEach(post => {
                const postHTML = `
                    <div class="post">
                        <h2>${post.title}</h2>
                        <p>${post.content}</p>
                    </div>
                `;
                postsContainer.innerHTML += postHTML;
            });
        });
}

// Handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/api/contact', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => console.log('Form submitted successfully'));
}

// Add event listeners to the form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleFormSubmission);