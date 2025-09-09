

// export const API_KEY = "23c51479aa5d10a7fbabc6e1c6697475";
export const BASE_PATH = "https://api.themoviedb.org/3";

export function makeImagePath(id, format) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}

export function makeVideoPath(id) {
  return `http://api.themoviedb.org/3/movie/${id}/videos`;
}
