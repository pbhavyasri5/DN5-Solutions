// Q9
function fetchEventsWithPromises() {
    fetch('https://api.mockjson.com/events')
        .then(response => response.json())
        .then(data => {
            renderEvents(data);
        })
        .catch(error => {
            console.error(error);
        });
}

async function fetchEventsAsync() {
    const spinner = document.querySelector('#loadingSpinner');
    if (spinner) {
        spinner.style.display = 'block';
    }
    try {
        const response = await fetch('https://api.mockjson.com/events');
        const data = await response.json();
        renderEvents(data);
    } catch (error) {
        console.error(error);
    } finally {
        if (spinner) {
            spinner.style.display = 'none';
        }
    }
}