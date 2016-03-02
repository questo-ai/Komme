var resultlocation = {lat: 0, lng: 0};
var map;
var latlng;
function initMap() {
    var mapOptions = {
      position: resultlocation,
      pov: {
        heading: 34,
        pitch: 10
      }
    }
    var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), mapOptions);
    var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 8,
         center: {lat: -34.397, lng: 150.644}
       });
       var geocoder = new google.maps.Geocoder();

       document.getElementById('submit').addEventListener('click', function() {
         geocodeAddress(geocoder, map);

       });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
            latlng = results[0].geometry.location;
            window.alert(latlng);
            displaylatlng(latlng)
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
