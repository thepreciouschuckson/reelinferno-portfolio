document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Portfolio Category Filtering
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      // Show/Hide project cards based on category
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* ==========================================================================
     2. Navbar Blur / Shadow on Scroll
     ========================================================================== */
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.15)';
    } else {
      navbar.style.borderBottomColor = 'var(--border-color)';
    }
  });

});