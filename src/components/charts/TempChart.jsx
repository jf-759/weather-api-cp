import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

export default function TempChart({ data }) {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold-mb-2">Temperature by City</h2>
            <BarChart width={300} height={250} data={data}>
                <XAxis dataKey="city_name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="temp" />
            </BarChart>
        </div>
    )
}