import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import HandiworkContextProvider from './Components/Context/HandiworkContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <HandiworkContextProvider>
        <App />
    </HandiworkContextProvider>

);
