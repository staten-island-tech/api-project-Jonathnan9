import "./style.css";

const apiEntry = "https://restcountries.com/v3.1/all";

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
        <div class="box rounded-2xl bg-neutral border-secondary border mx-auto my-4 w-5/12 md:w-5/12 h-96 p-4 min-w-[12em] text-center">
          <h2 class="text-lg font-bold text-base-100">${country.name.common}</h2>
          <div class="content flex items-start gap-4 mt-4">
            <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" class="h-60 w-[17em] border-r-2 border-base-100 pr-4">
            <div class="details text-left text-base-100 space-y-2">
              <p><strong>Region:</strong> ${country.region}</p>
              <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
              <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
              <p><strong>Languages:</strong> ${Object.values(country.languages || {}).join(", ")}</p>
            </div>
          </div>
        </div>
      `
    );
  });
}
