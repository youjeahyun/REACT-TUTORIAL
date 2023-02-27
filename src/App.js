import './App.css';
import Day from './componenet/Day';
import DayList from './componenet/DayList';
import Header from './componenet/Header';

function App() {

  return (
    <div className="App">     
      <Header/>
      <DayList/>
      <Day />
    </div>
  );
}

export default App;
