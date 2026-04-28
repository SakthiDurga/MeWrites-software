import React from 'react'
import "./EditorToolbar.css";

const EditorToolbar = ({content,setContent}) => {
  const format = (command, value = null) => {
    document.execCommand(command, false, value);
  }
  return (
    <div className='editor-toolbar'>
      <button onClick={()=>format("bold")}>B</button>
      <button onClick={()=>format("italic")}>I</button>
      <button onClick={()=>format("insertUnorderedList")}>• List</button>
      <button onClick={()=>format("formatBlock","h1")}>H</button>
    </div>
  )
}

export default EditorToolbar
