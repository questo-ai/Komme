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
    document.getElementById('submit').addEventListener('click', function(event) {
        geocodeAddress(geocoder, map);
    });

    // Insert loading stuff here if needed
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

                //create StreetViewService object to find the nearest StreetViewPanorama within a radius
                var sv = new google.maps.StreetViewService();
            sv.getPanorama({location: latlng, radius: 500}, processSVData);

        }
        else {
            error.innerHTML = ('Geocode was not successful for the following reason: ' + status);
            document.getElementById('floating-panel').style.display = 'block';


        }
    });
}
function processSVData(data, status) {
  if (status === google.maps.StreetViewStatus.OK) {
    var latlng = data.location.latLng
    console.log(latlng);
    create_panorama(latlng);
  } else {
    error.innerHTML = ('Street View data not found for this location.');
    document.getElementById('floating-panel').style.display = 'block';

  }
}
function display_latlng() {
    if (typeof latlng !== 'undefined') {
        console.log(latlng)
    }
    else {
        error.innerHTML = ("Please Geocode the address first.");
        document.getElementById('floating-panel').style.display = 'block';

    }
}

function create_panorama(coordinates) {
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            position: coordinates,
            pov: {
                heading: 270,
                pitch: 0,
            },
            visible: true,
            addressControl: false,
            linksControl: false
            });
}
function hide_panel(id){
    document.getElementById(id).style.display = 'none';
}

function test() {
    console.log("YAY")
}
