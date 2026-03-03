

import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'


const fetchPlayers = async () => {
  let res = await fetch("/players.json")
  return res.json()
}

function App() {

  const playersPromise = fetchPlayers()

  return (
    <>

      <Navbar />
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <AvailablePlayers playersPromise={playersPromise} />
      </Suspense>

      {/* <SelectedPlayers /> */}
    </>
  )
}

export default App
