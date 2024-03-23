import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import NourishProvider from './context/NourishProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <NourishProvider>
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
  </NourishProvider>
)

//* app is wrapped in browser, dont import again in app
