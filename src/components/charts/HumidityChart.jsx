import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"

export default function HumidityChart({ data }) {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-2">Humidity Levels</h2>
            <LineChart width={300} height={250} data={data}>
                <XAxis dataKey="city_name" />
                <YAxis />
                <Tooltip />
                <Line dataKey="rh" />
            </LineChart>
        </div>
    )
}