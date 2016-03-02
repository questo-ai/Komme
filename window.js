@import zone.js
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8
        , center: {
            lat: latitude
            , lng: longitude
        }
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function () {
        geocodeAddress(geocoder, map);
    });
}

var panorama = new google.maps.StreetViewPanorama(
    document.getElementById('pano'), {
        position: place
        , pov: {
            heading: 34
            , pitch: 10
        }
    });
map.setStreetView(panorama);