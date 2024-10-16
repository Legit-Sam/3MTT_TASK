window.addEventListener('scroll', function () {
    const image = document.querySelector('.people_img img');
    const cards = document.querySelectorAll('.service-card');
    const imagePosition = image.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    // Add the active class when the image comes into view
    if (imagePosition < screenHeight) {
        image.classList.add('active');
    }
});

function handleScrollAnimation() {
    const cards = document.querySelectorAll('.service-card');
    const screenHeight = window.innerHeight;

    cards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top;

        // If the card is in the viewport, add the 'active' class
        if (cardPosition < screenHeight - 100) {
            card.classList.add('actives');
        }
    });
}

// Attach the scroll event listener to the window
window.addEventListener('scroll', handleScrollAnimation);

// Ensure animation also runs if cards are in view on load
window.addEventListener('load', handleScrollAnimation);