import "./styles/App.css";
// import { CssBaseline } from "@material-ui/core";
import Home from "./Home";
import Logo from './assets/logo.png'

function App() {
  return (
    <div className="bg">
    <img src={Logo} alt="logo" className="logo" />
      {/* <CssBaseline /> */}
      <Home />
    </div>
  );
}

export default App;
