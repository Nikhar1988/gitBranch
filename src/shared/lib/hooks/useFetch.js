import { useState, useEffect } from "react";

const useFetch = (url, options) => {

  const [status, setStatus] = useState({
    loading: true,
    data: undefined,
    error: undefined
  });

  function fetchRequest(url, options) {
    setStatus({ loading: true });
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setStatus({ loading: false, data: res });
      })
      .catch((error) => {
        setStatus({ loading: false, error });
      });
  }

  useEffect(() => {
    if (url) {
      fetchRequest(url, options);
    }
  }, []);

  return { ...status, fetchRequest };
}

export default useFetch