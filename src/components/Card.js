export default class Card {
  constructor(data, cardTemplate) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._charity = data.charity;
    this._desc = data.text;
    this._cardTemplate = cardTemplate;
  }

  createCard() {
    console.log(`card: ${this._data}`);
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardName = this._cardElement.querySelector(".card__name");
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardCharity = this._cardElement.querySelector(".card__charity");
    this._cardDonation = this._cardElement.querySelector(".card__donation");

    this._cardName.textContent = this._name;
    this._cardCharity.textContent = this._charity;
    this._cardDonation.textContent = this._desc;

    this._cardImage.src = this._link;
    this._cardImage.alt = this._desc;
    return this._cardElement;
  }
  //   _checkFileType() {
  //     if (typeof this._data === "string") {
  //       this._cardImage.src = this._data;
  //       this._cardImage.alt = "Image";
  //     } else if (this._data instanceof File) {
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         this._cardImage.src = reader.result;
  //         this._cardImage.alt = this._data.name;
  //       };
  //       reader.readAsDataURL(this._data);
  //     } else {
  //       console.error("Unsupported data type for card image");
  //     }
  //   }
}
