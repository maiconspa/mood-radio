import "./App.css";
import { Home } from "./pages/Home/Home";
import packageJson from "../package.json";
import Adsense from "./components/Adsense/Adsense";
import Header from "./components/Header/Header";
import Controlbar from "./components/Controlbar/Controlbar";

function App() {
  console.log("Current app version: ", packageJson.version);

  return (
    <>
      <Header />
      <Home />
      <Controlbar />
      <Adsense />
    </>
  );
}

export default App;
