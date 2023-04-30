import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FavoriteContextProvider } from './context/favoriteBooks/FavoriteContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
   // react strict mode face codul sa se apeleze de 2 ori
<FavoriteContextProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
</FavoriteContextProvider>
)
