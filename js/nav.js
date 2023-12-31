const navLinks = document.querySelector('.nav-links')
const togglebtn= document.querySelector('.toggle-btn')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.remove('animate__faster')
            navLinks.classList.toggle('animate__slideOutUp')
            navLinks.classList.toggle('animate__slideInDown')



        }
const theme_btn = document.querySelector('.theme_btn')
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if(localStorage.getItem('color-theme')===null){
    localStorage.setItem('color-theme', 'dark');
}

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