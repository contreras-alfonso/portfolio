import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LayoutPublico from './layouts/LayoutPublico'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'


const router = createBrowserRouter([
  {
    path:'/',
    element:<LayoutPublico/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/portfolio',
        element:<Portfolio/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </React.StrictMode>,
)
