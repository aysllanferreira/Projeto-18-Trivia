import React from 'react';
import md5 from 'crypto-js/md5';
import { useSelector } from 'react-redux';
import './Header.scss';

function Header() {
  const player = useSelector((state) => state.player);
  return (
    <div className="Header">
      <img
        data-testid="header-profile-picture"
        src={ `https://www.gravatar.com/avatar/${md5(player.email)}` }
        alt="profile"
      />
      <label htmlFor="name">
        {' '}
        Player Name
        <p data-testid="header-player-name">{player.name}</p>
      </label>

      <label htmlFor="score">
        {' '}
        Score
        <p data-testid="header-score">{player.score}</p>
      </label>

    </div>
  );
}

export default Header;
