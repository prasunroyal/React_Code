// Player.js
import React, { useState, useEffect } from 'react';

const Player = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentSong = songs[currentSongIndex];

  const audio = new Audio();

  useEffect(() => {
    if (isPlaying) {
      audio.src = currentSong;
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSong]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    setProgress((currentTime / duration) * 100);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
    setProgress(e.target.value);
  };

  return (
    <div>
      <h3>Player</h3>
      <audio onTimeUpdate={handleTimeUpdate} />
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        <input
          type="range"
          value={progress}
          onChange={handleSeek}
          step="0.01"
        />
      </div>
    </div>
  );
};

export default Player;
