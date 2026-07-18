const siteHeader = document.querySelector(".site-header");

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

introItems.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add("show");
    }, 700 + index * 700);
});
