import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router and Routes
import './App.css';
import Header from './components/Header';  // Header component for navigation
import UpcomingShows from './components/UpcomingShow';  // UpcomingShows component
import Footer from './components/Footer';  // Footer component

// Additional page components (You can create these based on your needs)
import HomePage from './components/HomePage';  // Home page component
import NewsPage from './components/NewsPage';  // News page component
import SportPage from './components/SportPage';  // Sport page component
import BusinessPage from './components/BusinessPage';  // Business page component
import InnovationPage from './components/InnovationPage';  // Innovation page component
import CulturePage from './components/CulturePage';  // Culture page component
import TravelPage from './components/TravelPage';  // Travel page component
import MusicPage from './components/MusicPage';  // Music page component
import PodcastsPage from './components/PodcastsPage';  // Podcasts page component
import MySoundsPage from './components/MySoundsPage';  // My Sounds page component

function App() {
  return (
    <Router> {/* Wrap everything with Router */}
      <div className="App">
        <Header /> {/* This will be the navigation bar */}

        <main>
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/" element={<HomePage />} />  {/* HomePage */}
            <Route path="/news" element={<NewsPage />} />  {/* News page */}
            <Route path="/sport" element={<SportPage />} />  {/* Sport page */}
            <Route path="/business" element={<BusinessPage />} />  {/* Business page */}
            <Route path="/innovation" element={<InnovationPage />} />  {/* Innovation page */}
            <Route path="/culture" element={<CulturePage />} />  {/* Culture page */}
            <Route path="/travel" element={<TravelPage />} />  {/* Travel page */}
            <Route path="/music" element={<MusicPage />} />  {/* Music page */}
            <Route path="/podcasts" element={<PodcastsPage />} />  {/* Podcasts page */}
            <Route path="/my-sounds" element={<MySoundsPage />} />  {/* My Sounds page */}
            <Route path="/upcoming-shows" element={<UpcomingShows />} />  {/* Upcoming Shows page */}
          </Routes>


          <UpcomingShows /> {/* Similarly, you can choose when to show this */}
        </main>

        <Footer /> {/* Footer of the page */}
      </div>
    </Router>
  );
}

export default App;
