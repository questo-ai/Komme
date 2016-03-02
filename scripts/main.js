var latitude;
var longitude;
var place = {lat: latitude, lng: longitude};

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var place = new google.maps.Marker({
                map: resultsMap
                , position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function initWindow() {
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('map'), {
        position: place,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
var geocoder = new google.maps.Geocoder();

document.getElementById('submit').addEventListener('click', function () {
    geocodeAddress(geocoder, map);
});