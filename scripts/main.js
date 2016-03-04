var map;
var latlng;
var panorama;

function initMap() {
    var mapOptions = {
      position: latlng,
      pov: {
        heading: 34,
        pitch: 10
      }
    }
    // Create a map object and define it
    /*
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 10
    });
    */
   
    // Create a geocoder object
    var geocoder = new google.maps.Geocoder();

    // Use the geocoder object to locate the inputed location
    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });

    // Create a panorama streetview object and define it using mapOptions
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
        position: latlng,
        pov: {
            heading: 270,
            pitch: 0
        },
        visible: true,
        addressControl: false
    });
}

function geocodeAddress(geocoder, resultsMap) {
    
    var address = document.getElementById('address').value;
    
    geocoder.geocode({'address': address}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            /*
            resultsMap.setCenter(results[0].geometry.location);
            
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
            */
            latlng = results[0].geometry.location;
            window.alert(latlng);
            var panorama = new google.maps.StreetViewPanorama(
                document.getElementById('pano'), {
                    position: latlng,
                    pov: {
                        heading: 270,
                        pitch: 0
                    },
                    visible: true,
                    addressControl: false,
                    linksControl: false
            });
        } 
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function display_latlng() {
    if (typeof latlng !== 'undefined') {
        window.alert(latlng)
    }
    else {
        window.alert("Please Geocode the address first.")
    }
}