<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVLEc9NZ1OgiYLrN_M7yEg5DYZo5dM8LE&callback=initialize"></script>

function initialize() {
  var fenway = {lat: 42.345573, lng: -71.098326};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: fenway,
    zoom: 14
  });
  var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
  map.setStreetView(panorama);
}
function initialize() {
        var fenway = {lat: 42.345573, lng: -71.098326};
        var geocoder = new google.maps.Geocoder();
        var map = new google.maps.Map(document.getElementById('map'), {
          var mapOptions = {
            zoom: 8,
            center: latlng
          }
      }
    }
  function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
