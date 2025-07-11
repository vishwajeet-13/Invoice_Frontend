import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserProvider>
  <App />
  <ToastContainer/>
  </UserProvider>
  </BrowserRouter>
    
  
)
