import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import {screen, waitForElementToBeRemoved, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Feedback } from '../pages';

describe('Testa o componente Feedback', () => {
  it('Teste o componente Feedback com 3 acertos', async () => {
    const initialState = {
      player: {
        name: 'teste',
        email: 'teste@teste.com',
        score: 100,
        assertions: 3,
      },
    };
    renderWithRouterAndRedux(<Feedback />, initialState);
    const img = screen.getByAltText('avatar');
    expect(img).toBeInTheDocument();
    const name = screen.getByTestId('header-player-name');
    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent('teste');
    const score = screen.getByTestId('header-score');
    expect(score).toBeInTheDocument();
    expect(score).toHaveTextContent('100');
    const feedback = screen.getByTestId('feedback-text');
    expect(feedback).toBeInTheDocument();
    expect(feedback).toHaveTextContent('Well Done!');
    const totalScore = screen.getByTestId('feedback-total-score');
    expect(totalScore).toBeInTheDocument();
    expect(totalScore).toHaveTextContent('100');
    const totalQuestion = screen.getByTestId('feedback-total-question');
    expect(totalQuestion).toBeInTheDocument();
    expect(totalQuestion).toHaveTextContent('3');
    const playAgain = screen.getByTestId('btn-play-again');
    expect(playAgain).toBeInTheDocument();
    expect(playAgain).toHaveTextContent('Play Again');
    const ranking = screen.getByTestId('btn-ranking');
    expect(ranking).toBeInTheDocument();
    expect(ranking).toHaveTextContent('Ranking');
  });

  it('Teste se eh possivel ir pra rota / ao clicar em play Again', async () => {
    const {history} = renderWithRouterAndRedux(<Feedback />);
    const playAgain = screen.getByTestId('btn-play-again');
    userEvent.click(playAgain);
    const {pathname} = history.location;
    expect(pathname).toBe('/');
  });
  it('Teste se eh possivel ir pra rota /ranking ao clicar em ranking', async () => {
    const {history} = renderWithRouterAndRedux(<Feedback />);
    const ranking = screen.getByTestId('btn-ranking');
    userEvent.click(ranking);
    const {pathname} = history.location;
    expect(pathname).toBe('/ranking');
  });
});