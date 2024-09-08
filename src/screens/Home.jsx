// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseconfig'; 
import '../styles/Home.css';
const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      // Assuming signOut function is available from auth
      await auth.signOut(); 
      navigate('/sign-in'); // Redirect to Sign In page
    } catch (error) {
      alert('Error signing out: ' + error.message);
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to Your Dashboard</h1>
      <button className="home-button" onClick={() => navigate('/connect-accounts')}>
        Connect Accounts
      </button>
      <button className="home-button" onClick={() => navigate('/metrics-display')}>
        View Metrics
      </button>
      <button className="sign-out-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Home;
