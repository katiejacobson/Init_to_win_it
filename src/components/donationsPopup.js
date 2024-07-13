import Popup from "./popup.js";
export default class DonationsPopup extends Popup {
  constructor(formSubmit, popupSelector) {
    super({ popupSelector });
    this._donationForm = this._popupElement.querySelector(".donation-form");
    this._formSubmit = formSubmit;
  }

  _getInputValues() {
    const inputValues = {};
    const inputElements = this._donationForm.querySelectorAll(
      ".donation-form__input"
    );
    inputElements.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  close() {
    this._donationForm.reset();
    super.close();
  }
  setEventListeners() {
    this._donationForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._formSubmit(inputValues);
      this.close();
    });
    super.setEventListeners();
  }
}
