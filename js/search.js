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
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.5074, lng: -0.1278}, // Default to London, UK
        zoom: 10
    });

    // Example of adding a marker for a property
    var marker = new google.maps.Marker({
        position: {lat: 51.5074, lng: -0.1278}, // Example coordinates
        map: map,
        title: 'iQ The Arcade, London'
    });

    // Add more markers for other properties as needed
}

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