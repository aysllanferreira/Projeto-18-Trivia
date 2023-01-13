import React from 'react';
import { useHistory } from 'react-router-dom';

function Ranking() {
  const history = useHistory();
  return (
    <div>
      <h1 data-testid="ranking-title">Ranking</h1>
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
