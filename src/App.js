import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import About from './components/About/About'

import NotFound from './components/NotFound/NotFound'
import Review from './components/Review/Review'
import Dashboard from './components/Dashboard/Dashboard'
import Blog from './components/Blog/Blog'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}> </Route>
       <Route path='/review' element={<Review></Review>}></Route>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
