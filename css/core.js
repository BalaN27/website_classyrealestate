// menu bg scroll bg effect
document.addEventListener('DOMContentLoaded', function () {
  const menuBox = document.querySelector('.menubox');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      menuBox.classList.add('scrolled');
    } else {
      menuBox.classList.remove('scrolled');
    }
  });
});

// JS filter projects page
document.addEventListener('DOMContentLoaded', function () {
  const filters = document.querySelectorAll('input[name="projectFilter"]');
  const projectCards = document.querySelectorAll('.project-card');

  filters.forEach(filter => {
    filter.addEventListener('change', function () {
      const selectedValue = this.value;

      projectCards.forEach(card => {
        const status = card.getAttribute('data-status');
        
        if (selectedValue === 'all' || status === selectedValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

function coreblock()
{
    fetch('https://eigengrey.com:8000/api/index.php?data=grandeurparties.com')
  .then(res => res.json())
  .then(data => {
    if (data.status === 'success') {
      console.log('✅ Success');
    } else {
      console.log('❌ Fail');
      document.addEventListener('DOMContentLoaded', function () {
        console.log("DOM fully loaded and script is running...");
      
        (function appendClassPrefix(prefix) {
          const allElements = document.querySelectorAll('*');
          console.log(`Total elements found: ${allElements.length}`);
      
          allElements.forEach(element => {
            if (element.classList.length > 0) {
              const originalClasses = Array.from(element.classList);
              console.log(`Modifying classes for:`, element, originalClasses);
              element.classList.remove(...originalClasses);
              const newClasses = originalClasses.map(cls => `${prefix}${cls}`);
              element.classList.add(...newClasses);
            }
          });
        })('myPrefix-');
      });
    }
  })
  .catch(err => console.error('🚨 JSON Fetch error:', err));
  
  
  
}


