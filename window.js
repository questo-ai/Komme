function initialise() {
    var location = {lat: 32.345573, lng: -71.098326};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
    });
    var panorama = new google.maps.StreetViewPanorama(
    document.getElementById('pano'), {
        position: location,
        pov: {
            heading: 34,
            pitch: 10
        }
    });
    map.setStreetView(panorama);
}