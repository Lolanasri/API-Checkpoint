import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; // Pour le style (crée-le ensuite)

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setListOfUser(res.data);
      })
      .catch((err) => {
        console.error('Erreur de récupération des utilisateurs:', err);
      });
  }, []);

  return (
    <div className="user-list">
      <h2>Liste des utilisateurs</h2>
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;