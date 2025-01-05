const setActiveLink = () => {
  const links = document.querySelectorAll('.header__menu-link')
  const currentPage = window.location.pathname.split('/').pop() || 'index.html'

  links.forEach((link) => {
    link.classList.toggle(
      'is-active',
      link.getAttribute('href') === currentPage,
    )
  })
}

document.addEventListener('DOMContentLoaded', setActiveLink)
