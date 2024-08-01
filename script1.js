document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const triangle = document.querySelector('.triangle');
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('night');
      updateTriangleColor();
    });
  
    function updateTriangleColor() {
      if (body.classList.contains('night')) {
        triangle.style.borderLeftColor = '#2c3e50'; // night color
      } else {
        triangle.style.borderLeftColor = '#87CEEB'; // day color
      }
    }
    updateTriangleColor();
  });
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
      console.log('Link clicked');
      // Comment out any preventDefault or stopPropagation calls here
    });
  });
  