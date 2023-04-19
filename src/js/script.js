// navbar
import "../css/style.css";
const navLinks = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

function currentSection() {
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            navLinks.forEach((item) => {
                item.classList.remove("active");
            });
            e.target.classList.add("active");
        });
    });
}

function onScroll() {
    let currentSectionIndex = 0;
    let prevSectionBottom = 0;

    sections.forEach((section, i) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollTop = window.scrollY;

        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            currentSectionIndex = i;
        } else if (scrollTop >= sectionBottom) {
            prevSectionBottom = sectionBottom;
        }
    });

    navLinks.forEach((link, i) => {
        if (i === currentSectionIndex) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        if (section.offsetHeight === window.innerHeight) {
            onScroll();
        }
    });
});

currentSection();

// Modal
const btn = document.querySelectorAll(".btn__show-modal");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const modalSubmit = document.querySelector(".modal__form-btn");
const nav = document.querySelector(".nav");

btn.forEach((item) => {
    item.addEventListener("click", () => {
        nav.classList.add("hide");
        modal.classList.add("modal__show");
        document.body.style.overflow = "hidden";
        modalClose.addEventListener("click", () => closeModal());
        modalSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            closeModal();
        });
    });
});

function closeModal() {
    nav.classList.remove("hide");
    modal.classList.remove("modal__show");
    document.body.style.overflow = "auto";
}

// View counter

function viewCounter() {
    let visitCount = 0;
    let totalDuration = Number(localStorage.totalDuration) || 0;
    let lastVisitTime = null;

    if (typeof Storage !== "undefined") {
        if (localStorage.visitCount) {
            localStorage.visitCount = Number(localStorage.visitCount) + 1;
        } else {
            localStorage.visitCount = 1;
            localStorage.firstVisitTime = new Date().getTime();
        }

        const currentTime = new Date().getTime();

        if (localStorage.lastVisitTime) {
            const duration = currentTime - Number(localStorage.lastVisitTime);
            totalDuration += duration;
        }

        localStorage.lastVisitTime = currentTime;
        localStorage.totalDuration = totalDuration;
        const averageDuration = totalDuration / localStorage.visitCount;
        const totalTime = Math.round(totalDuration / 1000);
        const averageTime = Math.round(averageDuration / 1000);

        console.log(`Total time: ${totalTime} s`);
        console.log(`Average time: ${averageTime} s`);
    } else {
        console.log("ERROR");
    }
}

viewCounter();
