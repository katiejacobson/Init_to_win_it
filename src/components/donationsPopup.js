import popup from "./popup";
export default class donationsPopup extends popup{
    constructor(popupSelector, formSubmit){
    super({popupSelector});
    this._donationForm = this._popupElement.querySelector(".donation_form")
    this._formSubmit = formSubmit
    this._submitButton = this._donationForm.querySelector('donate_button')
}
_getInputValues(
})
}