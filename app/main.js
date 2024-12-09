import "./style.css";

const apiEntry = "https://restcountries.com/v3.1/all";

fetch(apiEntry).then((response) => response.json());

async function fetchData(apiEntry) {
  try {
    const response = await fetch(apiEntry);
    const data = await response.json();
    createCountryCard(data);
    Search(data);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
fetchData(apiEntry);

function createCountryCard(countries) {
  const container = document.querySelector("#boxes");
  container.innerHTML = "";

  if (countries.length === 0) {
    container.insertAdjacentHTML(
      "beforeend",
      `<p class="mx-auto font-bold text-neutral text-xl mt-40">that one doesn't seem to exist!</p>`
    );
    return;
  } else {
    countries.forEach((country) => {
      // prettier-ignore
      container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="box rounded-2xl bg-neutral border-secondary border mx-auto my-3 h-96 p-4 min-w[20em] text-center md:w-46 xl:w-31 w-78">
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
}

//search
function Search(data) {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const searchValue = searchInput.value.toLowerCase();
      const filteredCountries = data.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue)
      );
      createCountryCard(filteredCountries);
    }
  });
}
