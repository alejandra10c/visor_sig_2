// Crear el mapa centrado en la Plaza de Bolívar
const mapa = L.map('mapa').setView([4.5981, -74.0760], 17);

// Capa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 19
}).addTo(mapa);

// Marcador de referencia
L.marker([4.5981, -74.0760]).addTo(mapa)
    .bindPopup('Plaza de Bolívar, Bogotá')
    .openPopup();

// Cargar el archivo GPX
const recorrido = new L.GPX('recorrido.gpx', {
    async: true,
    marker_options: {
        startIconUrl: 'https://www.openstreetmap.org/assets/marker-icon-green.png',
        endIconUrl: 'https://www.openstreetmap.org/assets/marker-icon-red.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
    },
    polyline_options: {
        color: 'blue',
        weight: 4,
        opacity: 0.75
    }
}).on('loaded', function(e) {
    mapa.fitBounds(e.target.getBounds());
}).addTo(mapa);
