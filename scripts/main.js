
var resultlocation = {lat: 0, lng: 0};
var map;

function initWindow() {
    // new google.maps.Geocoder()
    // var mapOptions = {
    //   position: resultlocation,
    //   pov: {
    //     heading: 34,
    //     pitch: 10
    //   }
    // }
    // var panorama = new google.maps.StreetViewPanorama(document.getElementById('map'), mapOptions);
    var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 8,
         center: {lat: -34.397, lng: 150.644}
       });
       var geocoder = new google.maps.Geocoder();

       document.getElementById('submit').addEventListener('click', function() {
         geocodeAddress(geocoder, map);

       });
}

function geocodeAddress(geocoder, resultlocation) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            window.
            resultsMap.setCenter(results[0].geometry.location);
            var latlng[] = results[0].geometry.location;
            window.alert(latlng[])
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}


document.getElementById('submit').addEventListener('click', function () {
    geocodeAddress(geocoder, map);
});
