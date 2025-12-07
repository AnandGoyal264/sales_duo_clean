import { useState } from "react";

export default function AsinForm({ onResult }) {
  const [asin, setAsin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!asin.trim()) {
      setError("Please enter an ASIN");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/optimize`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ asin }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      onResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-md mx-auto my-6"
    >
      <label className="font-semibold">Enter ASIN</label>
      <input
        className="border rounded px-3 py-2"
        value={asin}
        onChange={(e) => setAsin(e.target.value)}
        placeholder="e.g. B07H65KP63"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white rounded px-4 py-2 disabled:opacity-60"
      >
        {loading ? "Optimizing..." : "Optimize Listing"}
      </button>
    </form>
  );
}
