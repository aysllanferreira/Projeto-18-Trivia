/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getToken } from '../constants/apiTrivia';
import { setPlayers } from '../redux/reducers/player';
import './Login.scss';
import logoTrivia from '../trivia.png';
import ModalSettings from '../components/ModalSettings';

function Login() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [player, setPlayer] = useState({
    name: '',
    email: '',
  });
  const [settingsOpen, setSettingsOpen] = useState(false);

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

  return (
    <div className="Login">

      <img src={ logoTrivia } alt="logo" className="Login__title" />

      <form onSubmit={ handleClick } className="Login__form">
        <input
          type="text"
          data-testid="input-player-name"
          name="name"
          onChange={ handleInputChange }
          placeholder="Name"
        />
        <input
          type="text"
          data-testid="input-gravatar-email"
          name="email"
          onChange={ handleInputChange }
          placeholder="Email"
        />

        <div className="Login__form__buttons">
          <button
            type="submit"
            data-testid="btn-play"
            disabled={ isDisabled }
            className="Login__form__buttons__play"
          >
            Play
          </button>

          <button
            type="button"
            data-testid="btn-settings"
            onClick={ () => setSettingsOpen(!settingsOpen) }
            className="Login__form__buttons__settings"
          >
            Settings
          </button>
        </div>

      </form>

      { settingsOpen && (
        <ModalSettings
          settingsOpen={ settingsOpen }
          setSettingsOpen={ setSettingsOpen }
        />
      )}
    </div>
  );
}

export default Login;
