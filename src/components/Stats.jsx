import React from "react"

function Stats({ weatherData, loading, error }) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mb-8 text-center">
        <p className="text-gray-600">Loading weather data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mb-8 text-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    )
  }

  if (!weatherData || weatherData.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mb-8 text-center">
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
    <div className="bg-white rounded-lg shadow p-8 mb-8">
      <h2 className="text-xl font-semibold mb-6 text-center text-gray-900">Statistics</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">Cities</p>
          <p className="text-3xl font-bold text-gray-900">{weatherData.length}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">Avg Temp</p>
          <p className="text-3xl font-bold text-gray-900">{avgTemp}°F</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">Hottest</p>
          <p className="text-3xl font-bold text-red-500">{maxTemp}°F</p>
          <p className="text-sm text-gray-600 mt-1">
            {hottestCity?.city_name || 'N/A'}
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">Coldest</p>
          <p className="text-3xl font-bold text-blue-500">{minTemp}°F</p>
          <p className="text-sm text-gray-600 mt-1">
            {coldestCity?.city_name || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Stats