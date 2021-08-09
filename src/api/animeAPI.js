const API_URL = "https://api.jikan.moe/v3";

//  api.jikan.moe/v3/search/anime?q=bleach
export const getAnimeByQuery = (query) => {
  return fetch(`${API_URL}/search/anime?q=${query}`)
    .then((response) => response.json())
    .catch((error) => error);
};
