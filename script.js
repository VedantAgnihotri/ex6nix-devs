const navLinks = document.querySelector('.nav-links')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('top-[9%]')
            navLinks.classList.toggle('shadow')
            navLinks.classList.toggle('text-cyan-600')
            navLinks.classList.toggle('bg-gradient-to-r from-sky-700 to-sky-500 text-white')
        }
