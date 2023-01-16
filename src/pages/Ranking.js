import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import './Ranking.scss';

function Ranking() {
  const history = useHistory();
  const players = useSelector((state) => state.player);
  const [ranking, setRanking] = useState([]);

  const SaveResult = () => {
    if (players.name === '') return '';
    const result = {
      name: players.name,
      email: players.email,
      score: players.score,
    };
    localStorage.setItem('result', JSON.stringify([result]));
  };

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('result'));
    if (storage === null) {
      if (SaveResult() === '') return;
      SaveResult();
      const storage2 = JSON.parse(localStorage.getItem('result'));
      setRanking(storage2);
    } else {
      const result = {
        name: players.name,
        email: players.email,
        score: players.score,
      };
      if (SaveResult() === '') {
        localStorage.setItem('result', JSON.stringify([...storage]));
        const storage2 = JSON.parse(localStorage.getItem('result'));
        setRanking(storage2);
      } else {
        localStorage.setItem('result', JSON.stringify([...storage, result]));
        const storage2 = JSON.parse(localStorage.getItem('result'));
        setRanking(storage2);
      }
    }
  }, []);
  console.log(ranking);
  return (
    <div className="Ranking">
      <h1
        data-testid="Ranking__title"
        className="Ranking__title"
      >
        Ranking

      </h1>
      <button
        type="button"
        data-testid="btn-go-home"
        className="Ranking__button"
        onClick={ () => history.push('/') }
      >
        Ir para a tela inicial
      </button>
      <table className="Ranking__table">
        <tr className="Ranking__table__header">
          <th>Avatar</th>
          <th>Nome</th>
          <th>Score</th>
        </tr>
        {ranking.sort((a, b) => b.score - a.score).map((player, index) => (
          <tr key={ index } className="Ranking__table__body">
            <td>
              <img
                data-testid="header-profile-picture"
                src={ `https://www.gravatar.com/avatar/${md5(player.email)}` }
                alt="profile"
              />
            </td>
            <td data-testid={ `player-name-${index}` }>{ player.name }</td>
            <td data-testid={ `player-score-${index}` }>{ player.score }</td>

          </tr>
        ))}
      </table>
    </div>
  );
}

export default Ranking;
