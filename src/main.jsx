import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { servicesApi } from './apiStore/serviceApi.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={servicesApi}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ApiProvider>
)
  