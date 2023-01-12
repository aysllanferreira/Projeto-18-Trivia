import React from 'react';
import md5 from 'crypto-js/md5';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feedback() {
  const player = useSelector((state) => state.player);
  const maxAss = 3;
  const history = useHistory();
  return (
    <div>
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
      {player.assertions >= maxAss ? (
        <p data-testid="feedback-text">Well Done!</p>
      ) : (
        <p data-testid="feedback-text">Could be better...</p>
      )}

      <h1 data-testid="feedback-total-score">
        {player.score}
      </h1>

      <h2 data-testid="feedback-total-question">
        {player.assertions}
      </h2>

      <button
        type="button"
        data-testid="btn-play-again"
        onClick={ () => history.push('/') }
      >
        Play Again
      </button>

      <button
        type="button"
        data-testid="btn-ranking"
        onClick={ () => history.push('/ranking') }
      >
        Ranking
      </button>
    </div>
  );
}

export default Feedback;
