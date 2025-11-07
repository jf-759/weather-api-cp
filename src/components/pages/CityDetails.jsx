import { useParams, Link } from 'react-router-dom'

export default function CityDetails({ data }) {
    const { name } = useParams()
    const city = data.find(c => c.city_name === name)

    if (!city) return <p>City not found.</p>

    return (
        <div>
            <Link to="/" className="text-blue-600 underline">← Back</Link>

            <h1 className="text-2xl font-bold mb-4">{city.city_name} Details</h1>

            <div className="bg-white p-6 rounded shadow">
                <p><strong>Temperature:</strong> {city.temp}°F</p>
                <p><strong>Weather:</strong> {city.weather.description}</p>
                <p><strong>Wind Speed</strong> {city.wind_spd} mph</p>
                <p><strong>Humidity:</strong> {city.rh}%</p>
                <p><strong>Feels Like:</strong> {city.app_temp ?? "N/A"}°F</p>
            </div>
        </div>
    )
}