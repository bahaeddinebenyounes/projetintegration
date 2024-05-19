import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DashboardPage.module.css'; // Import CSS module styles


const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to CareConnect Dashboard</h1>
      <Link to="/profile" className={styles.link}>Go to Profile</Link>
      <Link to="/search" className={styles.link}>Search/Browse Babysitters</Link>
      <Link to="/messaging" className={styles.link}>Messaging</Link>
      <Link to="/babysitting-requests" className={styles.link}>Babysitting Requests</Link>
      <Link to="/appointment" className={styles.link}>Appointments</Link>
      <Link to="/settings" className={styles.link}>Settings</Link>
    </div>
  );
};

export default DashboardPage;



export {
  DashboardPage,
  
};
