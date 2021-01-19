import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    Search(defaultSearchTerm);
  }, [defaultSearchTerm]);
  const KEY = 'AIzaSyBm2QwbhvShWA_p6BzKXtmb1b-CilWZfGw';

  const Search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video',
      },
    });

    setVideos(response.data.items);
  };
  return [videos, Search];
};
export default useVideos;
