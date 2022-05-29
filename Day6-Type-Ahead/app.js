const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const CountryandStatelist = [];
const getlist = fetch(endpoint)
  .then(res => res.json())
  .then(data => CountryandStatelist.push(...data));

function inputEvent(e){
    const matchArray = findMatched(this.value, CountryandStatelist);
    const resultHtml = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class = "hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class = "hl">${this.value}</span>`);
        return `
        <li>
        <span class = "name">${cityName} ${stateName}</span>
        <span class = "population">${place.population} </span>
        </li>
        `;
    }).join('');
    suggestion.innerHTML = resultHtml;
}

function findMatched(word, CountryandStatelist){
    return CountryandStatelist.filter(place => {
        const regex = new RegExp(word, 'gi');
        return place.state.match(regex) || place.city.match(regex)});
    }

const search = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');
search.addEventListener('keyup', inputEvent);