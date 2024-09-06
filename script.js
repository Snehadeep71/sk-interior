/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu');
 /*---------------------------navbar js ends here-----------------------------*/ 
/*---------------------navbar js for the mobile version ends here---------------*/ 
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left></i>",
            "<i class='fa-solid fa-arrow-right></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

/*---------------------experience js starts here------------------*/
/*--------------extra styling for navbar starts here-------------*/
function toggleSec1() {
    const sec1 = document.querySelector('.sec-1');
    const navMenu = document.getElementById('nav-menu');
    
    if (window.innerWidth <= 1336) {
        if (!sec1.classList.contains('in-nav')) {
            navMenu.appendChild(sec1);  // Move sec-1 into the nav-menu
            sec1.classList.add('in-nav'); // Add the class to apply mobile styles
        }
    } else {
        if (sec1.classList.contains('in-nav')) {
            document.body.appendChild(sec1);  // Move sec-1 back to the original place
            sec1.classList.remove('in-nav'); // Remove the class to revert styles
        }
    }
}

// Run on initial load
toggleSec1();

// Add event listener for window resize
window.addEventListener('resize', toggleSec1);
/*--------------extra styling for navbar ends here-------------*/
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const updateCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 400; // Adjust speed if needed
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => updateCount(counter), 1);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when at least 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                updateCount(counter);
                observer.unobserve(counter); // Stop observing after animation starts
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
/*---------------------experience js ends here------------------*/
/*---------------------progress bar js starts  here------------------*/
document.addEventListener("DOMContentLoaded", function() {
    // Create the Intersection Observer
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let progressFill = entry.target.querySelector('.progress-fill');
                let percentage = progressFill.getAttribute('data-percentage');
                
                progressFill.style.width = percentage + '%';

                // Stop observing after the animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe each progress bar
    document.querySelectorAll('.progress-bar').forEach(bar => {
        observer.observe(bar);
    });
});
/*---------------------progress bar js ends  here------------------*/
/*---------------------team member  js starts  here------------------*/
$('.teammember-container').owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:5000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left></i>",
            "<i class='fa-solid fa-arrow-right></i>"],
    responsive:{
        0:{
            item:1
        },
        600:{
            item:1
        },
        800:{
            item:2
        },
        1000:{
            item:3
        }
    }
});
/*---------------------team member  js ends  here------------------*/
$('.teammember-section').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left></i>",
            "<i class='fa-solid fa-arrow-right></i>"],
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        500:{
            items:1
        },
        600:{
            items:1
        },
        700:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
/*-----------------------contact us js starts here------------*/

function sendwhatsapp(event) {
    event.preventDefault(); // Prevents the default form submission

    var phonenumber = "+9830722833";

    // Retrieve values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Construct the URL for WhatsApp
    var url = "https://wa.me/" + phonenumber + "?text="
        + "*Name :* " + encodeURIComponent(name) + "%0a"
        + "*Email :* " + encodeURIComponent(email) + "%0a"
        + "*Message :* " + encodeURIComponent(message)
        + "%0a%0a"
        + "This is an example of sending HTML form data to WhatsApp";

    // Open the WhatsApp URL in a new window/tab
    window.open(url, '_blank').focus();
}

// Attach the sendwhatsapp function to the form's submit event
document.getElementById('contactForm').addEventListener('submit', sendwhatsapp);

/*-----------------------contact us js ends here------------*/
/*--------------------------slider js starts here--------------*/
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

/*--------------------------slider js ends here--------------*/