import { useEffect, useState } from "react";

export default function HistoryList({ asin }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!asin) return;

    (async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/optimize/history/${asin}`
        );
        const data = await res.json();
        setHistory(data);
      } finally {
        setLoading(false);
      }
    })();
  }, [asin]);

  if (!asin) return null;

  return (
    <div className="mt-8">
      <h2 className="font-bold mb-3">
        Optimization History for ASIN {asin}
      </h2>

      {loading && <p className="text-sm">Loading history...</p>}

      {!loading && history.length === 0 && (
        <p className="text-sm">No history yet.</p>
      )}

      <ul className="space-y-2">
        {history.map((item) => (
          <li key={item.id} className="border rounded p-3 bg-white text-sm">
            <div className="flex justify-between">
              <span>Run ID: {item.id}</span>
              <span>
                {new Date(item.created_at).toLocaleString()}
              </span>
            </div>
            <p className="mt-1">
              <span className="font-semibold">Optimized title: </span>
              {item.optimized.title.slice(0, 80)}...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
