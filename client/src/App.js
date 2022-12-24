import Header from "./components/Header/Header";
import StaffList from './components/StaffList/StaffList';
import './App.css';

function App() {

  return (
    <div className='app'>

        <div className='container'>
            <Header/>
            <StaffList/>
        </div>

    </div>
  );
}

export default App;
