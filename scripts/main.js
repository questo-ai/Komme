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
  // randomizeLocation(1)
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
function show_panel(){
    document.getElementById('menu_button').onclick = hide_hamburger;
    document.getElementById('menu_drawer').style.display = 'block';
    console.log("suifhsjfsdhu");
    document.getElementById('menu_button').style.left ='30%';
    document.getElementById('menu_button').className = "is-open hamburger"
}
function hide_hamburger() {
  document.getElementById('menu_drawer').style.display = 'none';
  document.getElementById('menu_button').className = "is-closed hamburger";
  document.getElementById('menu_button').style.left ='0';
  document.getElementById('menu_button').onclick = show_panel;

}
function randomizeLocation(level) {
  var orig_lat = latlng.lat();
  var orig_lng = latlng.lng();
  var max_difference = level * 0.001;
  var rand_difference = getRandomInt(0.000001, max_difference);
  var rand_lat = latlng.lat() + max_difference;
  var rand_lng = latlng.lng() + max_difference;
  latlng.lat() = rand_lat;
  latlng.lng() = rand_lng;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function test() {
    console.log("YAY")
}
