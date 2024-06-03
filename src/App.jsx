import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/home/Home'
import Admin from './page/admin/Admin'


function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>

    </>
  )
}

export default App
