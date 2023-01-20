// const url = "https://api.chucknorris.io/jokes/random";

// async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// }
// const apiResponseDOM = document.getElementById("api-response");
// const putJokeInHTML = async () => {
//   const joke = await fetchData(url);
//   apiResponseDOM.innerHTML = `Joke: ${joke.value} <img src="${joke.icon_url}">`;
// };
// putJokeInHTML();

const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

async function fetchData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
const apiResponseDOM = document.getElementById("api-response");
const logPoke = async () => {
  const poke = await fetchData(URL);
  apiResponseDOM.insertAdjacentHTML("beforeend", `Name: ${poke.name}`);
};
logPoke();
