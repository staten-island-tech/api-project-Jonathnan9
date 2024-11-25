import "./style.css";

const apiEntry = "https://restcountries.com/v3.1/all";

console.log(fetch(apiEntry));

fetch(apiEntry).then((response) => response.json());

async function fetchData(apiEntry) {
  try {
    const response = await fetch(apiEntry);
    const data = await response.json();
    createCountryCard(data);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
fetchData(apiEntry);

function createCountryCard(countries) {
  const container = document.querySelector(".boxes");
  // prettier-ignore
  countries.forEach((country) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <div class="country-card">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="100">
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Languages:</strong> ${Object.values(country.languages || {}).join(", ")}</p>
      </div>
      `
    );
  });
}
