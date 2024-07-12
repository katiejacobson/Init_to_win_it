export default class CharityCard {
  constructor(data, cardSelector) {
    this._data = data;
    this._name = data.name;
    this._profileUrl = data.profileUrl;
    this._logoUrl = data.logoUrl;
    this._location = data.location;
    this._cardSelector = cardSelector;
    console.log(data);
    console.log(data.logoUrl);
  }

  _getTemplate() {
    const _cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".charity-card")
      .cloneNode(true);

    return _cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".charity-card__name").textContent = this._name;
    this._element.querySelector(".charity-card__location").textContent =
      this._location;
    this._element.querySelector(".charity-card__logo").src = this._logoUrl;
    this._element.querySelector(".charity-card__logo").alt = this._name;
    this._element.querySelector(".charity-card__url").textContent =
      this._profileUrl;

    console.log(this._element);

    return this._element;
  }
}
