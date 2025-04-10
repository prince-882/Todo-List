import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar  from './Components/Navbar'
import Main from './Components/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar />
<Main />
    </>
  )
}

export default App
