const siteHeader = document.querySelector(".site-header");

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

function updateHeader() {
    if (window.scrollY > 40) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateHeader);

updateHeader();

const introItems = document.querySelectorAll(".intro-item");
const glow = document.querySelector(".background-glow");

setTimeout(() => {
    glow.classList.add("show");
}, 250);

introItems.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add("show");
    }, 700 + index * 700);
});
