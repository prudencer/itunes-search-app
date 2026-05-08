/**
 * iTunes API service
 * Responsible for communicating with Apple iTunes API
 */

/**
 * Fetch and format iTunes results
 *
 * @param {string} term Search term
 * @param {string} media Media type
 * @returns {Array} Formatted results
 */
export async function fetchITunesResults(term, media) {
  // Construct iTunes API URL
  const apiUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(
    term
  )}&media=${encodeURIComponent(media)}&limit=25`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  // Format results before sending to frontend
  return data.results.map((item) => ({
    id: item.trackId || item.collectionId || item.artistId,
    title:
      item.trackName ||
      item.collectionName ||
      item.artistName ||
      "Unknown Title",
    artist: item.artistName || "Unknown Artist",
    artwork:
      item.artworkUrl100?.replace("100x100bb", "300x300bb") ||
      "https://via.placeholder.com/300",
    releaseDate: item.releaseDate
      ? new Date(item.releaseDate).toDateString()
      : "Unknown Date",
    type: item.kind || item.wrapperType || media,
    previewUrl: item.previewUrl || null,
    link: item.trackViewUrl || item.collectionViewUrl || item.artistViewUrl || "#"
  }));
}