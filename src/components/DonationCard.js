export default class DonationCard {
  constructor(data, cardTemplate) {
    this._data = data;
    this._cardSelector = cardTemplate;
    this._email = data.email;
    this._location = data.location;
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
    this._cardEmail = this._cardElement.querySelector(".donation-card__email");
    this._cardLocation = this._cardElement.querySelector(
      ".donation-card__location"
    );
    this._cardDonation = this._cardElement.querySelector(
      ".donation-card__description"
    );
    this._cardImage = this._cardElement.querySelector(".donation-card__image");
    this._cardEmail.textContent = `Email: ${this._email}`;
    this._cardLocation.textContent = `Location: ${this._location}`;
    this._cardDonation.textContent = `Donation: ${this._desc}`;

    this._cardImage.src = this._link;
    this._cardImage.alt = this._desc;
    return this._cardElement;
  }
}
