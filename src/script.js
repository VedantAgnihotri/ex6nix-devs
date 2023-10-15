const navLinks = document.querySelector('.nav-links')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('top-[9%]')
        }

const theme_btn = document.querySelector('.theme_btn')


function theme_change(e) {
    e.name = e.name === 'sunny' ? 'moon' : 'sunny'
    document.body.classList.toggle('dark')
    localStorage.setItem('theme','dark')
    tailwind.config = {
        darkMode: 'class',
    }
}