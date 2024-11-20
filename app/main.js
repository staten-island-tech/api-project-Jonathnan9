import "./style.css";

const apiEntry = "https://restcountries.com/v3.1/all";
console.log(fetch(apiEntry));

fetch(apiEntry)
  .then((response) => response.json())
  .then((data) => console.log(data));

async function fetchData(apiEntry) {
  try {
    const response = await fetch(apiEntry);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
fetchData(apiEntry);
