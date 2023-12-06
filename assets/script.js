fetch('https://striveschool-api.herokuapp.com/books')
.then(response => response.json())
.then(data => {
    data.forEach(book => {
        createBookCard(book);
    });
})
.catch(error => console.error('Errore durante la richiesta:', error));


function createBookCard(book) {

    let card = document.createElement('div');
    card.classList.add('col');

    card.innerHTML = `
        <div class="card">
            <img src="${book.img}" class="card-img-top" alt="${book.title}">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Prezzo: ${book.price}</p>
                <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
            </div>
        </div>
    `;

    
    document.querySelector('.row').appendChild(card);
}

function removeCard(button) {
    
    let card = button.closest('.card');
    card.remove();
}
