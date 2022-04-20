import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TokenFactoryPage from './pages/TokenFactoryPage';
import LaunchPadPage from './pages/LaunchPadPage';
import LockerPage from './pages/LockerPage';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Header></Header>
          <Sidebar isActive={false}></Sidebar>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/tokenfactory" element={<TokenFactoryPage />} />
            <Route path="/launchpad" element={<LaunchPadPage />} />
            <Route path="/locker" element={<LockerPage />} />
          </Routes>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
