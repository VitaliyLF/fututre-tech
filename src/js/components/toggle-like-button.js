const initLikeButtons = () => {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('.js-toggle-like-button')
    if (!button) return

    button.classList.toggle('is-active')
    const isLiked = button.classList.contains('is-active')
    button.setAttribute('aria-label', isLiked ? 'Dislike' : 'Like')
    button.setAttribute('title', isLiked ? 'Dislike' : 'Like')
  })
}

initLikeButtons()
