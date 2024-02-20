function initMap() {
    var ubicacion = {lat: -36.8683500, lng: -60.2608430}; // Coordenadas del lugar
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: ubicacion});
    var marker = new google.maps.Marker({position: ubicacion, map: map});
}