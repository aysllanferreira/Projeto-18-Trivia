import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import {screen, waitForElementToBeRemoved, waitFor, findBy} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getToken, getQuestions } from '../constants/apiTrivia';

describe('Testa o componente Game', () => {
  it('Teste se com um token invalido, o usuario volta para tela de login', async () => {
    const {history} = renderWithRouterAndRedux(<App />);
    const nameInput = screen.getByTestId('input-player-name');
    const emailInput = screen.getByTestId('input-gravatar-email');
    const button = screen.getByTestId('btn-play');
    userEvent.type(nameInput, 'Teste');
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.click(button);
    await waitFor(() => expect(history.location.pathname).toBe('/game'));
    expect(history.location.pathname).toBe('/game');

    localStorage.setItem('token', 'xablau');
    const response = await getQuestions();
    await waitFor(() => expect(history.location.pathname).toBe('/'));
    expect(history.location.pathname).toBe('/');
  });

  it('Teste se o jogo renderiza as perguntas', async () => {
    const {history} = renderWithRouterAndRedux(<App />);
    const nameInput = screen.getByTestId('input-player-name');
    const emailInput = screen.getByTestId('input-gravatar-email');
    const button = screen.getByTestId('btn-play');
    userEvent.type(nameInput, 'Teste');
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.click(button);
    await waitFor(() => expect(history.location.pathname).toBe('/game'));
    expect(history.location.pathname).toBe('/game');

    const token = await getToken();
    localStorage.setItem('token', token);
    const response = await getQuestions();

    const question = screen.getByTestId('question-category');
    expect(question).toBeInTheDocument();
  });

  it('Teste as dificuldades das perguntas, easy', async () => {
    const {history} = renderWithRouterAndRedux(<App />);
    const nameInput = screen.getByTestId('input-player-name');
    const emailInput = screen.getByTestId('input-gravatar-email');
    const button = screen.getByTestId('btn-play');
    userEvent.type(nameInput, 'Teste');
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.click(button);
    await waitFor(() => expect(history.location.pathname).toBe('/game'));
    expect(history.location.pathname).toBe('/game');

    const token = await getToken();
    localStorage.setItem('token', token);
    const response = await getQuestions();

    const correctAnswer = screen.getByTestId('correct-answer');
    userEvent.click(correctAnswer);
    const next = screen.getByTestId('btn-next');
    userEvent.click(next);
    const correctAnswer2 = screen.getByTestId('correct-answer');
    userEvent.click(correctAnswer2);
    const next2 = screen.getByTestId('btn-next');
    userEvent.click(next2);
    const correctAnswer3 = screen.getByTestId('correct-answer');
    userEvent.click(correctAnswer3);
    const next3 = screen.getByTestId('btn-next');
    userEvent.click(next3);
    const correctAnswer4 = screen.getByTestId('correct-answer');
    userEvent.click(correctAnswer4);
    const next4 = screen.getByTestId('btn-next');
    userEvent.click(next4);
    const correctAnswer5 = screen.getByTestId('correct-answer');
    userEvent.click(correctAnswer5);
    const next5 = screen.getByTestId('btn-next');
    userEvent.click(next5);
  });

  it('Teste se o timer diminui', async () => {
    const {history} = renderWithRouterAndRedux(<App />);
    const nameInput = screen.getByTestId('input-player-name');
    const emailInput = screen.getByTestId('input-gravatar-email');
    const button = screen.getByTestId('btn-play');
    userEvent.type(nameInput, 'Teste');
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.click(button);
    await waitFor(() => expect(history.location.pathname).toBe('/game'));
    expect(history.location.pathname).toBe('/game');

    const timer = screen.getByTestId('timer');
    expect(timer).toHaveTextContent('30');
    jest.setTimeout(1000);
    await waitFor(() => expect(timer).toHaveTextContent('29'));
  })

  it('Verifica se vai para a rota feedback', async () => {
    const {history} = renderWithRouterAndRedux(<App />);
    const nameInput = screen.getByTestId('input-player-name');
    const emailInput = screen.getByTestId('input-gravatar-email');
    const button = screen.getByTestId('btn-play');
    userEvent.type(nameInput, 'Teste');
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.click(button);
    await waitFor(() => expect(history.location.pathname).toBe('/game'));
    expect(history.location.pathname).toBe('/game');

    const token = await getToken();
    localStorage.setItem('token', token);
    const response = await getQuestions();

    const correctAnswer = screen.getByTestId('correct-answer');
    userEvent.click(correctAnswer);
    const next = screen.getByTestId('btn-next');
    userEvent.click(next);
    const correctAnswer2 = screen.getByTestId('correct-answer');
    userEvent.click(correctAnswer2);
    const next2 = screen.getByTestId('btn-next');
    userEvent.click(next2);
    const correctAnswer3 = screen.getByTestId('correct-answer');
    userEvent.click(correctAnswer3);
    const next3 = screen.getByTestId('btn-next');
    userEvent.click(next3);
    const correctAnswer4 = screen.getByTestId('correct-answer');
    userEvent.click(correctAnswer4);
    const next4 = screen.getByTestId('btn-next');
    userEvent.click(next4);
    const correctAnswer5 = screen.getByTestId('correct-answer');
    userEvent.click(correctAnswer5);
    const next5 = screen.getByTestId('btn-next');
    userEvent.click(next5);

    await waitFor(() => expect(history.location.pathname).toBe('/feedback'));
    expect(history.location.pathname).toBe('/feedback');
  })
});