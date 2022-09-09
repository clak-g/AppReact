import React from 'react';
import ReactDOM from 'react-dom/client';
//import {JP} from './JP/Jp.js';
//import {Menu} from './menu/Menu.js';
import { BrowserRouter } from "react-router-dom";
import {Routers} from "./Routers/routers"

//let nombre=<h1>Hola Mundo soy Frailejon</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //<Menu></Menu>

  <React.StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </React.StrictMode>
)


