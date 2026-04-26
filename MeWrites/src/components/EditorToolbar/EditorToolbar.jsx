import React from 'react'
import "./EditorToolbar.css";

const EditorToolbar = ({content,setContent}) => {
  const insertText = (text) => {setContent(content+text)};
  return (
    <div className='editor-toolbar'>
      <button onClick={()=>insertText(" **bold** ")}>B</button>
      <button onClick={()=> insertText(" _italic_ ")}>I</button>
      <button onClick={()=> insertText("\n# Heading\n")}>H</button>
      <button onClick={()=> insertText(" \n- point\n")}>List</button>
    </div>
  )
}

export default EditorToolbar
