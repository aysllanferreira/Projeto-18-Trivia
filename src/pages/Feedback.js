import React from 'react';
import md5 from 'crypto-js/md5';
import { useSelector } from 'react-redux';

function Feedback() {
  const player = useSelector((state) => state.player);
  return (
    <div data-testid="feedback-text">
      <img
        src={ `https://www.gravatar.com/avatar/${md5(player.email)}` }
        alt="avatar"
        data-testid="header-profile-picture"
      />
      <p data-testid="header-player-name">
        {player.name}
      </p>
      <p data-testid="header-score">
        {player.score}
      </p>
    </div>
  );
}

export default Feedback;
