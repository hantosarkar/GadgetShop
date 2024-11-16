import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Routes from './Route/Route.jsx'
import Provider from './Provider/Provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={Routes}>
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
