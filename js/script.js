document.addEventListener("DOMContentLoaded", () => {
  // ===== Load Header =====
  fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector("header-placeholder").outerHTML = data;

      // ===== Highlight Active Nav Link =====
      document.querySelectorAll("nav a").forEach(link => {
        if (link.href === window.location.href) {
          link.classList.add("active");
        }
      });

      // ===== Internship Button Smart Fix =====
      const internshipBtn = document.querySelector(".cta-nav");
      if (internshipBtn) {
        const currentPage = window.location.pathname.split("/").pop();
        if (currentPage === "index.html" || currentPage === "") {
          internshipBtn.setAttribute("href", "#internship");
        } else {
          internshipBtn.setAttribute("href", "index.html#internship");
        }
      }

      // ===== Mobile Hamburger Toggle =====
      const navToggle = document.querySelector(".nav-toggle");
      const navMenu = document.querySelector("nav");

      if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
          navMenu.classList.toggle("open"); // toggles menu open/close
        });
      }
    });

  // ===== Load Footer =====
  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector("footer-placeholder").outerHTML = data;
      const yearEl = document.getElementById("year");
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    });
});
