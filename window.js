<<<<<<< HEAD
@import zone.js
=======
<<<<<<< Updated upstream
>>>>>>> origin/master
function initialize() {
        var location = {lat: 'latitude', lng: 'longitude'};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: fenway,
          zoom: 14
=======
var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(1.352083, 103.819836);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

  function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
>>>>>>> Stashed changes
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
  
