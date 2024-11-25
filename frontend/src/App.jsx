import { useState } from "react"
import { CreateHabbit, Daily } from "./components"
import { habbitsContext } from "./components/context/habbit"

function App() {
  const [habbit, setHabbit] = useState([]);
  return (
    <habbitsContext.Provider value={{ habbit, setHabbit }}>
      <div className="bg-slate-900 min-h-screen">
        <h1 className="font-bold text-center text-xl text-white">Habbit tracker</h1>
        <div className="flex justify-between">
          <CreateHabbit />
          <Daily />
        </div>
      </div>
    </habbitsContext.Provider>
  )
}

export default App
