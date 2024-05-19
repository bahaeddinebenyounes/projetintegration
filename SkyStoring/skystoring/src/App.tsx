// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/signup/Signup';
import SignIn from './components/signin/signin';
import Home from './components/home/home';
import { DashboardPage } from './components/mainpage/DashboardPage';
import ProfilePage from './components/mainpage/ProfilePage';
import SearchPage from './components/mainpage/SearchPage';
import MessagingPage from './components/mainpage/MessagingPage';
import BabysittingRequestsPage from './components/mainpage/BabysittingRequestsPage';
import AppointmentPage from './components/mainpage/AppointmentPage';
import SettingsPage from './components/mainpage/SettingsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mainpage" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/messaging" element={<MessagingPage />} />
        <Route path="/babysitting-requests" element={<BabysittingRequestsPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
