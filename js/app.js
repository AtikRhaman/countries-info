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
const graphPopulation = document.querySelector("#graph-population")
const graphCountryName = document.querySelector("#graph-country-name")
const graphWorldPopulation = document.querySelector("#graph-world-population")
// graph declaration
const graphContainer = document.querySelector("#graph_container")

let startWithAnyWord;
let serchWord;
let getCapital;
let click = true //for add event listner

const url = "https://restcountries.eu/rest/v2/all";

// fatching the API
fetch(url)
    .then(response => response.json())
    .then(countries => {
        // Defult country function
        displayCountry(countries);
        arrylength(countries, numberOfCountries);

        // Defult graph
        displayGraph(countries)

        // search by starting word
        inputCountryName.addEventListener("input", function (evt) {
            countryContainer.innerHTML = "";
            let inputName = this.value;
            startWithAnyWord = countries.filter(
                country =>
                country.name.toLowerCase().startsWith(inputName.toLowerCase()) ||
                country.capital.toLowerCase().startsWith(inputName.toLowerCase())
            );
            displayCountry(startWithAnyWord);
            arrylength(startWithAnyWord, searchInNumbers);
        });

        sortByName.addEventListener("click", function () {
            countryContainer.innerHTML = "";
            sortByName.classList.add("button-active");
            sortByCapital.classList.remove("button-active");
            sortByPopulation.classList.remove("button-active");
            rotateItem(arowIcon);

            // if (startWithAnyWord == null) {
            //     displayCountry(countries.reverse());
            // } else {
            //     displayCountry(startWithAnyWord.reverse());
            // }

            if (startWithAnyWord == null) {
                displayCountry(countries.reverse(sortByCountryFun));

            } else if (click) {
                displayCountry(startWithAnyWord.sort(sortByCountryFun));
                click = false
            } else {
                displayCountry(startWithAnyWord.reverse(sortByCountryFun));
                click = true
            }
        });

        /* sort by capital name */
        sortByCapital.addEventListener("click", function () {
            countryContainer.innerHTML = "";
            sortByName.classList.remove("button-active");
            sortByCapital.classList.add("button-active");
            sortByPopulation.classList.remove("button-active");
            rotateItem(arowIcon2);

            // sort
            if (startWithAnyWord == null || undefined) {
                displayCountry(countries.reverse(sortByCapitalFun));
                console.log('=== countries ===')

            } else if (click) {
                displayCountry(startWithAnyWord.sort(sortByCapitalFun));
                click = false
            } else {
                displayCountry(startWithAnyWord.reverse(sortByCapitalFun));
                click = true
            }
        });

        sortByPopulation.addEventListener("click", function () {
            countryContainer.innerHTML = "";
            sortByName.classList.remove("button-active");
            sortByCapital.classList.remove("button-active");
            sortByPopulation.classList.add("button-active");
            rotateItem(arowIcon3);
            // sort
            if (startWithAnyWord == null || undefined) {
                displayCountry(countries.reverse(sortByPopulationFun));
                console.log('=== countries ===')

            } else if (click) {
                displayCountry(startWithAnyWord.sort(sortByPopulationFun));
                click = false
            } else {
                displayCountry(startWithAnyWord.reverse(sortByPopulationFun));
                click = true
            }

            // if (startWithAnyWord == null) {
            //     displayCountry(countries.reverse());
            // } else {
            //     displayCountry(startWithAnyWord.reverse());
            // }
        });

        // get the world population
        // const worldPopulation = countries.reduce((sumOfPopulation, population) => sumOfPopulation + population)
        // console.log(worldPopulation)
    });

// Display the country information
const displayCountry = countries => {
    for (const country of countries) {
        let {
            flag,
            name,
            capital,
            population,
            languages,
            region
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
        let langs = languages.map(lang => lang.name);



        div.setAttribute("class", "country");
        countryFlag.src = flag;
        countryName.textContent = `${name}`;
        countrycapital.textContent = `Capital : ${capital}`;
        countryName.style.padding = "20px 0";
        countryPopulation.textContent = `Population : ${population}`;
        countryRegion.textContent = `Region : ${region}`;
        countrylanguages.textContent = `Languages : ${langs.join(", ")}`;

        div.appendChild(countryFlag);
        div.appendChild(countryName);
        div.appendChild(countrycapital);
        div.appendChild(countryPopulation);
        div.appendChild(countryRegion);
        div.appendChild(countrylanguages);

        countryContainer.appendChild(div);

    }
};

const displayGraph = countries => {
    let countryPopuGraph;
    for (const country of countries) {
        let {
            name,
            population,
        } = country;
        let countryNameGraph = document.createElement("p");
        countryPopulationGraph = document.createElement("p");

        countryNameGraph.textContent = `${name}`;
        countryPopuGraph = countryPopulationGraph.textContent = population;

        graphCountryName.appendChild(countryNameGraph)
        graphPopulation.appendChild(countryPopulationGraph)
    }
    console.log(countryPopuGraph)

    let worldPopu = 0;
    for (let i = 0; i < countries.length; i++) {
        worldPopu += countryPopuGraph
    }
    console.log(worldPopu)

    let sumOfWorldPopulation = document.createElement("p")
    sumOfWorldPopulation.textContent = `${worldPopu}`;
    graphWorldPopulation.appendChild(sumOfWorldPopulation)



};


// Arry length to display amount of Countries and serch result
const arrylength = (arr, itemtoAdd) => {
    itemtoAdd.textContent = arr.length;
};

// rotate function
const rotateItem = item => {
    if (item.style.transform == "rotate(180deg)") {
        item.style.transform = "rotate(0deg)";
        item.style.fill = "#ffffff";
    } else {
        item.style.transform = "rotate(180deg)";
        item.style.fill = "#ffffff";
    }
};
// sort Capital
const sortByCapitalFun = (a, b) => {
    if (a.capital > b.capital) return 1;
    if (a.capital == b.capital) return 0;
    if (a.capital < b.capital) return -1;
}
// sort Country
const sortByCountryFun = (a, b) => {
    if (a.name > b.name) return 1;
    if (a.name == b.name) return 0;
    if (a.name < b.name) return -1;
}
// sort population
const sortByPopulationFun = (a, b) => {
    if (a.population > b.population) return 1;
    if (a.population == b.population) return 0;
    if (a.population < b.population) return -1;
}