import { useState, useRef, useEffect } from 'react'
import './App.css'
import UserList from './Components/UserList.jsx';
import WindowSize from './Components/WindowSize.jsx';
import CountdownTimer from './Components/CountdownTimer.jsx';

function App() {
  return(
    <div>
      <CountdownTimer />
      <UserList />
      <WindowSize />
    </div>
  )
}

export default App
