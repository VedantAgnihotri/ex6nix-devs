const navLinks = document.querySelector('.nav-links')
const togglebtn= document.querySelector('.toggle-btn')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('hidden')

        }

const theme_btn = document.querySelector('.theme_btn')

var typed = new Typed(".typing", {
    strings: ["Business.", "Portfolio.", "Store.", "Resume."],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
});


var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');


// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}


var themeToggleBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('color-theme') === 'light') {
    document.documentElement.classList.remove('dark');
} 
else {
    document.documentElement.classList.add('dark');
}
themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } 
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

function hide(){
    navLinks.classList.toggle('hidden')
    togglebtn.name = togglebtn.name === 'menu' ? 'close' : 'menu'

}

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
    window.open("https://rrs12.github.io/digimics/");
 } 

 function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    const ServiceID= "service_q2gmcvn"
    const templateID="template_cn62vo6"
   
    emailjs.send(ServiceID,templateID, params)
    .then(
       (res) =>{
           document.getElementById("name").value=""
           document.getElementById("email").value=""
           document.getElementById("message").value=""
           console.log(res)
   
           alert("Message sent successfully")
       }
    )
    .catch((err) => console.log(err))
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