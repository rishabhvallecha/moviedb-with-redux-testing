import React from 'react';
import Header from './components/Header';
import Searchform from './components/Searchform';

import configureStore from './redux/store';
import { Provider } from 'react-redux';

const store = configureStore();



function App() {
  return (
    <Provider store = {store}>
        <Header />
        <Searchform />
    </Provider>
  );
}

export default App;
