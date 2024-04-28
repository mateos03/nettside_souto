import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menu from './Menu.jsx'
import Redbutton from './button.jsx'
import './css/index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Menu/>
    <Routes>
    <Route exact path="/" element={<App />}/>
    <Route exact path="/yep" element={<Redbutton />}/>
    </Routes>
  </HashRouter>,
)
