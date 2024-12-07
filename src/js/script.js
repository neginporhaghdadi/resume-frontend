// fixed navbar
const headeHeight = document.querySelector('header');  
const navbar = document.querySelector('.navbar')

const handleScroll = () => {  
    const headRect = headeHeight.getBoundingClientRect();  

    if (headRect.bottom < 0) {  
        navbar.classList.add('fixed');  
    } else {  
        navbar.classList.remove('fixed');  
    }  
};  
window.addEventListener('scroll', handleScroll);

// scroll Top button
const button = document.querySelector('.button');

const displayButton = () => {
  window.addEventListener('scroll', () => {
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
  });
};

displayButton();
scrollToTop();

// more details Portfolio
document.querySelectorAll('.header__Item img').forEach(img => {  
  img.addEventListener('click', function() {  
    const parents = this.closest('.header__Item')
      const details = parents.parentElement.querySelector('.details'); 
      if (details.style.display === "none") {  
          details.style.display = "block";
          this.classList.add('rotate');
          parents.classList.add("none");
          details.classList.add("show");
      } else {  
          details.style.display = "none"; 
          this.classList.remove('rotate');
          parents.classList.remove("none");
      }  
  });  
});