import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

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
      <h1>🌐 Liste des Utilisateurs</h1>
      <div className="user-container">
        {listOfUser.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Téléphone:</strong> {user.phone}</p>
            <p><strong>Site web:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;