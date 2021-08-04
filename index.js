let message = document.querySelector('#message');

function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value; 
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    let unorderedL = document.querySelector('ul');
    unorderedL.appendChild(movie);
    inputField.value = '';
}

let form = document.querySelector('form');
form.addEventListener('submit', addMovie);

function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted!`;
    revealMessage();
}

function crossOffMovie(event){
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked') === true){
        message.textContent = `${event.target.textContent} watched!`;
    } else {
        message.textContent = `${event.target.textContent} added back!`;
    }
    revealMessage();
}

function revealMessage(){
    message.classList.remove('hide');
    setTimeout(function(){message.classList.add('hide');}, 1000)
}