import { useState } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFound from  './components/NotFound'
import Logo from './media/Logo.png'

function App() {
  document.querySelector('.title').setAttribute('href', Logo)
  const [page, setPage] = useState("Home")
  return (
    <div>
    <Routes>
      <Route path="/" element={<HomePage page={page} setPage={setPage} />}></Route>
      <Route path="/about" element={<About page={page}  setPage={setPage}  />}></Route>
      <Route path="/products" element={<Products page={page}  setPage={setPage}  />}></Route>
      <Route path="/contact" element={<Contact page={page}  setPage={setPage}  />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </div>
  )
}

export default App
