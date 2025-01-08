// const rootSelector = '[data-js-expandable-content]'

// class ExpandableContent {
//   selectors = {
//     root: rootSelector,
//     button: '[data-js-expandable-content-button]',
//   }

//   stateClasses = {
//     isExpanded: 'is-expanded',
//   }

//   animationParams = {
//     duration: 500,
//     easing: 'ease',
//   }

//   constructor(rootElement) {
//     this.rootElement = rootElement
//     this.buttonElements = this.rootElement.querySelector(this.selectors.button)
//     this.bindEvents()
//   }

//   expand() {
//     const { offsetHeight, scrollHeight } = this.rootElement
//     this.rootElement.classList.add(this.stateClasses.isExpanded)
//     this.rootElement.animate(
//       [{ maxHeight: `${offsetHeight}px` }, { maxHeight: `${scrollHeight}px` }],
//       this.animationParams,
//     )
//   }

//   onButtonClick = () => {
//     this.expand()
//   }

//   bindEvents() {
//     this.buttonElements.addEventListener('click', this.onButtonClick)
//   }
// }

// class ExpandableContentCollection {
//   constructor() {
//     this.init()
//   }

//   init() {
//     document.querySelectorAll(rootSelector).forEach((rootElement) => {
//       new ExpandableContent(rootElement)
//     })
//   }
// }

// new ExpandableContentCollection()

const rootSelector = '[data-js-expandable-content]'

const selectors = {
  root: rootSelector,
  button: '[data-js-expandable-content-button]',
}

const stateClasses = {
  isExpanded: 'is-expanded',
}

const animationParams = {
  duration: 500,
  easing: 'ease',
}

const expand = (rootElement) => {
  const { offsetHeight, scrollHeight } = rootElement

  rootElement.classList.add(stateClasses.isExpanded)

  rootElement.animate(
    [{ maxHeight: `${offsetHeight}px` }, { maxHeight: `${scrollHeight}px` }],
    animationParams,
  )
}

const createExpandableContent = (rootElement) => {
  const buttonElement = rootElement.querySelector(selectors.button)

  const onButtonClick = () => expand(rootElement)

  buttonElement.addEventListener('click', onButtonClick)

  return () => buttonElement.removeEventListener('click', onButtonClick)
}

const initExpandableContent = () => {
  document.querySelectorAll(rootSelector).forEach((rootElement) => {
    createExpandableContent(rootElement)
  })
}

initExpandableContent()
