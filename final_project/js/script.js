// Source: https://codepen.io/alvarotrigo/pen/PoKamZy 

function reveal() {
    // links with appear class in css (carries out animation)
    var reveals = document.querySelectorAll(".appear");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        // get the space of top of element to top of document
        var elementTop = reveals[i].getBoundingClientRect().top;
        // element visible determines what qualifies as "visible"
        var elementVisible = 90;

        // If the space above the element is less than the window height minus 150 (or in our case visable)
        // Then add the active class (aka carry out animation)
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            // If not then remove active class (keep it opacity 0)
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);