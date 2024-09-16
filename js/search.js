let currentPage = 1;
const totalPages = 2;

function showPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.property-page').forEach(page => page.classList.remove('active-page'));

    // Show the selected page
    document.getElementById('page-' + pageNumber).classList.add('active-page');

    // Update pagination buttons
    currentPage = pageNumber;
    document.getElementById('prev-btn').classList.toggle('disabled', currentPage === 1);
    document.getElementById('next-btn').classList.toggle('disabled', currentPage === totalPages);
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}

// Initialize the map


    // Add more markers for other properties as needed


// Function to search properties
function searchProperties() {
    const searchQuery = document.getElementById('property-search').value.toLowerCase();
    const propertyCards = document.querySelectorAll('.property-card');

    propertyCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const location = card.querySelector('.text-muted').textContent.toLowerCase();

        if (title.includes(searchQuery) || location.includes(searchQuery)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}