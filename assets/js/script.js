var topicInput = document.querySelector('#topicInp');
var specifInput = document.querySelector('#topicInp2');
var resultEl = document.querySelector('.results');

var searchInput = function(event){
    event.preventDefault();

    var item = resultEl.value.trim();
    var type = specifInput.value;
    var apiURL = 'http://www/loc.gov/' + type + '/?q=' + item + '&fo-json';
    console.log(apiURL);

    fetch(apiURL).then(function (response){
        console.log(response.ok);
            if(response.ok){
                return response.json();
            } else {
                console.log('Error: ' + response.statusText);
            }
    })

    .then(function (data) {
        console.log('data');
    })
};