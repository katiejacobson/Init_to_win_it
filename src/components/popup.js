export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupElement.querySelector(
      ".popup__close-button"
    );
    this._closeByEscape = (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    };
  }
  open() {
    this._popupElement.classList.add("donation__popup_opened");
    document.addEventListener("keydown", this._closeByEscape);
  }
  close() {
    this._popupElement.classList.remove("donation__popup_opened");
    document.removeEventListener("keydown", this._closeByEscape);
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target === this._popupCloseButton ||
        evt.target === this._popupElement
      ) {
        this.close();
      }
    });
  }
}
