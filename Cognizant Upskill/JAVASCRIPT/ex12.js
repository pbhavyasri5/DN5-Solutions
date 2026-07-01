// Q12
function submitUserData(userData) {
    fetch('https://api.mockjson.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        setTimeout(() => {
            const statusMessage = document.querySelector('#statusMessage');
            if (response.ok) {
                statusMessage.textContent = 'Registration Successful!';
            } else {
                statusMessage.textContent = 'Registration Failed.';
            }
        }, 1500);
    })
    .catch(() => {
        setTimeout(() => {
            document.querySelector('#statusMessage').textContent = 'Server Error.';
        }, 1500);
    });
}