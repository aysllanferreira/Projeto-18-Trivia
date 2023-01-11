import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import {screen, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Testa o componente Login', () => {
  it('Testa se o botão de jogar está desabilitado', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByTestId('btn-play');
    expect(button).toBeDisabled();
    const inputName = screen.getByTestId('input-player-name');
    userEvent.type(inputName, 'Teste');
    expect(button).toBeDisabled();
    const inputEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(inputEmail, 'teste@teste.com');
    expect(button).toBeEnabled();
  });

  it('Testa o botao Settings', () => {
    const {history} = renderWithRouterAndRedux(<App />);
    const button = screen.getByTestId('btn-settings');
    userEvent.click(button);
    const {pathname} = history.location;
    expect(pathname).toBe('/settings');
  })

  it('Testa o botao Play', async () => {
    const {history} = renderWithRouterAndRedux(<App />);
    const button = screen.getByTestId('btn-play');
    const inputName = screen.getByTestId('input-player-name');
    const inputEmail = screen.getByTestId('input-gravatar-email');

    userEvent.type(inputName, 'Teste');
    userEvent.type(inputEmail, 'teste@teste.com');

    userEvent.click(button);

    await waitForElementToBeRemoved(() => screen.getByTestId('btn-play'));

    const {pathname} = history.location;
    expect(pathname).toBe('/game');
  })
})