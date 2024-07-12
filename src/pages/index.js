// IMPORTS
import DonationCard from "../components/DonationCard.js";
import Section from "../components/Section.js";

import Donations from "../components/Donations.js";
import "../pages/index.css";

import Api from "../components/Api2.js";
import Charities from "../components/Charities2.js";
import CharityCard from "../components/CharityCard.js";

import DonationsPopup from "../components/DonationsPopup.js";
import FooterCard from "../components/FooterCard.js";
import { coderInfo } from "../utils/constants.js";

// ORIGINAL API?
// const api = new Api({
//   baseUrl: "https://api.charityapi.org",
//   headers: {
//     apikey:
//       "live-Om_n2JQF00pe75rH-_Z0dxSyK_zUleLGuvZNju1Y9OzPQNiw2cj-PNd53keBX6i83oC34ZqR49aZssx7",
//     // "Content-Type": "application/json",
//   },
// });

const donateButton = document.querySelector(".donate__button");

//API instantiation
const api = new Api({
  baseUrl: "https://partners.every.org/v0.2/",
  apiKey: "pk_live_51295acbffe33d27ac313b33feb97d63",
});

//Charity Form

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

// FOOTER CARDS

function createFooterCard(data) {
  const footerCard = new FooterCard(data, "#footer-card-template");
  return footerCard.generateCard();
}

const footerCardList = new Section(createFooterCard, ".footer__container");
footerCardList.renderItems(coderInfo);

// CLASS INSTANTATION
const createDonationCard = (cardData) => {
  const newCard = new DonationCard(cardData, "#donation-card__template");
  return newCard.createCard();
};
const donationRenderer = (inputData) => {
  console.log(inputData);
  sectionDonations.addItem(inputData);
};
const donationsPopup = new DonationsPopup(donationRenderer, ".donation__popup");
const sectionDonations = new Section(createDonationCard, ".donations__gallery");

// FUNCTIONS
function donateButtonHandler() {
  donationsPopup.open();
}

// CLASS METHOD CALLS
donationsPopup.setEventListeners();

// EVENT LISTENERS
donateButton.addEventListener("click", donateButtonHandler);
