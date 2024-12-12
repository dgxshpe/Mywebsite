// Load more posts when the button is clicked
function loadMorePosts() {
    // Get the current number of posts displayed
    const currentPage = parseInt(getParameterByName('page')) || 1;
    const postId = getParameterByName('id');

    // Update the page parameter in the URL
    updateUrlParameter('page', currentPage + 1);

    // Fetch and display the next set of posts
    fetch('/api/posts')
        .then(response => response.json())
        .then(posts => {
            // Render each post
            posts.forEach(post => {
                const postTemplate = document.getElementById('post-template').cloneNode(true);
                updatePostContainer(post, postTemplate);
                document.getElementById('post-container').appendChild(postTemplate);
            });
        })
        .catch(error => console.error(error));
}

// Update the URL parameter value
function updateUrlParameter(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    window.history.pushState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
}

// Get the value of a URL parameter by name
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}