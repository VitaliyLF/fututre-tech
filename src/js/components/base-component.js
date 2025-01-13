class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error(
        'BaseComponent is an abstract class and cannot be instantiated',
      )
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => target[prop],
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue

        if (oldValue !== newValue) {
          this.updateUI()
        }

        return true
      },
    })
  }

  updateUI() {
    throw new Error('updateUI method is not implemented')
  }
}

export default BaseComponent
