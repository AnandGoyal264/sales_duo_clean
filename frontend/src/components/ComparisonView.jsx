export default function ComparisonView({ original, optimized }) {
  if (!original || !optimized) return null;

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-4">
      {/* Original */}
      <div className="border rounded p-4 bg-white">
        <h2 className="font-bold mb-3">Original Listing</h2>

        <h3 className="font-semibold">Title</h3>
        <p className="mb-3">{original.title}</p>

        <h3 className="font-semibold">Bullet Points</h3>
        <ul className="list-disc list-inside mb-3">
          {original.bullets?.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <h3 className="font-semibold">Description</h3>
        <p className="whitespace-pre-line">{original.description}</p>
      </div>

      {/* Optimized */}
      <div className="border rounded p-4 bg-gray-50">
        <h2 className="font-bold mb-3">Optimized Listing</h2>

        <h3 className="font-semibold">Title</h3>
        <p className="mb-3">{optimized.title}</p>

        <h3 className="font-semibold">Bullet Points</h3>
        <ul className="list-disc list-inside mb-3">
          {optimized.bullets?.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <h3 className="font-semibold">Description</h3>
        <p className="whitespace-pre-line mb-3">
          {optimized.description}
        </p>

        {optimized.keywords && optimized.keywords.length > 0 && (
          <>
            <h3 className="font-semibold">Suggested Keywords</h3>
            <p>{optimized.keywords.join(", ")}</p>
          </>
        )}
      </div>
    </div>
  );
}
