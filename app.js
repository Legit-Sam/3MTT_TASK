const navBar = document.querySelector('nav');
const OpenBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const employeeSection = document.querySelector('.employee');
const uploadSection = document.querySelector('.upload');


console.log(navBar, OpenBtn);

OpenBtn.addEventListener('click', () => {
    navBar.style.display = 'flex';
    OpenBtn.style.display = 'none';
    closeBtn.style.display = 'inline'; 
});

closeBtn.addEventListener('click', () => {
    navBar.style.display = 'none';
    closeBtn.style.display = 'none'; 
    OpenBtn.style.display = 'inline'; 
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  observer.observe(employeeSection);


  const newObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

newObs.observe(uploadSection);



