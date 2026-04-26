import React from 'react'
import "./Editor.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import EditorToolbar from '../../components/EditorToolbar/EditorToolbar'
import WordCounter from '../../components/WordCounter/WordCounter'
import { useState } from "react";

const Editor = ({chapters =  [], setChapters, activeChapters, setActiveChapters}) => {
  const currentChapter = chapters?.find((ch)=>ch.id == activeChapters);
  const updateContent = (value) => {
    setChapters(
      chapters.map((ch)=>ch.id == activeChapters?{...ch, content:value}:ch)
    );
  };
  console.log("chapters:", chapters);
console.log("active:", activeChapters);
  return (
    <div className='editor'>
      <Sidebar
      chapters={chapters}
      activeChapters={activeChapters}
      setChapters={setChapters}
      setActiveChapters={setActiveChapters}
      />
      <div className="editor-main">
        <h2>{currentChapter?.title}</h2>
        <EditorToolbar
          content={currentChapter?.content || ""}
          setContent={updateContent}
        />
        <textarea
          className='editor-area'
          value={currentChapter?.content || ""}
          onChange={(e)=>updateContent(e.target.value)}
          placeholder='Start Writing...'
        />
        <WordCounter content={currentChapter?.content || ""} />
      </div>
    </div>
  )
}

export default Editor
