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

generateCards(cardsArray);