// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { RouterProvider } from 'react-router';
import { AppRoutes } from './routes/AppRoutes';
import CartProvider from './providers/CartProvider';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={AppRoutes}></RouterProvider>
      <Toaster position='top-right'></Toaster>
    </CartProvider>
  </StrictMode>,
)