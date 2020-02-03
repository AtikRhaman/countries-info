const countryContainer = document.querySelector(".country_container");
const capital = document.querySelector(".capital");
const url = "https://restcountries.eu/rest/v2/all";
fetch(url)
    .then(response => response.json())
    .then(countries => {
        for (const country of countries) {
            let {
                name,
                capital,
                population,
                flag
            } = country;
            let div = document.createElement("div");
            let countryName = document.createElement("h2");
            let countrycapital = document.createElement("p");
            let countryPopulation = document.createElement("p");
            let countryFlag = document.createElement("img");
            div.setAttribute("class", "country");

            countryName.textContent = `${name}`;
            countrycapital.textContent = `Capital: ${capital}`;
            countryPopulation.textContent = `Population : ${population}`;
            countryFlag.src = flag;

            div.appendChild(countryFlag);
            div.appendChild(countryName);
            div.appendChild(countrycapital);
            div.appendChild(countryPopulation);

            countryContainer.appendChild(div);
        }
    });