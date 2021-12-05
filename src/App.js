import "./styles/App.css";
// import { CssBaseline } from "@material-ui/core";
import Form from "./Form";
import Logo from './assets/logo.png'

function App() {
  return (
    <div className="bg">
    <img src={Logo} alt="logo" className="logo" />
      {/* <CssBaseline /> */}
      <Form />
    </div>
  );
}

export default App;
