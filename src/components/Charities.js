export default class Charities {
  constructor(formElement, handleFormSubmit) {
    this._formElement = document.querySelector(formElement);
    this._form = this._formElement.querySelector(".charities__form");
    this._formBtn = this._formElement.querySelector(".charities__button");
    this._input = this._formElement.querySelector(".charities__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getCause() {
    var elements = document.getElementsByName("cause");
    var cause;
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].checked) {
        // console.log(elements[i]);
        cause = elements[i].value;
      }
    }
    return cause;
  }

  setEventListeners() {
    this._formBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      const selectedCause = this._getCause();
      this._handleFormSubmit(selectedCause);
      this._form.reset();
    });
  }
}
