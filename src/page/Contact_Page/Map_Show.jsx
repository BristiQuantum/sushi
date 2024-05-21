import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

const Map_Show = () => {
    const position = [23.989995095893573, 90.38161190183716]
    return (
        <div className=''>
            <MapContainer center={position} zoom={93} scrollWheelZoom={true}>
                <TileLayer
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=EkCKrafYTgga2ufDyuJq"
                  
                />

            </MapContainer>
        </div>
    );
};

export default Map_Show;