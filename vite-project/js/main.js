import "../styles/main.css";
import { DOM } from "./dom.js";
import { theming } from "./theme.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const myFunctions = {
  cardMaker: function (element) {
    DOM.apiResponseDOM.insertAdjacentHTML(
      "beforeend",
      `<div data-aos="fade-right"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      class="element-card">
      <h2 class="character-name">${element.name}</h2>
      <img class="card-img" src=${element.imageUrl} alt= "${element.name}">
      <div class= "charInfo">
      <p><span class= "infoSpan">Short Films:</span> ${element.shortFilms.join(
        ", "
      )}</p>
      <p><span class= "infoSpan">TV Shows:</span> ${element.tvShows.join(
        ", "
      )}</p>
      <p><span class= "infoSpan">Films:</span> ${element.films.join(", ")}</p>
      </div>
</div>`
    );
  },
  fetchData: async function () {
    const value = DOM.input.value;
    console.clear();
    const url = `https://api.disneyapi.dev/character?name=${value}`;
    DOM.apiResponseDOM.innerHTML = "";
    try {
      const response = await fetch(url);
      if (response.status < 200 || response.status > 299) {
        console.log(response.status);
        DOM.apiResponseDOM.insertAdjacentHTML("afterbegin", `Cant find`);
      } else {
        const data = await response.json();
        console.log(data);
        if (data.count === 0) {
          DOM.apiResponseDOM.insertAdjacentHTML(
            "beforeend",
            `
            <div class="noChar"> <h2>Sorry no character was found, check spelling, or enter a different name </h2></div>`
          );
        } else {
          data.data.forEach((element) => myFunctions.cardMaker(element));
          DOM.input.value = "";
        }
      }
    } catch (err) {
      console.error(err);
    }
  },
};

DOM.form.addEventListener("submit", function (e) {
  e.preventDefault();
  myFunctions.fetchData();
});
DOM.theme.addEventListener("click", function (e) {
  e.preventDefault;
  theming();
});
