import React from 'react';

const ConnectAccounts = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Connect Your Accounts</h1>
        <p style={styles.description}>
          Connect your Instagram and TikTok accounts to start tracking your social media performance.
        </p>

        <div style={styles.buttonsContainer}>
          <button style={styles.connectButton}>Connect Instagram</button>
          <button style={styles.connectButton}>Connect TikTok</button>
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
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '20px',
  },
  connectButton: {
    backgroundColor: '#6a1b9a',
    color: '#fff',
    padding: '15px 30px',
    fontSize: '16px',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background 0.3s ease',
  },
  connectButtonHover: {
    backgroundColor: '#4a0d73',
  },
};

export default ConnectAccounts;
