document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Portfolio Category Filtering
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

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
     2. Navbar Border on Scroll
     ========================================================================== */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.15)';
      } else {
        navbar.style.borderBottomColor = 'var(--border-color)';
      }
    });
  }

  /* ==========================================================================
     3. Mobile Drawer Menu & Link Navigation (Bulletproof Fix)
     ========================================================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const menuOverlay = document.getElementById('menu-overlay');

  if (menuToggle && navLinks && menuOverlay) {
    
    // Toggle menu open/close
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      menuOverlay.classList.toggle('active');
    });

    // Close menu when tapping dark overlay
    menuOverlay.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      menuOverlay.classList.remove('active');
    });

    // Close menu when tapping ANY link inside the navigation drawer
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
      });
    });
  }

});
