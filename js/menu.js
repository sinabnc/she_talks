document.addEventListener("DOMContentLoaded", function () {
    // Select the menu button and the mobile menu
    const menuButton = document.querySelector(".menu-button");
    const mobileMenu = document.querySelector(".mobile-menu"); // Assuming you have a div with class "mobile-menu"
  
    // Check if elements exist to avoid errors
    if (menuButton && mobileMenu) {
      // Toggle mobile menu visibility on click
      menuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("active"); // Add or remove the 'active' class
        menuButton.classList.toggle("open");   // Optional: Toggle 'open' class for button animation
      });
    }
  });
  