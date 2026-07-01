let allEvents = [];
let filteredEvents = [];
const PREFERENCE_KEY = 'preferredCategory';

window.addEventListener('DOMContentLoaded', () => {
    loadEvents();
    setupEventListeners();
    restorePreferences();
    setupVideoListeners();
    setupFormWarning();
});

function loadEvents() {
    const loadingMsg = document.getElementById('loadingMessage');
    loadingMsg.style.display = 'block';
    
    fetch('events.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            allEvents = data;
            displayEvents(allEvents);
            populateEventSelects(allEvents);
            console.log('Events loaded successfully:', allEvents);
            loadingMsg.style.display = 'none';
        })
        .catch(error => {
            console.error('Error loading events:', error);
            loadingMsg.innerHTML = '<strong>Failed to load events. Please refresh the page.</strong>';
        });
}

function displayEvents(events) {
    const container = document.getElementById('eventsContainer');
    container.innerHTML = '';
    
    if (events.length === 0) {
        container.innerHTML = '<p class="col-12 text-center text-muted">No events found in this category.</p>';
        return;
    }
    
    events.forEach((event, index) => {
        const eventCard = createEventCard(event, index);
        container.appendChild(eventCard);
    });
}

function createEventCard(event, index) {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';
    
    const card = document.createElement('div');
    card.className = 'card event-card';
    
    const img = document.createElement('img');
    img.src = `images/event${index + 1}.svg`;
    img.alt = event.name;
    img.className = 'card-img-top';
    
    const badge = document.createElement('span');
    badge.className = 'position-absolute top-0 start-0 m-2 event-category';
    badge.textContent = event.category;
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const title = document.createElement('h5');
    title.className = 'card-title fw-bold';
    title.textContent = event.name;
    
    const date = document.createElement('p');
    date.className = 'event-date';
    date.innerHTML = `<strong>Date:</strong> ${event.date}`;
    
    const location = document.createElement('p');
    location.className = 'event-location';
    location.innerHTML = `<strong>Location:</strong> ${event.location}`;
    
    const description = document.createElement('p');
    description.className = 'event-description';
    description.textContent = event.description;
    
    const viewBtn = document.createElement('button');
    viewBtn.className = 'btn btn-primary w-100';
    viewBtn.textContent = 'View Details';
    viewBtn.addEventListener('click', () => showEventModal(event));
    
    card.appendChild(img);
    card.appendChild(badge);
    cardBody.appendChild(title);
    cardBody.appendChild(date);
    cardBody.appendChild(location);
    cardBody.appendChild(description);
    cardBody.appendChild(viewBtn);
    card.appendChild(cardBody);
    
    col.appendChild(card);
    return col;
}

function showEventModal(event) {
    const modalLabel = document.getElementById('eventModalLabel');
    const modalBody = document.getElementById('eventModalBody');
    
    modalLabel.textContent = event.name;
    modalBody.innerHTML = `
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Category:</strong> ${event.category}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Description:</strong> ${event.description}</p>
        <p class="text-muted"><small>Click "Register" from the main form to sign up for this event.</small></p>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('eventModal'));
    modal.show();
}

function populateEventSelects(events) {
    const eventSelect = document.getElementById('eventSelect');
    
    events.forEach(event => {
        const option = document.createElement('option');
        option.value = event.name;
        option.textContent = `${event.name} - ${event.date}`;
        eventSelect.appendChild(option);
    });
}

function setupEventListeners() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            filterEventsByCategory(category);
        });
    });
    
    document.getElementById('registrationForm').addEventListener('submit', registerUser);
    document.getElementById('feedbackForm').addEventListener('submit', handleFeedbackSubmit);
    document.getElementById('phone').addEventListener('blur', validatePhone);
    document.getElementById('feedbackText').addEventListener('keydown', updateCharCounter);
    document.getElementById('locationBtn').addEventListener('click', getLocation);
    document.getElementById('clearPrefs').addEventListener('click', clearPreferences);
    
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(img => {
        img.addEventListener('dblclick', enlargeImage);
    });
}

function filterEventsByCategory(category) {
    savePreference(category);
    
    if (category === 'all') {
        filteredEvents = allEvents;
    } else {
        filteredEvents = allEvents.filter(event => event.category === category);
    }
    
    displayEvents(filteredEvents);
    console.log(`Filtered events by category: ${category}. Found ${filteredEvents.length} events.`);
}

function registerUser(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventSelect = document.getElementById('eventSelect').value;
    const attendees = document.getElementById('attendees').value;
    
    if (!fullName || !email || !phone || !eventSelect || !attendees) {
        alert('Please fill in all required fields.');
        return;
    }
    
    const registrationData = {
        name: fullName,
        email: email,
        phone: phone,
        event: eventSelect,
        attendees: parseInt(attendees),
        registeredAt: new Date().toLocaleString()
    };
    
    sessionStorage.setItem('lastRegistration', JSON.stringify(registrationData));
    
    console.log('Registration successful:', registrationData);
    alert(`Thank you for registering, ${fullName}! We look forward to seeing you at ${eventSelect}.`);
    
    document.getElementById('registrationForm').reset();
}

function validatePhone(e) {
    const phone = e.target.value;
    const phoneRegex = /^[\d\s\-\(\)]{10,}$/;
    
    if (phone && !phoneRegex.test(phone)) {
        e.target.style.borderColor = '#dc3545';
        console.log('Phone validation failed for:', phone);
    } else {
        e.target.style.borderColor = '#28a745';
        console.log('Phone validation passed for:', phone);
    }
}

function updateCharCounter(e) {
    const textarea = e.target;
    const counter = document.getElementById('charCount');
    const currentLength = textarea.value.length;
    const maxLength = textarea.getAttribute('maxlength');
    
    counter.textContent = `(${currentLength}/${maxLength})`;
}

function handleFeedbackSubmit(e) {
    e.preventDefault();
    
    const feedbackName = document.getElementById('feedbackName').value;
    const feedbackEmail = document.getElementById('feedbackEmail').value;
    const feedbackEvent = document.getElementById('feedbackEvent').value;
    const rating = document.getElementById('rating').value;
    const feedbackText = document.getElementById('feedbackText').value;
    
    if (!feedbackName || !feedbackEmail || !feedbackEvent || !rating || !feedbackText) {
        alert('Please fill in all feedback fields.');
        return;
    }
    
    const feedback = {
        name: feedbackName,
        email: feedbackEmail,
        event: feedbackEvent,
        rating: parseInt(rating),
        message: feedbackText,
        submittedAt: new Date().toLocaleString()
    };
    
    localStorage.setItem('lastFeedback', JSON.stringify(feedback));
    
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback! We appreciate your time and thoughts.');
    
    document.getElementById('feedbackForm').reset();
    document.getElementById('charCount').textContent = '(0/500)';
}

function enlargeImage(e) {
    const img = e.target;
    
    if (img.classList.contains('enlarged')) {
        img.classList.remove('enlarged');
    } else {
        document.querySelectorAll('.gallery-image.enlarged').forEach(el => {
            el.classList.remove('enlarged');
        });
        img.classList.add('enlarged');
    }
}

function setupVideoListeners() {
    const video = document.getElementById('promoVideo');
    const videoStatus = document.getElementById('videoStatus');
    
    video.oncanplay = () => {
        videoStatus.textContent = 'Video ready to play';
        console.log('Video is ready to play');
    };
}

function getLocation() {
    const locationInfo = document.getElementById('locationInfo');
    const locationError = document.getElementById('locationError');
    const locationBtn = document.getElementById('locationBtn');
    
    locationInfo.style.display = 'none';
    locationError.style.display = 'none';
    locationBtn.disabled = true;
    locationBtn.textContent = 'Finding location...';
    
    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    };
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const accuracy = position.coords.accuracy;
            
            document.getElementById('latitude').textContent = latitude.toFixed(4);
            document.getElementById('longitude').textContent = longitude.toFixed(4);
            
            locationInfo.style.display = 'block';
            console.log(`Location found - Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy}m`);
            
            locationBtn.disabled = false;
            locationBtn.textContent = 'Find Nearby Events';
        },
        (error) => {
            let errorMessage = '';
            
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = 'Location permission denied. Please enable location access in your browser settings.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = 'Location information is unavailable.';
                    break;
                case error.TIMEOUT:
                    errorMessage = 'Location request timed out. Please try again.';
                    break;
                default:
                    errorMessage = 'An error occurred while getting your location.';
            }
            
            locationError.textContent = errorMessage;
            locationError.style.display = 'block';
            console.error('Geolocation error:', error.message);
            
            locationBtn.disabled = false;
            locationBtn.textContent = 'Find Nearby Events';
        },
        options
    );
}

function savePreference(category) {
    localStorage.setItem(PREFERENCE_KEY, category);
    console.log('Preference saved:', category);
}

function restorePreferences() {
    const savedCategory = localStorage.getItem(PREFERENCE_KEY);
    
    if (savedCategory) {
        console.log('Preference restored:', savedCategory);
        filterEventsByCategory(savedCategory);
        
        const buttons = document.querySelectorAll('.category-btn');
        buttons.forEach(btn => {
            if (btn.getAttribute('data-category') === savedCategory) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    } else {
        filterEventsByCategory('all');
    }
}

function clearPreferences() {
    localStorage.removeItem(PREFERENCE_KEY);
    sessionStorage.clear();
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    filterEventsByCategory('all');
    alert('Preferences cleared. You can set new preferences anytime.');
    console.log('All preferences cleared');
}

window.onbeforeunload = (e) => {
    const feedbackText = document.getElementById('feedbackText').value;
    
    if (feedbackText.trim().length > 0) {
        e.preventDefault();
        e.returnValue = '';
        return '';
    }
};

$(document).ready(() => {
    $('#promoVideo').on('play', function() {
        $(this).fadeIn(300);
    });
    
    $('.event-card').on('mouseenter', function() {
        $(this).fadeIn(200);
    });
});

function addEvent(eventName, eventDate, eventCategory, eventLocation, eventDescription) {
    const newEvent = {
        name: eventName,
        date: eventDate,
        category: eventCategory,
        location: eventLocation,
        description: eventDescription
    };
    
    allEvents.push(newEvent);
    console.log('New event added:', newEvent);
    
    return newEvent;
}

const eventMethods = {
    getEventInfo: function(event) {
        return {
            name: event.name,
            date: event.date,
            category: event.category,
            location: event.location,
            description: event.description
        };
    },
    
    getEventsByMonth: function(events, month) {
        return events.filter(event => event.date.includes(`-${month}-`));
    }
};

function demonstrateObjectEntries(event) {
    const entries = Object.entries(event);
    console.log('Event entries:', entries);
    return entries;
}
