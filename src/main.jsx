import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import ReactDOM from 'react-dom/client'

import ScrollToTop from './components/ScrollToTop.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/CSS/main.css'
import 'animate.css';
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
)
