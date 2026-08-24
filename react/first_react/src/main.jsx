import React, { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import World from './1st_project/App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <World />
  </StrictMode>,
)
