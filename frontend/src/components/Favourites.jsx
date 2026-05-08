import ResultCard from "./ResultCard";

/**
 * Favourites component
 * Displays temporary favourite items saved in React state.
 */
function Favourites({ favourites, onRemoveFavourite }) {
  return (
    <section className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold">Favourites</h3>
        <span className="badge bg-success">
          {favourites.length} saved
        </span>
      </div>

      {favourites.length === 0 ? (
        <p className="text-muted">
          No favourites added yet.
        </p>
      ) : (
        <div className="row g-4">
          {favourites.map((item, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={`${item.id}-${index}`}>
              <ResultCard
                item={item}
                isFavouriteCard={true}
                onRemoveFavourite={onRemoveFavourite}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favourites;