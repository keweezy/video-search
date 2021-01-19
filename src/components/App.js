import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
// import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
import './App.css';

const App = () => {
  const [videos, search] = useVideos('bikes');
  const [selectedVideo, setSelectedVideo] = useState(null);
  console.log(videos, search);
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <h1 style={{textAlign: 'center', padding: '3rem 0'}}>VIDEO FINDER</h1>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
