import { Link } from "react-router-dom";

function WeatherTable({ data, loading, error }) {
  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (data.length === 0) return <div>No cities match.</div>;

  return (
    <div className="bg-white rounded shadow">
      <div className="flex p-3 font-semibold border-b">
        <div className="flex-1">City</div>
        <div className="w-32 text-right">Temp</div>
        <div className="w-32 text-center">Weather</div>
        <div className="w-24 text-center">Humidity</div>
      </div>

      {data.map(c => (
        <div 
          key={c.city_name} 
          className="flex p-3 border-b hover:bg-blue-50 cursor-pointer"
        >
          <div className="flex-1 text-blue-600 underline">
            <Link to={`/city/${c.city_name}`}>
              {c.city_name}
            </Link>
          </div>

          <div className="w-32 text-right">{c.temp}°F</div>
          <div className="w-32 text-center">{c.weather.description}</div>
          <div className="w-24 text-center">{c.rh}%</div>
        </div>
      ))}
    </div>
  );
}

export default WeatherTable;
