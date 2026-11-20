import { useEffect, useState } from 'react'
import { SettingsContext } from './SettingsContext.js'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'

function App() {
  const [largeText, setLargeText] = useState(
    () => localStorage.getItem('largeText') === 'true'
  )

  useEffect(() => {
    localStorage.setItem('largeText', String(largeText))
  }, [largeText])

	return (
		<SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Juan Dela Cruz" />
      </div>
    </SettingsContext>
	)
}

export default App