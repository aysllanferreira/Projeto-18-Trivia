import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import {screen, waitForElementToBeRemoved, waitFor, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Feedback, Ranking } from '../pages';

// beforeAll(() => {
//     renderWithRouterAndRedux(<App);
// });

describe('Testa o componente Ranking', () => {
    it('1', async () => {
        const initialState = {
            player: {
              name: 'teste',
              email: 'teste@teste.com',
              score: 100,
              assertions: 3,
            },
          };
        const mockName = 'result';

         const mockStorage = [{"email": "teste2@teste.com", "name": "teste2", "score": 90}]

        const setLocalStorage = (id, data) => {
            window.localStorage.setItem(mockName, JSON.stringify(mockStorage));
        }
        setLocalStorage(mockName, mockStorage);

          const {history} = renderWithRouterAndRedux(<Ranking />, initialState);
        //   const ranking = screen.getByTestId('btn-ranking');
        //   userEvent.click(ranking);
        //   const {pathname} = history.location;
        //   expect(pathname).toBe('/ranking');
        //   const heading = screen.getByRole('heading', {
        //     name: /ranking/i,
        //     level: 1
        //   });
        //   const avatar = screen.getByRole('row', {
        //     name: /profile 100 teste/i
        //   });
        //   const score = screen.getByRole('cell', {
        //     name: /100/i
        //   });
        //   const name = screen.getByTestId('player-name-0');
        // window.localStorage.clear();

            const mockStorage2 = [{"email": "teste2@teste.com", "name": "teste2", "score": 90}, {"email": "teste@teste.com", "name": "teste", "score": 100} ]

          const storage = JSON.parse(localStorage.getItem('result'));
          expect(storage).toEqual(mockStorage2);

          const player1 = screen.getByRole('row', {
            name: /profile 100 teste/i
            });
            const player2 = screen.getByRole('row', {
                name: /profile 90 teste/i
                });

            const buttonHome = screen.getByTestId('btn-go-home');
            userEvent.click(buttonHome);

            const {pathname} = history.location;
          expect(pathname).toBe('/');
    });

    it('2', async () => {
        window.localStorage.clear('result');
        const {history} = renderWithRouterAndRedux(<Ranking />);
        // window.localStorage.clear('result');
    });
});