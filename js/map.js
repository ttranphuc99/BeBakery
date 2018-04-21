function initMap() {
    var location = {lat: 10.852939, lng: 106.629545};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        maps: map,
        icon: "img/home_bakery_map_pin.png"
    });
    marker.setMap(map);
}