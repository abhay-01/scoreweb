import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  const handleConnectAccount = () => {

    navigate('/connect-accounts');
  };
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Social Score</h1>
        <p style={styles.description}>
          Welcome to Social Score! Connect your Instagram and TikTok accounts to measure your social media performance with ease.
        </p>

        <button style={styles.connectButton} onClick={handleConnectAccount}>
          Connect Accounts
        </button>


        <div style={styles.linkContainer}>
          <Link to="/terms" style={styles.link}>Terms of Service</Link>
          <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #ff9a9e, #fad0c4, #a18cd1, #fbc2eb)',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '15px',
    padding: '50px',
    maxWidth: '500px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  },
  linkContainer: {
    marginTop: '20px',
  },
  link: {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },

  connectButton: {
    backgroundColor: '#6a1b9a',
    color: '#fff',
    padding: '15px 30px',
    fontSize: '16px',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background 0.3s ease',
  },
};

export default Home;
