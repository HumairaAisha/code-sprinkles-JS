const countryName = document.getElementById('country-name')
const autocomplete = document.querySelector('#autocomplete');
const flag = document.getElementById('flag');
const nameResult = document.getElementById('name');
const continent = document.getElementById('continent');
const capital = document.getElementById('capital');
const population = document.getElementById('population');
const currency = document.getElementById('currency');
const languages = document.getElementById('languages');
const errorMsg = document.getElementById('errorMsg')
const btnSearch = document.getElementById('search-name')



let countryFinder = [];

async function country() {
  const url = "https://restcountries.com/v3.1/all?fields=name,flags,capital,continents,population,currencies,languages";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      errorMsg.textContent = 'Cannot load countries';
      console.log(`Response status: ${response.status}`);
      return;
    }
    //parse response to json 
    const json = await response.json();
    //console.log('Response:', response);
    
    countryFinder = json 
    errorMsg.textContent = '';
    console.log('Country counts', countryFinder.length);
    showFirstCountry();
    //console.log(countryFinder);
    //console.log(countryFinder[0].name.common);
    
    

  } catch (error) {
   //handle errors
   errorMsg.textContent = 'Error loading page'
    console.log('Error', error.message || 'Unknown Error');
  }
  
}

function buttonSearch() {
   btnSearch.addEventListener('click', () => {
      const countrySearch = countryName.value.trim().toLowerCase();

      if (countrySearch === '') {
         errorMsg.textContent = "Enter a country name";
         showFirstCountry();
         return;
      }

      const countryFound = countryFinder.find(country => 
         country.name.common.toLowerCase().includes(countrySearch)
      );

      if (!countryFound) {
         errorMsg.textContent = 'No Country Found. Try again';
         showFirstCountry();
         return;
      }

      showCountry(countryFound);
      countryName.value = '';
      errorMsg.textContent = '';
   });
}

   function showCountry(country) {
      nameResult.textContent = `Country Name: ${country.name.common}`
      continent.textContent = `Continent: ${country.continents[0]  || 'Not Available'}`
      capital.textContent =`Capital: ${country.capital[0] || 'Not Available'}`
      population.textContent = `Population: ${country.population || "Not Available"}`
      currency.textContent = `Currency: ${Object.values(country.currencies)[0].name || 'Not Available'}`
      languages.textContent = `Language: ${Object.values(country.languages).join(', ') || 'Not Available'}`
      flag.src = country.flags.png
      flag.alt = "Flag of" + (country.name.common || "Not Available")
      errorMsg.textContent = ''
   }

   function showFirstCountry() {
      if (countryFinder.length === 0) {
         errorMsg.textContent = 'No countries loaded'
         showCountry()
         return
      } 
      //showCountry(countryFinder[0])
      //console.log(countryFinder[2]);
      
      
      //console.log(countryFinder[0].capital);
      
   }
document.addEventListener('DOMContentLoaded', () => {
   country();
   buttonSearch();

});


