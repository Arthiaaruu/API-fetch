
async function filterPosts() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase();
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        // posts.forEach((element) =>{
        //     console.log(element.title)
        // })
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(filterValue));

        displayPosts(filteredPosts);
    } catch (error) {
        console.error('Error fetching and filtering posts:', error);
    }
}

function displayPosts(posts) {
    const filteredPostsContainer = document.getElementById('filteredPosts');
    filteredPostsContainer.innerHTML = '';

    if (posts.length === 0) {
        filteredPostsContainer.textContent = 'No posts found with that title.';
    } else {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
            filteredPostsContainer.appendChild(postElement);
        });
    }
}


