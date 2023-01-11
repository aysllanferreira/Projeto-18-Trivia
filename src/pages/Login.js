import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getToken } from '../constants/apiTrivia';
import { setPlayers } from '../redux/reducers/player';

function Login() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [player, setPlayer] = useState({
    name: '',
    email: '',
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setPlayer({ ...player, [name]: value });
  };

  useEffect(() => {
    const { name, email } = player;
    if (name.length > 0 && email.length > 0) setIsDisabled(false);
    else setIsDisabled(true);
  }, [player]);

  const handleClick = async (event) => {
    event.preventDefault();
    const token = await getToken();
    localStorage.setItem('token', token);

    const { name, email } = player;
    const playerInfo = {
      name,
      email,
      score: 0,
    };

    dispatch(setPlayers(playerInfo));

    history.push('/game');
  };

  const handleSettings = () => {
    history.push('/settings');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleClick }>
        <input
          type="text"
          data-testid="input-player-name"
          name="name"
          onChange={ handleInputChange }
        />
        <input
          type="text"
          data-testid="input-gravatar-email"
          name="email"
          onChange={ handleInputChange }
        />
        <button
          type="submit"
          data-testid="btn-play"
          disabled={ isDisabled }
        >
          Play
        </button>

        <button
          type="button"
          data-testid="btn-settings"
          onClick={ handleSettings }
        >
          Settings
        </button>
      </form>
    </div>
  );
}

export default Login;
