import React, { useState, useEffect } from 'react';

function Login() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [player, setPlayer] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setPlayer({ ...player, [name]: value });
  };

  useEffect(() => {
    const { name, email } = player;
    if (name.length > 0 && email.length > 0) setIsDisabled(false);
    else setIsDisabled(true);
  }, [player]);

  return (
    <div>
      <h1>Login</h1>
      <form>
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
          type="button"
          data-testid="btn-play"
          disabled={ isDisabled }
        >
          Play
        </button>
      </form>
    </div>
  );
}

export default Login;
