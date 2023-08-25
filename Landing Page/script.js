document.getElementById('hamburger').addEventListener('click', function() {
    var navItems = document.getElementById('navItems');
    navItems.classList.toggle('show');
  });
  
  // Hide navigation items when a link is clicked
  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      var navItems = document.getElementById('navItems');
      navItems.classList.remove('show');
    });
  });
  
  // Hide navigation items when the window is resized to a larger size
  window.addEventListener('resize', function() {
    var navItems = document.getElementById('navItems');
    var hamburger = document.getElementById('hamburger');
    
    if (window.innerWidth > 768) { // Adjust the breakpoint as per your needs
      navItems.classList.remove('show');
      hamburger.classList.remove('active');
    }
  });
  


// JavaScript to trigger the logo animation on menu bar click
document.addEventListener('DOMContentLoaded', function() {
  var logo = document.getElementById('logo');

  function playLogoAnimation() {
      logo.classList.add('logo-animation');
      setTimeout(function() {
          logo.classList.remove('logo-animation');
      }, 3000);
  }

  logo.addEventListener('click', playLogoAnimation);
});


