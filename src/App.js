import React from 'react';
import './App.css';
import LoginForm from './Component/LoginForm/LoginForm';
import NavBarCurrent from './Component/NavBar/NavBarCurrent';

function App() {
  return (
    <div className="App">
      <NavBarCurrent></NavBarCurrent>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
