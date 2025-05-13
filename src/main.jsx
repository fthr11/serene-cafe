import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'
import MainPage from './main-page/main-page.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/about" element={<></>}/>
      <Route path="/menu" element={<MainPage/>}/>
      <Route path="/contact" element={<MainPage/>}/>
    </Routes>
  </BrowserRouter>
)
