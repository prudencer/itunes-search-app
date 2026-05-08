/**
 * ResultCard component
 * Displays one search result or favourite item.
 */
function ResultCard({
  item,
  onAddFavourite,
  onRemoveFavourite,
  isFavouriteCard = false
}) {
  return (
    <div className="card h-100 result-card shadow-sm">
      <img
        src={item.artwork}
        className="card-img-top result-image"
        alt={item.title}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>

        <p className="card-text mb-1">
          <strong>Artist:</strong> {item.artist}
        </p>

        <p className="card-text mb-1">
          <strong>Type:</strong> {item.type}
        </p>

        <p className="card-text text-muted small">
          Released: {item.releaseDate}
        </p>

        <div className="mt-auto d-flex gap-2 flex-wrap">
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-secondary btn-sm"
          >
            View
          </a>

          {item.previewUrl && (
            <a
              href={item.previewUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              Preview
            </a>
          )}

          {isFavouriteCard ? (
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onRemoveFavourite(item.id)}
            >
              Remove
            </button>
          ) : (
            <button
              className="btn btn-success btn-sm"
              onClick={() => onAddFavourite(item)}
            >
              Add Favourite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultCard;