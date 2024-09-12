import './App.css'
import './style.css'

import Navbar from './components/Navbar'
import Main from './components/Main'
import { useState } from 'react'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className="container">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prev) => !prev)}
      />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App
