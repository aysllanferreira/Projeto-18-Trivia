import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import player from '../../redux/reducers/player';
import timer from '../../redux/reducers/timer';

export const renderWithRouterAndRedux = (component, initialState, route = '/') => {
  const history = createMemoryHistory({ initialEntries: [route] });
  const store = configureStore({
    reducer: {
      player,
      timer,
    },
    preloadedState: initialState,
  });

  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>
          {component}
        </Router>
      </Provider>,
    ),
    history,
    store,
  };
};

export default renderWithRouterAndRedux;
