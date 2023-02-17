import './App.css';
import Hello from './componenet/Hello';
import Welcome from './componenet/Welcome';
import World from './componenet/World';
import styles from './App.module.css';

function App() {
  const name = "Tom";
  const naver = {
    name:"네이버",
    url:"https://www.naver.com"
  }
  return (
    <div className="App">     
      <Hello/>
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App;
