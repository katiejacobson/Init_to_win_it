export default class Charities {
<<<<<<< HEAD
  constructor() {

   
  }
   
}
=======
  constructor(formElement, handleFormSubmit) {
    this._formElement = document.querySelector(formElement);
    this._form = this._formElement.querySelector(".charities__form");
    this._formBtn = this._formElement.querySelector(".charities__button");
    this._input = this._formElement.querySelector(".charities__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getCity() {
    const city = this._input.value;
    console.log(city);
    return city;
  }

  _getCause() {
    var elements = document.getElementsByName("cause");
    var cause;
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].checked) {
        console.log(elements[i]);
        cause = elements[i].value;
      }
    }
    return cause;
  }

  setEventListeners() {
    this._formBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      // const selectedCity = this._getCity();
      const selectedCause = this._getCause();
      console.log(selectedCause);
      this._handleFormSubmit(selectedCause);
      this._form.reset();
    });
  }
}
>>>>>>> 682ba408333648ace43dbad0a9143075a13027bf
