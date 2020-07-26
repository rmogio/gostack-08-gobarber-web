import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const history = useHistory();

  function handleLogout() {
    history.push('/');
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');
  }

  return (
    <>
      <h1>Dashboard</h1>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
};

export default Dashboard;
