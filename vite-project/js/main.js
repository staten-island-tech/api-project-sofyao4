import "../styles/main.css";
const url = "https://api.disneyapi.dev/character?";
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

DOM.submitName.addEventListener("submit", function () {});

const getChar = async () => {
  const char = await fetchData(url);
  DOM.apiResponseDOM.innerHTML = `Name: ${char.name} <img src=${char.imageUrl}>`;
};
getChar();
