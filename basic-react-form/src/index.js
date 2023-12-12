import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from "./App";


const root =document.getElementById("root");

const container=ReactDOM.createRoot(root);

container.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
)