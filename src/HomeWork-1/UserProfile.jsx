import React from 'react';

export function UserProfile({ name, age, email, avatar }) {
  return (
    <div className="user-card">
      <img 
        src={avatar} 
        alt={`${name}'s avatar`} 
        className="user-avatar"
      />
      <div className="user-info">
        <h2>{name}</h2>
        <p>Возраст: {age}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default UserProfile;