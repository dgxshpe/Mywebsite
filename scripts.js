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

const header = document.querySelector('.sticky-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Optional: add a small delay before applying the styles on scroll
setTimeout(() => {
  header.style.transition = 'all 0.3s ease-in-out';
}, 500);