document.addEventListener("DOMContentLoaded", () => {
  // Load Header
  fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector("header-placeholder").outerHTML = data;

      // Highlight active nav link
      document.querySelectorAll("nav a").forEach(link => {
        if (link.href === window.location.href) {
          link.classList.add("active");
        }
      });

      // Internship button smart fix
      const internshipBtn = document.querySelector(".cta-nav");
      if (internshipBtn) {
        const currentPage = window.location.pathname.split("/").pop();
        if (currentPage === "index.html" || currentPage === "") {
          internshipBtn.setAttribute("href", "#internship");
        } else {
          internshipBtn.setAttribute("href", "index.html#internship");
        }
      }
    });

  // Load Footer
  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector("footer-placeholder").outerHTML = data;
      document.getElementById("year").textContent = new Date().getFullYear();
    });
});
