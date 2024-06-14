import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './style/global'

import { MoviePreview } from './pages/MoviePreview'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
     <MoviePreview />

  </React.StrictMode>,
)