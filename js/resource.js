let arryString = arrayName.toString()
// Declarations and initializations
const numberOfCountries = document.querySelector('#number-of-countries')
const countryContainer = document.querySelector('#country-container')
const btnSort = document.querySelector('#btn_sort')
const inputCountryName = document.querySelector('#input_country_name')



// Number of Countries
let totalCountries = `${countries.length} numbers of countries exist in the world`
numberOfCountries.append(totalCountries)

const getCountryName = (countries) => {
    for (country of countries) {
        let countryName = document.createElement('div')
        let cName = document.createElement('p')

        countryName.setAttribute('class', 'country-container__item')
        cName.textContent = country

        countryName.append(cName)
        countryContainer.appendChild(countryName)
    }
}
getCountryName(countries)

btnSort.addEventListener('click', function () {
    countryContainer.innerHTML = ''
    getCountryName(countries.reverse())
    console.log('print')
})

inputCountryName.addEventListener('input', function (evt) {
    countryContainer.innerHTML = ''
    let inputName = this.value
    let filterCountries = countries.startsWith(inputName)
    if (filterCountries == true) {
        let printIndexNum = countries.indexOf(inputName)
        console.log(printIndexNum)
        getCountryName([countries[printIndexNum]])
    }
})

inputCountryName.addEventListener("input", function (evt) {
    countryContainer.innerHTML = "";
    let inputName = this.value;
    let filterCountries = countries.includes(inputName);
    if (filterCountries == true) {
        let printIndexNum = countries.indexOf(inputName);
        console.log(printIndexNum);
        getCountryName([countries[printIndexNum]]);
    }
});

let arrayName = ["Banana", "Orange", "Apple", "Mango"];
let arryString = arrayName.toString()
console.log(arryString)