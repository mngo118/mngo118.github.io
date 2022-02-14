// Source: https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
// TO DO: Figure out why this isn't working ;-;

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('.appear');
        }
    });
});

observer.observe(document.querySelector('.scroll-animation'));