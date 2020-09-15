import {AuthProvider} from './auth';
import React from 'react';

const AppProvider: React.FC = ({children}) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
