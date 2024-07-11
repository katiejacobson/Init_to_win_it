import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import Charities from "../components/Charities.js";
import Donations from "../components/Donations.js";
import "../pages/index.css";

const cardTemplate =
  document.querySelector("#card__template").content.firstElementChild;
const createCard = (cardData) => {
  const newCard = new Card(cardData, cardTemplate);
  return newCard.createCard();
};
const whyRenderer = (cardData) => {
  sectionWhy.addItem(createCard(cardData));
};
const donationRenderer = (cardData) => {
  sectionDonations.addItem(createCard(cardData));
};
const sectionWhy = new Section(whyRenderer, ".why__gallery");
const sectionDonations = new Section(donationRenderer, ".donations__gallery");
