import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <BrowserRouter basename='villa'>
    <ScrollToTop />
    <App />
  </BrowserRouter>
</React.StrictMode>
)
