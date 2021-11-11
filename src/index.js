import ReactDOM from "react-dom";
import App from "./App.js";
import './style/App.css';
import About from "./About.js"

import Header from "./components/Header.js";



ReactDOM.render(

  <section>
    <Header></Header>
    <App></App>

  </section>

  ,
  document.getElementById("root")
)