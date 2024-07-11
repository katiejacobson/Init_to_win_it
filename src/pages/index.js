// IMPORTS
import Card from "../components/Card.js";
import Section from "../components/Section.js";
// import Api from "../components/Api.js";
import DonationsPopup from "../components/DonationsPopup.js";
import "../pages/index.css";

// CLASS INSTANTATION
const cardTemplate =
  document.querySelector("#card__template").content.firstElementChild;
const createCard = (cardData) => {
  const newCard = new Card(cardData, cardTemplate);
  return newCard.createCard();
};
const whyRenderer = (cardData) => {
  sectionWhy.addItem(createCard(cardData));
};
const donationRenderer = (inputData) => {
  sectionDonations.addItem(createCard(inputData));
};
const donationsPopup = new DonationsPopup(".donation__popup", donationRenderer);
const sectionWhy = new Section(whyRenderer, ".why__gallery");
const sectionDonations = new Section(donationRenderer, ".donations__gallery");

// CLASS METHOD CALLS
donationsPopup.setEventListeners();
