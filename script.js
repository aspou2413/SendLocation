var mymap = L.map('mapid'); 
  L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>"
  }).addTo(mymap);
  function onLocationFound(e) {
    L.marker(e.latlng).addTo(mymap);
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    function successCallback(position){
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      document.getElementById("latitude").innerHTML = latitude;
      document.getElementById("longitude").innerHTML = longitude;
    };
    function errorCallback(error){
      alert("現在地を取得できませんでした。" + e.message);
    };
  }
  function onLocationError(e) {
    alert("現在地を取得できませんでした。" + e.message);
  }
mymap.on('locationfound', onLocationFound);
mymap.on('locationerror', onLocationError);
mymap.locate({setView: true, maxZoom: 19, timeout: 20000});
function copy() {
  var text = document.getElementById("optional").innerText;
  var area = document.createElement("textarea");
  area.textContent = text;
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
}
