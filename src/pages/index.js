// IMPORTS
import Card from "../components/Card.js";
import Section from "../components/Section.js";
// import Api from "../components/Api.js";
import DonationsPopup from "../components/DonationsPopup.js";
import "../pages/index.css";
import Api from "../components/api.js";
import Charities from "../components/charities.js";

// const api = new Api({
//   baseUrl: "https://api.charityapi.org",
//   headers: {
//     apikey:
//       "live-Om_n2JQF00pe75rH-_Z0dxSyK_zUleLGuvZNju1Y9OzPQNiw2cj-PNd53keBX6i83oC34ZqR49aZssx7",
//     // "Content-Type": "application/json",
//   },
// });

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
      console.log(res.nonprofits[0]);
      console.log(res.nonprofits[1]);
    })
    .catch(console.error);
}

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
