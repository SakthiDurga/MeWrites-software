import React from 'react'
import "./Sidebar.css";

const Sidebar = ({chapters,activeChapters,setActiveChapters,setChapters}) => {
  const addChaper = () => {
    const newChapter = {
      id: Date.now(), title: `Chapter ${chapters.length + 1}`, content:""
    };
    setChapters([...chapters,newChapter]);
    setActiveChapters(newChapter.id);
  };
  return (
    <div className='sidebar'>
      <button onClick={addChaper}>+ Add Chapter</button>
      <h4>Chapters</h4>
      {
        chapters.map((ch)=>(
          <div key={ch.id} className={activeChapters == ch.id ? "chapter-active":""} onClick={()=>setActiveChapters(ch.id)}>
            <p>{ch.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar
