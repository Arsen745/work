import React, { useEffect, useState } from 'react';
import Header from './component/header/Header';
import index from './api/index'; 
import RoutApp from './router/RoutApp';

const App = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const handlePost = async () => {
    try {
      const response = await index.fetchDress(name, surname, age, email, password);
      console.log(response, '---------post---------------');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  useEffect(() => {
    const fetchUse = async () => {
      try {
        const response = await index.fetchUser();
        console.log(response, '----data------');
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchDr = async () => {
      try {
        const response = await index.fetchDress(); 
        console.log(response, '----data------');
      } catch (error) {
        console.error('Error fetching dress data:', error);
      }
    };

    fetchUse();
    fetchDr();
  }, []); 

  return (
    <div>
      <RoutApp/>
      <div className="form">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="sur name"
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          type="text"
          placeholder="age"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />
        <button onClick={handlePost}>Отправить</button>
      </div>
    </div>
  );
};

export default App;
