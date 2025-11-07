import { useState } from "react"
import Filters from "../Filters"
import Stats from "../Stats"
import WeatherTable from "../WeatherTable"
import TempChart from "../charts/TempChart.jsx"
import HumidityChart from "../charts/HumidityChart.jsx"

export default function Dashboard({ filtered, loading, error, query, setQuery, tempFilter, setTempFilter }) {
    const [showTempChart, setShowTempChart] = useState(true)
    const [showHumidityChart, setShowHumidityChart] = useState(true)

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-center">Weather Dashboard</h1>

            <Filters 
                query={query} 
                setQuery={setQuery} 
                tempFilter={tempFilter} 
                setTempFilter={setTempFilter} 
            />

            <div className="bg-white p-6 rounded-lg shadow text-center">
                <h2 className="font-bold text-lg mb-2">Insights</h2>
                <p>Some cities like Los Angeles and Houston are consistently warmer...</p>
            </div>

            <div className="flex justify-center gap-4">
                <button onClick={() => setShowTempChart(prev => !prev)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Toggle Temp</button>
                <button onClick={() => setShowHumidityChart(prev => !prev)} className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">Toggle Humidity</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {showTempChart && <div className="bg-white p-6 rounded-lg shadow"><TempChart data={filtered} /></div>}
                {showHumidityChart && <div className="bg-white p-6 rounded-lg shadow"><HumidityChart data={filtered} /></div>}
            </div>

            <Stats weatherData={filtered} loading={loading} error={error} />
            <WeatherTable data={filtered} loading={loading} error={error} />
        </div>
    )
}
