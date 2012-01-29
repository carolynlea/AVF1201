function run() {
    var win = function(position) {         // Grab coordinates object from the Position object passed into success callback.
        var coords = position.coords;
        // Call for static google maps data 
        var url = "http://maps.google.com/maps/api/staticmap?center=" + coords.latitude + "," + coords.longitude + "&zoom=13&size=780x1024&maptype=roadmap&key=AIzaSyDx0-46NjFfk1cpKYGZX_jD2S8AQlcF6Gc&sensor=true";
        document.getElementById('map').setAttribute('src',url);
    };
    var fail = function(e) {
        alert('Can\'t retrieve position.\nError: ' + e);
    };
    navigator.geolocation.getCurrentPosition(win, fail);
}