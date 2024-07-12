// IMPORTS
import Card from "../components/Card.js";
import Section from "../components/Section.js";

import Donations from "../components/Donations.js";
import "../pages/index.css";

import Api from "../components/Api2.js";
import Charities from "../components/Charities2.js";
import CharityCard from "../components/CharityCard.js";

import DonationsPopup from "../components/DonationsPopup.js";

const donateButton = document.querySelector(".donate__button");

//API instantiation
const api = new Api({
  baseUrl: "https://partners.every.org/v0.2/",
  apiKey: "pk_live_51295acbffe33d27ac313b33feb97d63",
});

const charityForm = new Charities(".charities", handleCharityFormSubmit);
charityForm.setEventListeners();

function handleCharityFormSubmit(data) {
  api
    .getInfo(data)
    .then((res) => {
      createCharityCard(res.nonprofits[2]);
      charityCardList.renderItems(res.nonprofits);
    })
    .catch(console.error);
}

function createCharityCard(data) {
  const charityCard = new CharityCard(data, "#charity-card-template");
  return charityCard.generateCard();
}

const charityCardList = new Section(createCharityCard, "#charities-container");

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

// FUNCTIONS
function donateButtonHandler() {
  donationsPopup.open();
}

// CLASS METHOD CALLS
donationsPopup.setEventListeners();

// EVENT LISTENERS
donateButton.addEventListener("click", donateButtonHandler);
