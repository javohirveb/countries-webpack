const loadingEl = document.querySelector('.loader')

const loaderToggle = (info) => {
   if(info) {
      loadingEl.classList.remove('hidden')
   } else {
      loadingEl.classList.add('hidden')
   }
}

export default loaderToggle