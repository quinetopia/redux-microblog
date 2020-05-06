import React from "react";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { createStore } from "redux";
// import rootReducer from "./rootReducer";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(

    <BrowserRouter>
      <App/>
    </BrowserRouter>,

  document.getElementById("root")
);