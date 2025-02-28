import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import "antd/dist/reset.css";
import '@ant-design/v5-patch-for-react-19';
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  
  </StrictMode>,
)
