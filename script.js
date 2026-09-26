/* =========================================
   ROYAL ENFIELD DEALER WEBSITE
========================================= */


/* =========================================
   SLIDER
========================================= */

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");

let currentSlide = 0;

let slideTimer;


/* SHOW SLIDE */

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    }

    else if (index < 0) {
        currentSlide =
            slides.length - 1;
    }

    else {
        currentSlide = index;
    }


    slides.forEach((slide, i) => {

        slide.classList.toggle(
            "active",
            i === currentSlide
        );

    });


    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === currentSlide
        );

    });

}


/* NEXT */

function nextSlide() {

    showSlide(
        currentSlide + 1
    );

    restartSlider();

}


/* PREVIOUS */

function previousSlide() {

    showSlide(
        currentSlide - 1
    );

    restartSlider();

}


/* GO TO */

function goToSlide(index) {

    showSlide(index);

    restartSlider();

}


/* AUTO SLIDER */

function startSlider() {

    slideTimer =
        setInterval(() => {

            showSlide(
                currentSlide + 1
            );

        }, 6000);

}


/* RESTART */

function restartSlider() {

    clearInterval(slideTimer);

    startSlider();

}


/* INITIALIZE */

showSlide(0);

startSlider();


/* =========================================
   TEST RIDE MODAL
========================================= */

const testRideModal =
    document.getElementById(
        "testRideModal"
    );


function openTestRide() {

    testRideModal.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";

}


function closeModal() {

    testRideModal.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "auto";

}


function submitTestRide(event) {

    event.preventDefault();

    alert(
        "Thank you! Your test ride request has been submitted."
    );

    closeModal();

    event.target.reset();

}


/* =========================================
   ENQUIRY
========================================= */

const enquiryModal =
    document.getElementById(
        "enquiryModal"
    );


function openEnquiry() {

    enquiryModal.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";

}


function closeEnquiry() {

    enquiryModal.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "auto";

}


function submitEnquiry(event) {

    event.preventDefault();

    alert(
        "Thank you! Your enquiry has been received."
    );

    closeEnquiry();

    event.target.reset();

}


/* =========================================
   PHONE
========================================= */

function callDealer() {

    window.location.href =
        "tel:+918879862584";

}


/* =========================================
   WHATSAPP
========================================= */

function openWhatsApp() {

    const phone =
        "918879862584";

    const message =
        encodeURIComponent(
            "Hello Blue Mountain Autos, I am interested in a Royal Enfield motorcycle."
        );

    window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
    );

}


/* =========================================
   DIRECTIONS
========================================= */

function openDirections() {

    const address =
        encodeURIComponent(
            "Blue Mountain Autos, KP 18/507 Q, NH 212, Kunnamangalam, Karanthur, Kozhikode, Kerala 673571"
        );

    window.open(
        `https://www.google.com/maps/search/?api=1&query=${address}`,
        "_blank"
    );

}


/* =========================================
   FINANCE
========================================= */

function openFinance() {

    alert(
        "Finance options will be available from the dealership. Please contact Blue Mountain Autos for current EMI and finance details."
    );

}


/* =========================================
   SERVICE
========================================= */

function openService() {

    alert(
        "Service booking selected. Please contact Blue Mountain Autos to confirm your service appointment."
    );

}


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const nav =
        document.querySelector(
            ".main-nav"
        );

    if (
        nav.style.display ===
        "flex"
    ) {

        nav.style.display =
            "none";

    }

    else {

        nav.style.display =
            "flex";

        nav.style.flexDirection =
            "column";

        nav.style.position =
            "absolute";

        nav.style.top =
            "75px";

        nav.style.left =
            "0";

        nav.style.right =
            "0";

        nav.style.background =
            "#050505";

        nav.style.padding =
            "25px";

    }

}


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

window.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            testRideModal
        ) {

            closeModal();

        }

        if (
            event.target ===
            enquiryModal
        ) {

            closeEnquiry();

        }

    }
);


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeModal();

            closeEnquiry();

        }

    }
);
