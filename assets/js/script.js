var topicInput = document.querySelector('#topicInp');
var specifInput = document.querySelector('#topicInp2');
var resultEl = document.querySelector('.results');
var btn = document.querySelector('#submit');

var searchInput = function(event){
    event.preventDefault();

    var item = topicInput.value;
    console.log(item);
    var type = specifInput.value;
    console.log(type);
    var api = 'https://www.loc.gov/' + type + '/?q=' + item + '&fo=json';
    console.log(api);

    fetch(api).then(function (response){
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
    .catch(function (error){
        console.log('Unable to connect to Library of Congress');
    })
};

btn.addEventListener('submit', searchInput);