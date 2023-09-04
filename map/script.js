Latitude = getParam('a');
Longitude = getParam('o');
var mymap = L.map('mapid').setView([Latitude, Longitude], 18);
L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
  maxZoom: 19,
  attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>"
}).addTo(mymap);
var marker = L.marker([Latitude, Longitude]).addTo(mymap);
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
