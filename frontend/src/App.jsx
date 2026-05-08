import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Favourites from "./components/Favourites";
import { getToken, searchITunes } from "./services/api";

/**
 * Main App component
 * Manages token, search results, favourites and messages.
 */
function App() {
  const [term, setTerm] = useState("");
  const [media, setMedia] = useState("all");
  const [token, setToken] = useState("");
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  /**
   * Get JWT token when app loads.
   */
  useEffect(() => {
    async function fetchToken() {
      try {
        const newToken = await getToken();
        setToken(newToken);
      } catch (error) {
        setMessage("Failed to get security token from backend.");
      }
    }

    fetchToken();
  }, []);

  /**
   * Handles search form submit.
   */
  async function handleSearch(e) {
    e.preventDefault();

    if (!term.trim()) {
      setMessage("Please enter a search term.");
      return;
    }

    if (!token) {
      setMessage("Security token not ready yet. Please try again.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const data = await searchITunes(term, media, token);
      setResults(data);

      if (data.length === 0) {
        setMessage("No results found.");
      }
    } catch (error) {
      setMessage("Search failed. Please check that the backend is running.");
    } finally {
      setLoading(false);
    }
  }

  /**
   * Adds item to favourites.
   * Prevents duplicate favourites.
   */
  function addFavourite(item) {
    const alreadyAdded = favourites.some((fav) => fav.id === item.id);

    if (alreadyAdded) {
      setMessage("This item is already in your favourites.");
      return;
    }

    setFavourites([...favourites, item]);
    setMessage("Item added to favourites.");
  }

  /**
   * Removes item from favourites.
   */
  function removeFavourite(id) {
    const updatedFavourites = favourites.filter((item) => item.id !== id);
    setFavourites(updatedFavourites);
    setMessage("Item removed from favourites.");
  }

  return (
    <div className="app-bg min-vh-100">
      <Navbar />

      <header className="hero-section text-center text-white">
        <div className="container">
          <h1 className="display-5 fw-bold">
            Discover Music, Movies, Books & More
          </h1>
          <p className="lead">
            Search the iTunes Store and Apple Books from one simple app.
          </p>
        </div>
      </header>

      <main className="container pb-5">
        <SearchBar
          term={term}
          media={media}
          setTerm={setTerm}
          setMedia={setMedia}
          onSearch={handleSearch}
          loading={loading}
        />

        {message && (
          <div className="alert alert-info mt-4">
            {message}
          </div>
        )}

        <Favourites
          favourites={favourites}
          onRemoveFavourite={removeFavourite}
        />

        <SearchResults
          results={results}
          onAddFavourite={addFavourite}
          loading={loading}
        />
      </main>
    </div>
  );
}

export default App;