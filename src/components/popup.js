export default class popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupElement.querySelector("close_popup");
    this._donationButton = this._donationButton.querySelector(".donations");
  }
  open() {
    this._popupElement.classList.add("open_popup");
    document.addEventListener("keydown", this._closeByEscape);
  }
  close() {
    this._popupElement.classList.add("open_popup");
    document.addEventListener("keydown", this._closeByEscape);
  }

  _closeByEscape = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
  setEventListeners() {
    this._donationButton.addEventListener("click", (evt) => {
      if (
        evt.target === this._popupCloseButton ||
        evt.target === this._popupElement
      ) {
        this.close();
      }
    });
  }
}
