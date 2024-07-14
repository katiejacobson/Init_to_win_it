// IMPORTS
import DonationCard from "../components/DonationCard.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import Charities from "../components/Charities.js";
import CharityCard from "../components/CharityCard.js";
import DonationsPopup from "../components/DonationsPopup.js";
import FormValidation from "../components/FormValidator.js";
import { donationFormValidationConfig } from "../utils/constants.js";
import "../pages/index.css";

const donateButton = document.querySelector(".donate__button");

//API INSTANTIATION
const api = new Api({
  baseUrl: "https://partners.every.org/v0.2/",
  apiKey: "pk_live_51295acbffe33d27ac313b33feb97d63",
});

//CHARITY FORM
const charityForm = new Charities(".charities", handleCharityFormSubmit);
charityForm.setEventListeners();

function handleCharityFormSubmit(data) {
  charityCardList.clearItems();
  api
    .getInfo(data)
    .then((res) => {
      charityCardList.renderItems(res.nonprofits);
    })
    .catch(console.error);
}

function createCharityCard(data) {
  const charityCard = new CharityCard(data, "#charity-card-template");
  return charityCard.generateCard();
}

const charityCardList = new Section(createCharityCard, "#charities-container");

// DONATIONFORM
const createDonationCard = (cardData) => {
  const newCard = new DonationCard(cardData, "#donation-card__template");
  return newCard.createCard();
};
const donationRenderer = (inputData) => {
  sectionDonations.addItem(inputData);
};
const donationsPopup = new DonationsPopup(donationRenderer, ".donation__popup");
const sectionDonations = new Section(createDonationCard, ".donations__gallery");

// CLASS METHOD CALLS
donationsPopup.setEventListeners();

// EVENT LISTENERS
donateButton.addEventListener("click", () => {
  hoverHandler();
  donationsPopup.open();
  donationFormValidator.resetValidation();
});

//FORM VALIDATION
const donationFormElement = document.querySelector("#donation-form");

const donationFormValidator = new FormValidation(
  donationFormValidationConfig,
  donationFormElement
);
donationFormValidator.enableValidation();
