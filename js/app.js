// Declaration
const inputCountryName = document.querySelector("#input_country_name");
const numberOfCountries = document.querySelector("#number-of-countries");
const countryContainer = document.querySelector(".country_container");
const capital = document.querySelector(".capital");
let startWithAnyWord;
let serchWord;
const url = "https://restcountries.eu/rest/v2/all";
// fatching the API
fetch(url)
    .then(response => response.json())
    .then(countries => {
        displayCountry(countries)

        inputCountryName.addEventListener("input", function (evt) {
            countryContainer.innerHTML = "";
            let inputName = this.value;
            startWithAnyWord = countries.filter(country =>
                country.name.toLowerCase().startsWith(inputName.toLowerCase()) || country.capital.toLowerCase().startsWith(inputName.toLowerCase())
            )
            displayCountry(startWithAnyWord);
        });

        inputCountryName.addEventListener("input", function (evt) {
            countryContainer.innerHTML = "";
            let inputName = this.value;
            serchWord = countries.filter(country => country.name.toLowerCase().includes(inputName.toLowerCase()) || country.capital.toLowerCase().includes(inputName.toLowerCase()));
            displayCountry(serchWord);
        });

    });

// Display the country information
const displayCountry = (countries) => {
    for (const country of countries) {
        let {
            flag,
            name,
            capital,
            population,
            languages,
            region,
        } = country;
        let div = document.createElement("div");
        let countryFlag = document.createElement("img");
        let countryName = document.createElement("h2");
        let countrycapital = document.createElement("p");
        let countryPopulation = document.createElement("p");
        let countryRegion = document.createElement("p");
        let countrylanguages = document.createElement("p");

        // countries >  languages > name
        //find the language arry insight the country array
        let langs = languages.map((lang) => lang.name)
        div.setAttribute("class", "country");
        countryFlag.src = flag;
        countryName.textContent = `${name}`;
        countrycapital.textContent = `Capital : ${capital}`;
        countryName.style.padding = '20px 0'
        countryPopulation.textContent = `Population : ${population}`;
        countryRegion.textContent = `Region : ${region}`;

        countrylanguages.textContent = `Languages : ${langs.join(', ')}`;

        div.appendChild(countryFlag);
        div.appendChild(countryName);
        div.appendChild(countrycapital);
        div.appendChild(countryPopulation);
        div.appendChild(countryRegion);
        div.appendChild(countrylanguages);

        countryContainer.appendChild(div);


    }
    // length of arry
    const arrylength = (array, element) => {
        numberOfCountries.textContent = array.length;
    };
    arrylength(countries)


}