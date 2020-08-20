import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store/Store';
import ViewsContainer from './modules/commons/ViewsContainer';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
       <ViewsContainer />
    </ConnectedRouter>
  </Provider>
);

export default App;
