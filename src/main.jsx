import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'
import MainPage from './main-page/main-page.jsx';
import MenuPage from './menu-page/menu-page.jsx';
import AboutPage from './about-page/about-page.jsx';
import ContactPage from './contact-page/contact-page.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/menu" element={<MenuPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
  </BrowserRouter>
)
