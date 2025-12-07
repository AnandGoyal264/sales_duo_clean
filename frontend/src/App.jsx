import { useState } from "react";
import AsinForm from "./components/AsinForm";
import ComparisonView from "./components/ComparisonView";
import HistoryList from "./components/HistoryList";

function App() {
  const [asin, setAsin] = useState("");
  const [original, setOriginal] = useState(null);
  const [optimized, setOptimized] = useState(null);

  const handleResult = (data) => {
    setAsin(data.asin);
    setOriginal(data.original);
    setOptimized({
      title: data.optimized.optimized_title,
      bullets: data.optimized.optimized_bullets,
      description: data.optimized.optimized_description,
      keywords: data.optimized.keywords,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 mb-4">
        <h1 className="text-xl font-bold text-center">
          SalesDuo Amazon Listing Optimizer
        </h1>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-10">
        <AsinForm onResult={handleResult} />
        <ComparisonView original={original} optimized={optimized} />
        <HistoryList asin={asin} />
      </main>
    </div>
  );
}

export default App;
