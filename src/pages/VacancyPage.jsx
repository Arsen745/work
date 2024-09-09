import React from 'react'
import VacancyContent from '../component/vacancy_content/VacancyContent'
import { NavLink } from 'react-router-dom'

const VacancyPage = () => {
  return (
    <div>
      <NavLink to={VacancyContent}>


      VacancyPage
      </NavLink>


      {/* <VacancyContent/> */}
    </div>
  )
}

export default VacancyPage