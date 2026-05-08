import ResultCard from "./ResultCard";

/**
 * SearchResults component
 * Displays all search results returned from backend.
 */
function SearchResults({ results, onAddFavourite, loading }) {
  return (
    <section className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold">Search Results</h3>
        <span className="badge bg-secondary">
          {results.length} result(s)
        </span>
      </div>

      {loading && (
        <div className="alert alert-info">
          Loading results...
        </div>
      )}

      {!loading && results.length === 0 && (
        <p className="text-muted">
          No results to display yet. Try searching above.
        </p>
      )}

      <div className="row g-4">
        {results.map((item, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={`${item.id}-${index}`}>
            <ResultCard
              item={item}
              onAddFavourite={onAddFavourite}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SearchResults;