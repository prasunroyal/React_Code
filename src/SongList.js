// SongList.js
import React, { useState } from 'react';

const SongList = ({ songs, addSong }) => {
  const [newSong, setNewSong] = useState('');

  const handleAddSong = () => {
    if (newSong.trim() !== '') {
      addSong(newSong);
      setNewSong('');
    }
  };

  return (
    <div>
      <h3>Song List</h3>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add a new song"
          value={newSong}
          onChange={(e) => setNewSong(e.target.value)}
        />
        <button onClick={handleAddSong}>Add Song</button>
      </div>
    </div>
  );
};

export default SongList;
