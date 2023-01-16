import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import './Feedback.scss';

function Feedback() {
  const player = useSelector((state) => state.player);
  const maxAss = 3;
  const history = useHistory();
  return (
    <div className="Feedback">
      <Header />

      <div className="Feedback__message">
        {player.assertions >= maxAss ? (
          <p
            data-testid="feedback-text"
            style={ {
              color: '#009900',
              fontWeight: 'bold',
            } }
          >
            Well Done!
          </p>
        ) : (
          <p
            data-testid="feedback-text"
            style={ {
              color: '#b3b300',
              fontWeight: 'bold',
            } }
          >
            Could be better...
          </p>
        )}
      </div>

      <div className="Feedback__results">
        <label htmlFor="score">
          {' '}
          Score
          <h1 data-testid="feedback-total-score">
            {player.score}
          </h1>
        </label>

        <label htmlFor="assertions">
          {' '}
          Assertions
          <h1 data-testid="feedback-total-question">
            {player.assertions}
          </h1>
        </label>
      </div>

      <div className="Feedback__buttons">
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ () => history.push('/') }
          className="Feedback__buttons__play"
        >
          Play Again
        </button>

        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ () => history.push('/ranking') }
          className="Feedback__buttons__ranking"
        >
          Ranking
        </button>
      </div>

    </div>
  );
}

export default Feedback;
