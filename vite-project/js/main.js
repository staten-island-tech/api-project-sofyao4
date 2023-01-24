import "../styles/main.css";
import { DOM } from "./dom.js";

async function fetchData() {
  const value = DOM.input.value;
  console.log(value);
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
      function cardMaker(element) {
        DOM.apiResponseDOM.insertAdjacentHTML(
          "beforeend",
          `<div>
    <h2 class="cardName">Name:${element.name}</h2>
    <img src=${element.imageUrl}>
    </div>`
        );
      }
      data.data.forEach((element) => cardMaker(element));

      DOM.input.value = "";
    }
  } catch (err) {
    console.error(err);
  }
}

// const getChar = async () => {
//   const char = await fetchData(url);
//   char.data.forEach((element) => console.log(element.name));

//   function cardMaker(element) {
//     DOM.apiResponseDOM.insertAdjacentHTML(
//       "beforeend",
//       `Name: ${element.name} <img src=${element.imageUrl}>`
//     );
//   }
//   char.data.forEach((element) => cardMaker(element));
// };
// getChar();

DOM.form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetchData();
});
