import React, { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RootState } from './redux/reducers';

const mockStore = configureStore<Partial<RootState>>([thunk]);

const customRender = (
  ui: ReactElement,
  state?: Partial<RootState>,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  const store = mockStore(state);
  function wrapper({ children }: { children: ReactElement }) {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
      </Provider>
    );
  }

  return render(ui, { wrapper, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
