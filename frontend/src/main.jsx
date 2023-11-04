import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "./assets/styles/global.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
