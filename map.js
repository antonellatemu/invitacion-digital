function initMap() {
    // Coordenadas del lugar
    var placeCoords = {lat: 40.7128, lng: -74.0060}; // Por ejemplo, Nueva York

    // Opciones del mapa
    var mapOptions = {
        center: placeCoords,
        zoom: 15 // Ajusta el nivel de zoom según sea necesario
    };

    // Crear el mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Marcador en el mapa
    var marker = new google.maps.Marker({
        position: placeCoords,
        map: map,
        title: 'Lugar de la fiesta' // Título del marcador
    });
}