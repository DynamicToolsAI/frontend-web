import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import RegistrationPage from './Registration';
import HubPage from './HubPage';
import Header from './Header';
import NotFound from './NotFoundPage'
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/hub" element={<HubPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
