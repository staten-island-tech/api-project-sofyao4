const URL = "https://uselessfacts.jsph.pl/random";
async function getFact(URL) {
  const response = await fetch(URL);
  console.log(response);
}
