import "../styles/main.css";
import { DOM } from "./dom.js";

const myFunctions = {
  cardMaker: function (element) {
    DOM.apiResponseDOM.insertAdjacentHTML(
      "beforeend",
      ` <li class="element-card">  <h2 id="card-name">${element.name}</h2>
      <img id="card-img" src=${element.imageUrl}></li>`
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
        data.data.forEach((element) => myFunctions.cardMaker(element));
        DOM.input.value = "";
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
