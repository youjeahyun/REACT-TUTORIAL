import './App.css';
import Day from './componenet/Day';
import DayList from './componenet/DayList';
import Header from './componenet/Header';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import EmptyPage from './componenet/EmptyPage';

function App() {

  return ( 
    <div className='App'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DayList/>} />
        <Route path="/day/:day" element={<Day/>} />
        <Route path="/day/4" element={<EmptyPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
);
}

export default App;
