import React, { useState, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faVolumeUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './PopOutPlayer.css';

function PopOutPlayer({ currentShow, setCurrentShow }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  
  const audioRef = useRef(null);
  const popOutRef = useRef(null);

  // Function to play/pause audio
  const handlePlayPause = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error("Audio play error: ", error));
      }
      setIsPlaying((prev) => !prev);
    }
  }, [isPlaying]);

  // Function to change volume
  const handleVolumeChange = useCallback((event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, []);

  // Update time progress
  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }, []);

  // Toggle volume slider visibility
  const toggleVolumeSlider = useCallback(() => {
    setIsVolumeVisible((prev) => !prev);
  }, []);

  // Function to format time
  const formatTime = useCallback((time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, []);

  // Handle pop-out drag
  const handleDrag = useCallback((e) => {
    const popOut = popOutRef.current;
    popOut.style.position = 'absolute';
    popOut.style.left = `${e.clientX}px`;
    popOut.style.top = `${e.clientY}px`;
  }, []);

  return (
    <div 
      className="pop-out-player"
      ref={popOutRef}
      onMouseMove={handleDrag}
    >
      <div className="pop-out-header">
        <h3>Now Playing: {currentShow.title}</h3>
        <FontAwesomeIcon icon={faExternalLinkAlt} onClick={() => window.open(currentShow.trackUrl, '_blank')} />
      </div>
      <div className="pop-out-content">
        <img
          src={currentShow.image}
          alt="Now Playing"
          className="pop-out-album-art"
        />
        <audio
          ref={audioRef}
          className="audio-player"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src={currentShow.trackUrl} type="audio/mpeg" />
        </audio>
        <div className="audio-controls">
          <FontAwesomeIcon icon={faBackward} onClick={() => setCurrentTime(Math.max(0, currentTime - 20))} />
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} onClick={handlePlayPause} />
          <FontAwesomeIcon icon={faForward} onClick={() => setCurrentTime(Math.min(duration, currentTime + 20))} />
          <div className="volume-control">
            <FontAwesomeIcon icon={faVolumeUp} onClick={toggleVolumeSlider} />
            {isVolumeVisible && (
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopOutPlayer;
