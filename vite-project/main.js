const URL = "https://uselessfacts.jsph.pl/random";
console.log(fetch(URL));

fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data));

async function fetchdata(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
fetchdata(URL);

const apiResponseDOM = document.getElementById("api-response");
const putQuoteInHTML = async () => {
  const fact = await fetchdata(URL);
  apiResponseDOM.innerHTML = `Fact: ${fact}`;
};
putQuoteInHTML();
