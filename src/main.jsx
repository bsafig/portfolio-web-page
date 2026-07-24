import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// Bootstrap CSS first so our own styles win the cascade.
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/base.css'
import './styles/home.css'
import './styles/project.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
