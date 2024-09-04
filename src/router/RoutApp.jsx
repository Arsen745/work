import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import About from '../pages/About'


const rout = [
  {
    path: '/',
    component: <HomePage />,
    key: 'home'
  },
  {
    path: '/about',
    component: <About/>,
    key: 'about'
  }
]

const RoutApp = () => {
  return (
    <Routes>
      {rout.map(el => (
        <Route path={el.path} element={el.component} key={el.key} />
      ))}
    </Routes>
  )
}



export default RoutApp