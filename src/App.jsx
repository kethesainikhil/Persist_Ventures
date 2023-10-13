import React from 'react'
import Home from './pages/Home'
import Werhiring from './pages/werhiring'
import { Routes , Route } from 'react-router-dom'
const App = () => {
  return (
    <div className='sm:-ml-30'>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/werhiring' element={<Werhiring />} />
</Routes>
    </div>
  )
}

export default App
