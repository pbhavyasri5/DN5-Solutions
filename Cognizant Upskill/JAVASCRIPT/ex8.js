// Q8
function setupPortalEvents() {
    const registerButtons = document.querySelectorAll('.register-btn');
    registerButtons.forEach(button => {
        button.onclick = function() {
            handleRegistration(button.id);
        };
    });

    const categorySelect = document.querySelector('#categoryFilter');
    if (categorySelect) {
        categorySelect.onchange = function(event) {
            filterEventsByCategory(event.target.value);
        };
    }

    const nameSearch = document.querySelector('#searchName');
    if (nameSearch) {
        nameSearch.onkeydown = function(event) {
            searchEventsByName(event.target.value);
        };
    }
}