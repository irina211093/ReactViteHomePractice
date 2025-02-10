import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserProfile } from './HomeWork-1/UserProfile.jsx'




 

export function App() {
  return (
    <div className="app">
      <UserProfile
        name="Irina"
        age={15}
        email="irina@example.com"
        avatar="https://example.com/avatar.jpg"
      />
    </div>
  );
}

export default App


