import logo from './logo.svg';
import './App.css';
import Clicker from './components/Clicker/Clicker.js'
import Notifications from './components/Notifications/Notifications.js'
import Stats from './components/Stats/Stats.js'
import Upgrades from './components/Upgrades/Upgrades.js'

function App() {
  return (
    <div className="App">
        <Stats />
        
        <div className='rightUI'>
          <Clicker />
          <Notifications />
        </div>
        {/* <Upgrades /> */}
    </div>
  );
}

export default App;
