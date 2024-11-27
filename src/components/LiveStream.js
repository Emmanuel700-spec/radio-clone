import React from "react";
import PropTypes from "prop-types"; // For prop validation
import "./LiveStream.css";

function LiveStream({ setCurrentShow }) {
  const liveShows = [
    {
      id: 1,
      title: "Radio 1 Anthems",
      artist: "Bruno Mars, Fergie, Avicii and more",
      trackUrl: "/music.mp3",
      imageUrl: "/morning.png",
      duration: "120 mins",
    },
    {
      id: 2,
      title: "BBC Radio 2",
      artist: "Live Stream",
      trackUrl: "/music.mp3",
      imageUrl: "news.png",
      duration: "90 mins",
    },
    {
      id: 3,
      title: "BBC Radio 3",
      artist: "Live Stream",
      trackUrl: "song.mp3",
      imageUrl: "news.png",
      duration: "150 mins",
    },
  ];

  const handleShowClick = (show) => {
    if (typeof setCurrentShow === "function") {
      setCurrentShow(show);
    } else {
      console.error("setCurrentShow is not a function. Please check the prop passed to LiveStream.");
    }
  };

  return (
    <div className="live-stream">
      <h3>Live Streams</h3>
      <div className="live-stream-cards">
        {liveShows.map((show) => (
          <div
            key={show.id}
            className="stream-card"
            onClick={() => handleShowClick(show)}
          >
            <img
              src={show.imageUrl}
              alt={`${show.title} Logo`}
              className="stream-logo"
            />
            <div className="stream-info">
              <h4>{show.title}</h4>
              <p>{show.artist}</p>
              <p>{show.duration}</p> {/* Display the duration */}
            </div>
            <a href="/more-episodes" className="more-episodes">More episodes</a> {/* Link to more episodes */}
          </div>
        ))}
      </div>
    </div>
  );
}

// Prop validation
LiveStream.propTypes = {
  setCurrentShow: PropTypes.func.isRequired, // Ensure a function is passed
};

export default LiveStream;
