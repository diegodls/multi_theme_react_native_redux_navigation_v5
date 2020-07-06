import React from 'react';
import Routes from './src/navigation/routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MyStatusBar from './src/components/MyStatusBar'
const App = () => {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;