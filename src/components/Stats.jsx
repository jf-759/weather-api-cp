import React from "react"

function Stats({ weatherData, loading, error }) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mb-6 text-center">
        <p className="text-gray-600">Loading weather data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mb-6 text-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    )
  }

  if (!weatherData || weatherData.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mb-6 text-center">
        <p className="text-gray-600">No weather data available</p>
      </div>
    )
  }

  const temps = weatherData.map(c => c.temp || 0)
  const avgTemp = (temps.reduce((sum, temp) => sum + temp, 0) / temps.length).toFixed(1)
  const maxTemp = Math.max(...temps)
  const minTemp = Math.min(...temps)

  const hottestCity = weatherData.find(c => c.temp === maxTemp)
  const coldestCity = weatherData.find(c => c.temp === minTemp)

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6 text-center">
      <h2 className="text-xl font-semibold mb-4">Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-gray-600 text-sm">Cities</p>
          <p className="text-2xl font-bold">{weatherData.length}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Avg Temp</p>
          <p className="text-2xl font-bold">{avgTemp}°F</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Hottest</p>
          <p className="text-2xl font-bold">{maxTemp}°F</p>
          <p className="text-sm text-gray-600">
            {hottestCity?.city_name || 'N/A'}
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Coldest</p>
          <p className="text-2xl font-bold">{minTemp}°F</p>
          <p className="text-sm text-gray-600">
            {coldestCity?.city_name || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Stats