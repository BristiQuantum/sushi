import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

const Map = () => {
    const position = [23.990176433526415, 90.3816065374191]
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}
        className='w-96 h-40 block leaflet-container'>
            <TileLayer
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=EkCKrafYTgga2ufDyuJq"
                className='w-96 h-96 leaflet-container block'
            />
            
        </MapContainer>
    );
};

export default Map;