// Q11
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const eventSelected = form.elements['eventType'].value;
    const errorDisplay = document.getElementById('errorDisplay');

    if (!name || !email || !eventSelected) {
        errorDisplay.textContent = 'All fields are required.';
        errorDisplay.style.color = 'red';
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        errorDisplay.textContent = 'Please enter a valid email address.';
        errorDisplay.style.color = 'red';
        return;
    }

    errorDisplay.textContent = '';
}