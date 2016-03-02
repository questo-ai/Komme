var panorama;

function initialize() {
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('street-view'), {
            position: {
                lat: 37.869260
                , lng: -122.254811
            }
            , pov: {
                heading: 165
                , pitch: 0
            }
            , zoom: 1
        });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function () {
        geocodeAddress(geocoder, map);
    });
}



//function geocodeAddress(geocoder, resultsMap) {
//    var address = document.getElementById('address').value;
//    geocoder.geocode({
//        'address': address
//    }, function (results, status) {
//        if (status === google.maps.GeocoderStatus.OK) {
//            resultsMap.setCenter(results[0].geometry.location);
//            panorama = new google.maps.StreetViewPanorama(
//                document.getElementById('street-view'), {
//                    position: {
//                        results[0].geometry.location
//                    }
//                    , pov: {
//                        heading: 165
//                        , pitch: 0
//                    }
//                    , zoom: 1
//                });
//        } else {
//            alert('Geocode was not successful for the following reason: ' + status);
//        }
//    });
//}