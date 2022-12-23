import {useEffect} from 'react'
import { getExtensions, getToken } from './http/http';
import './App.css';

function App() {

  useEffect(() => {
    getToken()
    getExtensions()
  }, [])

  return (
    <div>
     
    </div>
  );
}

export default App;
