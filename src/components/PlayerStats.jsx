import React, { useState } from 'react';
import './PlayerStats.css';

const PlayerStats = () => {
  const [playerName, setPlayerName] = useState('');
  const [playerStats, setPlayerStats] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch(`http://localhost:8080/api/v1/players/${playerName}`);
      if (!response.ok) {
        throw new Error('Player not found');
      }
      const stats = await response.json();
      setPlayerStats(stats);
    } catch (error) {
      setError(error.message);
      setPlayerStats(null); 
    }
  };

  return (
    <div className="player-stats-container mt-40">
      <h1 className='inter-regular'>NBA Player Search</h1>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={playerName}
          onChange={handleChange}
          placeholder="Enter player name"
          required
        />
        <button class="bg-customBlue text-white font-bold py-2 px-4 rounded" >Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      {playerStats && (
        <div className="player-card">
          <h2 className='text-center inter-regular'>{playerStats.playerName}</h2>
          <div className="stats">
            <p className='text-center inter-regular'><strong>Projected 2024-2025 Season Stats:</strong></p>
            <p className='inter-regular'><strong>Total Fantasy Points:</strong> {playerStats.totalFantasyPoints}</p>
            <p className= 'inter-light'><strong>Fantasy Points Per Game:</strong> {(playerStats.totalFantasyPoints/82).toFixed(1)}</p>
            <p><strong>Games Played:</strong> {playerStats.gamesPlayed}</p>
            <p><strong>Rebounds:</strong> {playerStats.totalRebounds}</p>
            <p><strong>Assists:</strong> {playerStats.assists}</p>
            <p><strong>Steals:</strong> {playerStats.steals}</p>
            <p><strong>Blocks:</strong> {playerStats.blockedShots}</p>
            <p><strong>Points:</strong> {playerStats.totalPoints}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerStats;


