import React, { useEffect, useState, useMemo } from "react"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./components/pages/Dashboard"
import CityDetails from "./components/pages/CityDetails"
import Layout from "./components/Layout"

const MOCK_DATA = [ 
  { city_name: "Los Angeles", 
  temp: 72, 
  weather: { description: "Clear sky" }, 
  wind_spd: 5.2, 
  rh: 65 
  }, 
  { city_name: "New York", 
    temp: 58, 
    weather: { description: "Partly cloudy" }, 
    wind_spd: 8.1, rh: 72 
  }, 
  { city_name: "Chicago", 
    temp: 45, 
    weather: { description: "Overcast" }, 
    wind_spd: 12.3, rh: 68 
  }, 
  { city_name: "Houston", 
    temp: 82, 
    weather: { description: "Humid" }, 
    wind_spd: 6.4, rh: 85 
  }, 
  { city_name: "Phoenix", 
    temp: 95, 
    weather: { description: "Sunny" }, 
    wind_spd: 3.2, rh: 22 
  }, 
  { city_name: "San Diego",
    temp: 70, 
    weather: { description: "Clear" }, 
    wind_spd: 4.8, rh: 60 
  }, 
  { city_name: "San Jose", 
    temp: 68, 
    weather: { description: "Fog" }, 
    wind_spd: 7.1, rh: 75 
  }, 
  { city_name: "Dallas", 
    temp: 78, 
    weather: { description: "Partly cloudy" }, 
    wind_spd: 9.2, rh: 58 
  }, 
  { city_name: "Austin", 
    temp: 85, 
    weather: { description: "Hot" }, 
    wind_spd: 5.5, rh: 62 
  }, 
  { city_name: "San Francisco", 
    temp: 62, 
    weather: { description: "Fog" }, 
    wind_spd: 11.2, rh: 80 
  }, 
  { city_name: "Seattle", 
    temp: 55, 
    weather: { description: "Rainy" }, 
    wind_spd: 8.7, rh: 88 
  }, 
  { city_name: "Miami", 
    temp: 88, 
    weather: { description: "Humid" }, 
    wind_spd: 7.9, rh: 82 
  } 
]
const USE_MOCK_DATA = true

function App() {
  const [weatherData, setWeatherData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState("")
  const [tempFilter, setTempFilter] = useState("all")

  const API_KEY = import.meta.env.VITE_WEATHERBIT_KEY

  useEffect(() => {
    let cancelled = false

    async function fetchWeather() {
      if (USE_MOCK_DATA) {
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 500))
        if (!cancelled) {
          setWeatherData(MOCK_DATA)
          setLoading(false)
        }
        return
      }

      setLoading(true)
      setError(null)
      const results = []
      const errors = []

      for (const city of ["Los Angeles", "New York", "Chicago"]) {
        if (cancelled) break

        try {
          const res = await fetch(
            `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`
          )

          if (!res.ok) {
            errors.push(`${city}: ${res.status}`)
            continue
          }

          const json = await res.json()
          if (json.data && json.data[0]) results.push(json.data[0])

          await new Promise(resolve => setTimeout(resolve, 2000))
        } catch (err) {
          errors.push(`${city}: ${err.message}`)
        }
      }

      if (!cancelled) {
        if (errors.length > 0) setError(errors.join("; "))
        setWeatherData(results)
        setLoading(false)
      }
    }

    fetchWeather()
    return () => { cancelled = true }

  }, [API_KEY])

  const filtered = useMemo(() => {
    return weatherData
      .filter(c => c.city_name.toLowerCase().includes(query.toLowerCase()))
      .filter(c => {
        if (tempFilter === "all") return true
        if (tempFilter === "<60") return c.temp < 60
        if (tempFilter === "60-80") return c.temp >= 60 && c.temp <= 80
        if (tempFilter === ">80") return c.temp > 80
        return true
      })
  }, [query, tempFilter, weatherData])


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route 
          path="/" 
          element={
            <Dashboard 
              filtered={filtered}
              loading={loading}
              error={error}
              query={query}
              setQuery={setQuery}
              tempFilter={tempFilter}
              setTempFilter={setTempFilter}
            />
          } 
        />

        <Route 
          path="/city/:name" 
          element={<CityDetails data={weatherData} />} 
        />
      </Route>
    </Routes>
  )
}

export default App
