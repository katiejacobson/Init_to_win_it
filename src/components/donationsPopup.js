import Popup from "./Popup.js"
export default class DonationsPopup extends Popup{
    constructor(popupSelector, formSubmit){
    super({popupSelector});
    this._donationForm = this._popupElement.querySelector(".donation__form")
    this._formSubmit = formSubmit
    this._donationButton = this._donationButton.querySelector('.donate__button')
}
 
  _getInputValues() {
    const inputValues = {};
    const inputElements = this._form.querySelectorAll(".donation__form_input");
    inputElements.forEach((input) => {
      console.log(`input: ${input}`);
      inputValues[input.name] = input.value;
 
    });
    return inputValues;
  }
  close() {
    this._form.reset();
    super.close();
  }
  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._formSubmit(inputValues);
    });
    super.setEventListeners();
  }
}