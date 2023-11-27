
var typed = new Typed(".typing", {
  strings: ["Business.", "Portfolio.", "Store.", "Resume."],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true
});


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const member_1 = entry.target.querySelector('.member-1');
      const member_2 = entry.target.querySelector('.member-2');
    if(screen.width>=768){
      if (entry.isIntersecting) {
        member_1.classList.add('animate__animated','animate__fadeInLeft');
        member_2.classList.add('animate__animated','animate__fadeInRight');
        return; // if we added the class, exit the function
      }
    }
      // We're not intersecting, so remove the class!
    });
  });
  
  observer.observe(document.querySelector('.animate_team'));
  

 function matica(){
    window.open("https://rrs12.github.io/matica/");
 } 
 function digimics(){
    window.open("https://thedigitaldynamics.co.in");
 } 

 let $root = $('html, body');
 $('a[href^="#"]').click(function() {
     let href = $.attr(this, 'href');
     $root.animate({
       scrollTop: $(href).offset().top
     }, 500, function() {
       window.location.hash = href;
     });
     return false;
   });


   let sections = document.querySelectorAll('section');
   let nav_links = document.querySelectorAll('header nav a');
   window.onscroll = () => {
       sections.forEach(sec => {
           let top = window.scrollY;
           let offset = sec.offsetTop - 150;
           let height = sec.offsetHeight;
           let id = sec.getAttribute('id');
           
           if(top >= offset && top < offset + height) {
               nav_links.forEach(links => {
                   links.classList.remove('active', "text-yellow-500","dark:text-yellow-400");
                   links.classList.add("text-black","dark:text-white")
                   document.querySelector('header nav a[href*=' + id + ']').classList.add('active', "text-yellow-500","dark:text-yellow-400");                   
               });
           };
       });
   };
