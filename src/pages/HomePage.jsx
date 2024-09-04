import React, { useEffect } from 'react'
import { index } from '../api/index'

const HomePage = () => {

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await index.fetchUser()
      console.log(response, '---data----');
      
    }
    fetchUsers();


  }, [])
  return (
    <div>Saadat</div>
  )
}

export default HomePage