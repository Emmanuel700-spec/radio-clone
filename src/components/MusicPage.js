import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Music.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faVolumeUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import LiveStream from './LiveStream';

function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentShow, setCurrentShow] = useState({
    title: "Your Show Name",
    artist: "Artist Name",
    trackUrl: "/music.mp3",  // Default audio source
    image: "/news.png",
  });

  const audioRef = useRef(null);

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

  const handleVolumeChange = useCallback((event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, []);

  const handleBackward = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 20);
    }
  }, []);

  const handleForward = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 20);
    }
  }, [duration]);

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

  const toggleVolumeSlider = useCallback(() => {
    setIsVolumeVisible((prev) => !prev);
  }, []);

  const updateShowDetails = useCallback((show) => {
    setCurrentShow({
      title: show.title,
      artist: show.artist,
      trackUrl: show.trackUrl,
      image: show.imageUrl,
    });
    setIsPlaying(false); // Reset play state for new audio
  }, []);

  const formatTime = useCallback((time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, []);

  return (
    <div className="home-page">
      <div className="live-player">
        <div className="now-playing">
          <img
            src={currentShow.image}
            alt="Now Playing Album Art"
            className="album-art"
          />
          <div className="track-info">
            <h6>{currentShow.title}</h6>
            <h3>{currentShow.title}</h3>
            <p>{currentShow.artist}</p>
          </div>
        </div>
        <div className="audio-player-container">
          <audio
            ref={audioRef}
            className="audio-player"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={currentShow.trackUrl} type="audio/mpeg" />
          </audio>
          <div className="music-progress">
            <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
            <input
              type="range"
              min="0"
              max={duration}
              step="0.1"
              value={currentTime}
              onChange={(e) => {
                const newTime = parseFloat(e.target.value);
                setCurrentTime(newTime);
                if (audioRef.current) {
                  audioRef.current.currentTime = newTime;
                }
              }}
              className="progress-bar"
            />
          </div>
          <div className="audio-controls">
            <div className="volume-control">
              <FontAwesomeIcon 
                icon={faVolumeUp} 
                onClick={toggleVolumeSlider}
              />
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
            <FontAwesomeIcon icon={faBackward} onClick={handleBackward} />
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} onClick={handlePlayPause} />
            <FontAwesomeIcon icon={faForward} onClick={handleForward} />
            <FontAwesomeIcon 
              icon={faExternalLinkAlt} 
              onClick={() => window.open('https://www.bbc.co.uk/sounds/player/bbc_radio_one', '_blank')} 
            />
          </div>
        </div>
      </div>
      <LiveStream setCurrentShow={updateShowDetails} />
    </div>
  );
}

export default HomePage;
