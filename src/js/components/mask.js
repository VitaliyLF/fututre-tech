import IMask from 'imask'

const rootSelector = '[data-js-input-mask]'
const isLidReady = typeof window.IMask !== 'undefined'

if (isLidReady) {
  document.querySelectorAll(rootSelector).forEach((el) => {
    if (!el.dataset.jsInputMask) return

    IMask(el, {
      mask: el.dataset.jsInputMask, // получаем значение из data-js-input-mask
    })
  })
} else {
  console.warn('IMask is not ready')
}
