import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import md5 from 'crypto-js/md5';

function Ranking() {
  const history = useHistory();
  const players = useSelector((state) => state.player);
  const [ranking, setRanking] = useState([]);

  const SaveResult = () => {
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
      SaveResult();
      const storage2 = JSON.parse(localStorage.getItem('result'));
      setRanking(storage2);
    } else {
      const result = {
        name: players.name,
        email: players.email,
        score: players.score,
      };
      localStorage.setItem('result', JSON.stringify([...storage, result]));
      const storage2 = JSON.parse(localStorage.getItem('result'));
      setRanking(storage2);
    }
  }, []);
  console.log(ranking);
  return (
    <div>
      <h1 data-testid="ranking-title">Ranking</h1>
      <table>
        <tr>
          <th>Avatar</th>
          <th>Score</th>
          <th>Nome</th>
        </tr>
        {ranking.sort((a, b) => b.score - a.score).map((player, index) => (
          <tr key={ index }>
            <td>
              <img
                data-testid="header-profile-picture"
                src={ `https://www.gravatar.com/avatar/${md5(player.email)}` }
                alt="profile"
              />
            </td>
            <td data-testid={ `player-score-${index}` }>{ player.score }</td>
            <td data-testid={ `player-name-${index}` }>{ player.name }</td>
          </tr>
        ))}
      </table>
      <button
        type="button"
        data-testid="btn-go-home"
        onClick={ () => history.push('/') }
      >
        Ir para a tela inicial
      </button>
    </div>
  );
}

export default Ranking;
