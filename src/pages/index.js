import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Donations from "../components/Donations.js";
import "../pages/index.css";
import Api from "../components/Api.js";
import Charities from "../components/Charities.js";
import CharityCard from "../components/CharityCard.js";

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
      createCharityCard(res.nonprofits[2]);
    })
    .catch(console.error);
}
