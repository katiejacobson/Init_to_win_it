import Popup from "./Popup.js"
export default class DonationsPopup extends Popup{
    constructor(popupSelector, formSubmit){
    super({popupSelector});
    this._donationForm = this._popupElement.querySelector(".donation__form")
    this._formSubmit = formSubmit
    this._donationButton = this._donationButton.querySelector('.donate__button')
}
_getInputValues(){
    const inputValues={};
    const inputElements=this._donationForm.querySelectorAll('.donation__inputs');
    inputElements.forEach((input)=>{
        inputValues[input.name] = inputValues;
    });
    return inputValues
}
close(){
    this._popupForm.reset()
    super.close()
}
 setEventListeners(){
    this._donationForm.addEventListener('submit',(evt)=>{
        evt.preventDefault();
        const inputValues = this._getInputValues 
        this._formSubmit(inputValues);
      });
      super.setEventListeners();
}
}