// Q7
function renderEvents(eventsList) {
    const container = document.querySelector('#eventContainer');
    container.innerHTML = '';
    
    eventsList.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.id = `event-${event.id}`;
        card.innerHTML = `<h3>${event.name}</h3><p>${event.category}</p><button id="reg-btn-${event.id}">Register</button>`;
        container.appendChild(card);
    });
}

function updateUI(eventId, isRegistered) {
    const card = document.querySelector(`#event-${eventId}`);
    if (card) {
        const button = card.querySelector('button');
        button.textContent = isRegistered ? 'Cancel' : 'Register';
    }
}