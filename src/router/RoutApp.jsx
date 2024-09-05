import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import VacancyPage from '../pages/VacancyPage'


const rout = [
  {
    path: '/',
    component: <HomePage />,
    key: 'home'
  },
  {
    path: '/vacancy',
    component: <VacancyPage/>,
    key: 'vacancy'
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