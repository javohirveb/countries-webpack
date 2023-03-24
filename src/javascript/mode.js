const modeBtn = document.querySelector('.header__dark-mode'),
   body = document.querySelector('body'),
   modeFromLocal = localStorage.getItem('mode') ? localStorage.getItem('mode') : null

if (modeFromLocal) {
   body.classList.add('dark-mode')
}

modeBtn.addEventListener('click', () => {
   body.classList.toggle('dark-mode')
   modeFromLocal ? localStorage.setItem('mode', '') : localStorage.setItem('mode', 'dark')
})