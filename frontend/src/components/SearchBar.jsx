/**
 * SearchBar component
 * Allows users to enter a search term and select media type.
 */
function SearchBar({
  term,
  media,
  setTerm,
  setMedia,
  onSearch,
  loading
}) {
  return (
    <div className="card shadow-sm search-card">
      <div className="card-body">
        <h2 className="card-title mb-3">
          Search iTunes Store & Apple Books
        </h2>

        <form onSubmit={onSearch} className="row g-3">
          <div className="col-md-7">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search for music, movies, books..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <select
              className="form-select form-select-lg"
              value={media}
              onChange={(e) => setMedia(e.target.value)}
            >
              <option value="all">All</option>
              <option value="movie">Movie</option>
              <option value="podcast">Podcast</option>
              <option value="music">Music</option>
              <option value="audiobook">Audiobook</option>
              <option value="shortFilm">Short Film</option>
              <option value="tvShow">TV Show</option>
              <option value="software">Software</option>
              <option value="ebook">Ebook</option>
            </select>
          </div>

          <div className="col-md-2">
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;