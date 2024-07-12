export default class Section {
  constructor(renderer, elementSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(elementSelector);
  }

  // renderItems(items) {
  //   items.forEach((item) => {
  //     this._renderer(item);
  //   });
  // }
  // addItem(item) {
  //   this._container.prepend(item);
  // }

  renderItems(items) {
    items.forEach((item) => {
      this.addItem(item);
    });
  }
  addItem(item) {
    const newCard = this._renderer(item);
    this._container.prepend(newCard);
  }
}
