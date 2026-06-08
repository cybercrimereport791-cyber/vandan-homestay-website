const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const navLinks = document.querySelectorAll(".main-nav a");
const enquiryForm = document.querySelector("[data-enquiry-form]");
const formNote = document.querySelector("[data-form-note]");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

menuButton.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
  const isOpen = document.body.classList.contains("menu-open");
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-label", "Open menu");
  });
});

enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.hidden = false;
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
