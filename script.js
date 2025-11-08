document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("registrationModal");
    const openModalButtons = document.querySelectorAll(".register-btn");
    const closeModalButton = document.querySelector(".close-modal");
    const modalCourseName = document.getElementById("modalCourseName");
    const modalCoursePrice = document.getElementById("modalCoursePrice");
    const registrationForm = document.getElementById("registrationForm");
    const courseNameInput = document.getElementById("courseName");
    const coursePriceInput = document.getElementById("coursePrice");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    openModalButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const courseName = this.getAttribute("data-course");
            const coursePrice = this.getAttribute("data-price");
            modalCourseName.textContent = courseName;
            modalCoursePrice.textContent = "Rs " + coursePrice;
            courseNameInput.value = courseName;
            coursePriceInput.value = coursePrice;
            modal.classList.add("show");
            document.body.style.overflow = "hidden";
        });
    });

    closeModalButton.addEventListener("click", function () {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.classList.remove("show");
            document.body.style.overflow = "auto";
        }
    });

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const education = document.getElementById("education").value;
        const courseName = courseNameInput.value;

        const mailtoLink = `mailto:info@bmfuturomindai.com?subject=Course Registration - ${courseName}&body=Name: ${name}%0DEmail: ${email}%0DPhone: ${phone}%0DEducation Level: ${education}%0DCourse: ${courseName}`;

        window.location.href = mailtoLink;

        modal.classList.remove("show");
        document.body.style.overflow = "auto";
        registrationForm.reset();
    });

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });
});
