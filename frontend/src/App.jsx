import { CreateHabbit, Daily } from "./components"

function App() {

  return (
    <div className="bg-slate-900 min-h-screen">
      <h1 className="font-bold text-center text-xl text-white">Habbit tracker</h1>
      <div className="flex justify-between">
        <CreateHabbit />
        <Daily />
      </div>
    </div>
  )
}

export default App
