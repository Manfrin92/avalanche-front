import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import AppProvider from './context';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyle />
    </>
    // <BrowserRouter>
    //   <AppProvider>
    //     <Routes />
    //   </AppProvider>

    //   <GlobalStyle />
    // </BrowserRouter>
  );
};

export default App;
