var divLocalidade = document.getElementById("localidade");
var divDesc = document.getElementById("desc");


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Castelo%20Branco,pt&appid=74ceb3b2518f00e1284ce45255274e36&units=metric&lang=pt');
ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send();

function renderHTML(data) {
    var localidade = data.name;
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;
    var iconURL = "https://raw.githubusercontent.com/drom98/Chrome_NewTab/master/assets/icons/" + icon + ".png";

    divLocalidade.insertAdjacentHTML('beforeend', localidade);
    divDesc.insertAdjacentHTML('beforeend', desc + "<img src='" + iconURL + "'>");
}
