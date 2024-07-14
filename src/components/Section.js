export default class Section {
  constructor(renderer, elementSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(elementSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this.addItem(item);
    });
  }

  addItem(item) {
    const newCard = this._renderer(item);
    this._container.prepend(newCard);
  }

  clearItems() {
    this._cards = this._container.querySelectorAll(".charity-card");
    if (this._cards !== null) {
      for (var i = 0; i < this._cards.length; i++) {
        this._cards[i].remove();
      }
    }
  }
}
