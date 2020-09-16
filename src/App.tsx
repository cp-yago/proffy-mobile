import 'react-native-gesture-handler';

import AppProvider from './hooks';
import React from 'react';
import Routes from './routes';

const App: React.FC = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);

export default App;
