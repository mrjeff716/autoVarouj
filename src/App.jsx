import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFound from  './components/NotFound'
import Logo from './media/Logo.png'

function App() {
  document.querySelector('.title').setAttribute('href', Logo)
  return (
    <div>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </div>
  )
}

export default App
