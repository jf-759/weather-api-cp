function Filters({ query, setQuery, tempFilter, setTempFilter }) {
    return (
        <div className="bg-white p-4 rounded shadow flex gap-3 mb-4 text-center">
            <input
                className="border px-3 py-2 rounded flex-1"
                placeholder="Search city..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <select
                className="border px-3 py-2 rounded"
                value={tempFilter}
                onChange={(e) => setTempFilter(e.target.value)}
            >
                <option value="all">All Temps</option>
                <option value="<60">Below 60°F</option>
                <option value="60-80">60°F - 80°F</option>
                <option value=">80">Above 80°F</option>
            </select>
        </div>
    )
}

export default Filters