let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
    if (document.body.className != "dark") {
        this.firstElementChild.src = "images/light.svg";
    } else {
        this.firstElementChild.src = "images/dark.svg";
    }
    document.body.classList.toggle("dark");
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$(document).ready(function () {
    $("#team-carousel").owlCarousel({
        margin: 30,
        loop: true,
        nav: true,
        navText: [
            '<img src="images/prev.svg"/>',
            '<img src="images/next.svg"/>',
        ],
        dots: true,
        items: 1,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            600: {
                items: 2,
            },
            900: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    });
});

function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

window.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        backtop.classList.add("backtop-show");
    } else {
        backtop.classList.remove("backtop-show");
    }
}

window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
    if (scrollY > 100) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}
const loading = document.getElementById("loading");

const loadingDuration = 500; // 1s
setTimeout(() => {
    loading.classList.add("loading-none");
}, loadingDuration);

