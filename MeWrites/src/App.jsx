import Landing from "./pages/Landing/Landing"
import Auth from "./pages/Auth/Auth"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import Editor from './pages/Editor/Editor'
import { useState } from "react"
function App() {
    const [chapters, setChapters] = useState([
    { id: 1, title: "Chapter 1", content: "" }
  ]);

  const [activeChapters, setActiveChapters] = useState(1);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor
          chapters={chapters}
          setChapters={setChapters}
          activeChapters={activeChapters}
          setActiveChapters={setActiveChapters}
        />} />
      </Routes>
    </>
  )
}

export default App
