const cardsArray = [
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' }
];

function generateCards(cards) {
    const cardContainer = document.getElementById('card-container');

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const titleElement = document.createElement('h2');
        titleElement.textContent = card.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = card.description;

        cardElement.appendChild(titleElement);
        cardElement.appendChild(descriptionElement);

        cardContainer.appendChild(cardElement);
    });
}

const cardsArray2 = [
    { title: 'Card 1', description: 'This is card 1', image: 'card1.jpg', price: 10 },
    { title: 'Card 2', description: 'This is card 2', image: 'card2.jpg', price: 15 },
    { title: 'Card 3', description: 'This is card 3', image: 'card3.jpg', price: 20 }
];

function generateCards(cards) {
    const cardContainer = document.getElementById('card-container');

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const titleElement = document.createElement('h2');
        titleElement.textContent = card.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = card.description;

        const imageElement = document.createElement('img');
        imageElement.src = card.image;

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${card.price}`;

        cardElement.appendChild(titleElement);
        cardElement.appendChild(descriptionElement);
        cardElement.appendChild(imageElement);
        cardElement.appendChild(priceElement);

        cardContainer.appendChild(cardElement);
    });
}

generateCards(cardsArray2);