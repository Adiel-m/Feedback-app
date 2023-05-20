import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const pageWrapper = document.getElementById('app')
const root = createRoot(pageWrapper)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
