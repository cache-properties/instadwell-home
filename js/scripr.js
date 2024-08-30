document.addEventListener("DOMContentLoaded", function() {
    const cityLinks = document.querySelectorAll('.nav-link');
    const propertyCards = document.querySelectorAll('.property-card');

    cityLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            cityLinks.forEach(link => link.classList.remove('active', 'bg-dark', 'text-white'));
            
            // Add active class to the clicked link
            this.classList.add('active', 'bg-dark', 'text-white');
            
            // Get the city from data attribute
            const city = this.getAttribute('data-city');
            
            // Show/Hide property cards based on selected city
            propertyCards.forEach(card => {
                if (card.closest('[data-city]').getAttribute('data-city') === city) {
                    card.closest('.col-12').style.display = 'block';
                } else {
                    card.closest('.col-12').style.display = 'none';
                }
            });
        });
    });
    
    // Trigger click event on the first city link to display cards on load
    cityLinks[0].click();
});
