export default class DonationCard {
  constructor(data, cardTemplate) {
    this._data = data;
    this._cardSelector = cardTemplate;
    this._name = data.name;
    this._charity = data.charity;
    this._desc = data.text;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
  }

  _getTemplate() {
    const _cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".donation-card")
      .cloneNode(true);

    return _cardElement;
  }
  createCard() {
    this._cardElement = this._getTemplate();
    this._cardName = this._cardElement.querySelector(".donation-card__name");
    this._cardCharity = this._cardElement.querySelector(
      ".donation-card__charity"
    );
    this._cardDonation = this._cardElement.querySelector(
      ".donation-card__description"
    );
    this._cardImage = this._cardElement.querySelector(".donation-card__image");
    this._cardName.textContent = `Name: ${this._name}`;
    this._cardCharity.textContent = `Charity: ${this._charity}`;
    this._cardDonation.textContent = `Donation: ${this._desc}`;

    this._cardImage.src = this._link;
    this._cardImage.alt = this._desc;
    return this._cardElement;
  }
}
