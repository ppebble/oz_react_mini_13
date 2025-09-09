import { useEffect, useState } from "react";
import { BASE_PATH } from "../assets/data/tmdbService";

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export function useGetMovies({ url: url, options, enabled: enabled = true }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!url || !enabled) return;
    try {
      const fetchData = async () => {
        const res = await fetch(url, {
          ...options,
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
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
export function useGetMovie({ url: url, options, enabled: enabled = true }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!url || !enabled) return;
    try {
      const fetchData = async () => {
        const res = await fetch(url, {
          ...options,
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
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

export function useSearchMovies(query, enabled = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query || !enabled) {
      setData(null);
      return;
    }

    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const queryString = new URLSearchParams({
          language: 'ko-KR',
          query: query,
          page: 1,
          include_adult: false
        }).toString();

        const url = `${BASE_PATH}/search/movie?${queryString}`;
        
        const res = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error(`검색 실패: ${res.status}`);
        }

        const result = await res.json();
        setData(result.results);
      } catch (err) {
        console.error('검색 오류:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query, enabled]);

  return { data, loading, error };
}