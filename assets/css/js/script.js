var searchFieldEl = document.querySelector("#searchField");
var formatTypeEl = document.querySelector("#formatType");
var sectionEl = document.querySelector("section");

var searchSubmit = function(event) {
    event.preventDefault();

    var searchItem = searchFieldEl.value.trim();
    var searchType = formatTypeEl.value;
    var apiURL = 'https://www.loc.gov/' + searchType + '/?q=' + searchItem + '&fo=json';

    console.log(apiURL);

    fetch(apiURL).then(function (response) {
        console.log(response.ok);
        if (response.ok) {
            return response.json();
        } else {
            console.log('Error: ' + response.statusText);
        }
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log('Unable to connect to Library of Congress');
    });

    window.location.replace('./search-results.html?=' + searchItem + '&format=' + searchType);


};


sectionEl.addEventListener("submit", searchSubmit);