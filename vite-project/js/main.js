const url = "https://api.disneyapi.dev/characters/308";
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

const apiResponseDOM = document.getElementById("api-response");
const getChar = async () => {
  const char = await fetchData(url);
  apiResponseDOM.innerHTML = `Name: ${char.name} <img src=${char.imageUrl}>`;
};
getChar();
