import { useEffect, useState } from "react";

export const API_KEY = "23c51479aa5d10a7fbabc6e1c6697475";
export const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies({ url: url, options, enabled: enabled = true }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!url || !enabled) return;
    try {
      const fetchData = async () => {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error(`Fetch 실패: ${res.status}`);
        }
        const result = await res.json();
        setData(result.results);
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [enabled, url, options]);

  return { data };
}
export function getMovie({ url: url, options, enabled: enabled = true }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!url || !enabled) return;
    try {
      const fetchData = async () => {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error(`Fetch 실패: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [enabled, url, options]);
  console.log(data);

  return { data };
}

export function makeImagePath(id, format) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}

export function makeVideoPath(id) {
  return `http://api.themoviedb.org/3/movie/${id}/videos`;
}
