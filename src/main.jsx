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

import { HashRouter } from 'react-router-dom'
//  HashRouter hanya bisa digunakan untuk production.
// Karena saya ingin menggunakan github pages

// import { BrowserRouter } from 'react-router-dom'
// BrowserRouter hanya bisa digunakan untuk development, bekerja pada struktur folder/direktori.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </StrictMode>
)
