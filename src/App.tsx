import './App.css';
import { Home } from './pages/Home/Home';
import packageJson from '../package.json';
import Navbar from './components/Navbar/Navbar';
import Adsense from './components/Adsense/Adsense';

function App() {
  console.log("Current app version: ", packageJson.version)
  
  return (
    <div>
      <Navbar />
      <Home />
      <Adsense/>
    </div>

  );
}

export default App;
