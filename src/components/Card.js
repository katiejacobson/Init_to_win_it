export default class Card {
  constructor(data, cardTemplate) {
    this._name = data.name;
    this._image = data.image;
    this._desc = data.description;
    this._charity = data.charity;
    this._cardTemplate = cardTemplate;
  }
  _checkFileType() {
    if (typeof this._data === "string") {
      this._cardImage.src = this._data;
      this._cardImage.alt = "Image";
    } else if (this._data instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        this._cardImage.src = reader.result;
        this._cardImage.alt = this._data.name;
      };
      reader.readAsDataURL(this._data);
    } else {
      console.error("Unsupported data type for card image");
    }
  }

  createCard() {
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._checkFileType();
    return this._cardElement;
  }
}
