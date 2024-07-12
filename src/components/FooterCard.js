export default class FooterCard {
  constructor(data, cardSelector) {
    this._data = data;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const _cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".footer-card")
      .cloneNode(true);

    return _cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".footer-card__name").textContent =
      this._data.name;
    this._element.querySelector(".footer-card__image").src = this._data.image;
    this._element.querySelector(".footer-card__image").alt = this._data.name;
    this._element.querySelector(".footer-card__link").href = this._data.link;

    console.log(this._element);

    return this._element;
  }
}
