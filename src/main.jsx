import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './style/global'

import { CreateMovie } from './pages/CreateMovie'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
     <CreateMovie />

  </React.StrictMode>,
)
