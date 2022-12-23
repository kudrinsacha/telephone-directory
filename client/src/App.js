import {useEffect} from 'react'
import { getToken } from './http/http';
import './App.css';

function App() {

  useEffect(() => {
    getToken()
  }, [])

  return (
    <div>
     
    </div>
  );
}

export default App;
