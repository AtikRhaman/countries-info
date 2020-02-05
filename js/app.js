// Declaration
const inputCountryName = document.querySelector("#input_country_name");
const numberOfCountries = document.querySelector("#number-of-countries");
const searchInNumbers = document.querySelector("#search-in-numbers");
const countryContainer = document.querySelector(".country_container");
const sortByName = document.querySelector("#sort-by-name");
const sortByCapital = document.querySelector("#sort-by-capital");
const sortByPopulation = document.querySelector("#sort-by-population");
const capital = document.querySelector(".capital");
const arowIcon = document.querySelector("#arow-icon");
const arowIcon2 = document.querySelector("#arow-icon2");
const arowIcon3 = document.querySelector("#arow-icon3");
let startWithAnyWord;
let serchWord;
let getCapital;

const url = "https://restcountries.eu/rest/v2/all";

// fatching the API
fetch(url)
    .then(response => response.json())
    .then(countries => {
        // assign dispay country function
        displayCountry(countries)

        // search by starting word
        inputCountryName.addEventListener("input", function (evt) {
            countryContainer.innerHTML = "";
            let inputName = this.value;
            startWithAnyWord = countries.filter(country =>
                country.name.toLowerCase().startsWith(inputName.toLowerCase()) || country.capital.toLowerCase().startsWith(inputName.toLowerCase())
            )
            displayCountry(startWithAnyWord);

        });

        sortByName.addEventListener("click", function () {
            countryContainer.innerHTML = ''
            sortByName.classList.add('button-active')
            sortByCapital.classList.remove('button-active')
            sortByPopulation.classList.remove('button-active')
            rotateItem(arowIcon)

            if (startWithAnyWord == null) {
                displayCountry(countries.reverse());
            } else {
                displayCountry(startWithAnyWord.reverse());
            }
            // console.log('===sortByName===')
        })

        sortByCapital.addEventListener("click", function () {
            countryContainer.innerHTML = ''
            sortByName.classList.remove('button-active')
            sortByCapital.classList.add('button-active')
            sortByPopulation.classList.remove('button-active')
            rotateItem(arowIcon2)

            if (startWithAnyWord == null) {
                displayCountry(countries.reverse());
            } else {
                displayCountry(startWithAnyWord.reverse());
            }

        })
        sortByPopulation.addEventListener("click", function () {

            countryContainer.innerHTML = ''
            sortByName.classList.remove('button-active')
            sortByCapital.classList.remove('button-active')
            sortByPopulation.classList.add('button-active')
            rotateItem(arowIcon3)

            if (startWithAnyWord == null) {
                displayCountry(countries.reverse());
            } else {
                displayCountry(startWithAnyWord.reverse());
            }
        })
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
    // length of arry function
    const arrylength = (array, element) => {
        numberOfCountries.textContent = array.length;
    };
    arrylength(countries)

    // compare capital
    // function compareCapital(a, b) {
    //     if (a.capital > b.capital) return 1;
    //     if (a.capital == b.capital) return 0;
    //     if (a.capital < b.capital) return -1;
    // }
    // countries.sort(compareCapital);
}

// rotate function
const rotateItem = (item) => {
    if (item.style.transform == "rotate(180deg)") {
        item.style.transform = "rotate(0deg)";
        item.style.fill = "#ffffff";
    } else {
        item.style.transform = "rotate(180deg)";
        item.style.fill = "#ffffff";
    }
};