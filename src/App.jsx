import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
import { useState, useEffect } from 'react'
import { SettingsContext } from './SettingsContext.js'


function App() {
 const [largeText, setLargeText] = useState(() => {
  const saved = localStorage.getItem('largeText')
  return saved !== null ? JSON.parse(saved) : false
  })

useEffect(() => {
  localStorage.setItem('largeText', JSON.stringify(largeText))
}, [largeText])

  return (
    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Raymundo C. Alcontin JR." />
      </div>
    </SettingsContext>
  )
}

export default App