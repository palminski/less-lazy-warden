import logo from './logo.svg';
import './App.css';
import {Referrals, Settings} from './pages/index'
import { useState } from 'react';

function App() {
  //States
  const [pageSelected, setPageSelected] = useState('referrals');

  //return JSX
  return (
    <div className="App">

    {pageSelected === 'referrals' && <Referrals/>}
    {pageSelected === 'settings' && <Settings/>}

    </div>
  );
}

export default App;
