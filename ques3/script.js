const container = document.querySelector('.posts-container');

// LOADER
container.innerHTML = '<div class="loader"></div>';

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
    // SETTING THE LOADER STATE TO FALSE
    container.innerHTML = '';

    data.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      postElement.innerHTML = `
       <h2>${post.title}</h2>
       <p>${post.body}</p>
     `;

      container.appendChild(postElement);
    });
  })
  .catch((error) => {
    console.log(error);
    container.innerHTML = 'Error occurred while fetching data';
  });
