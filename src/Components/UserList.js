import axios from 'axios';
import React, { useEffect, useState } from 'react';
function UserList() {

  const [listOfUSer, setListOfUSer] = useState([]);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setListOfUSer(res.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card-container">
      {listOfUSer.map((r, i) => (
        <div className='card' key={i}>
          <div className="card-body">
            <h2>Name: {r.name}</h2>
            <p>Username: {r.username}</p>
            <ul>
              <li>Email: {r.email}</li>
              <li>Phone: {r.phone}</li>
              <li>Location: {r.address.city}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
