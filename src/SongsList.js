// SongsList.js
import React, { useState } from 'react';
import SongList from './SongList';
import Player from './Player';

const SongsList = () => {
  const [songs, setSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage] = useState(5); // Adjust as needed

  const addSong = (newSong) => {
    setSongs([...songs, newSong]);
  };

  // Pagination
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

  return (
    <div>
      <h2>Songs Listing Page</h2>
      <SongList songs={currentSongs} addSong={addSong} />
      <Player songs={songs} />
      {/* Optional: Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(songs.length / songsPerPage) }).map(
          (_, index) => (
            <button key={index} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default SongsList;
