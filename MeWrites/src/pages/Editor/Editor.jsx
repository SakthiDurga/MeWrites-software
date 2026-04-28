import React, { useRef, useEffect } from "react";
import "./Editor.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import EditorToolbar from "../../components/EditorToolbar/EditorToolbar";
import WordCounter from "../../components/WordCounter/WordCounter";

const Editor = ({ chapters = [], setChapters, activeChapters, setActiveChapters }) => {

  // 1. Create reference to editor div
  const editorRef = useRef(null);

  // 2. Find currently selected chapter
  const currentChapter = chapters.find(
    (ch) => ch.id === activeChapters
  );

  // 3. Update content of current chapter
  const updateContent = () => {
    const html = editorRef.current.innerHTML;

    setChapters(
      chapters.map((ch) =>
        ch.id === activeChapters
          ? { ...ch, content: html }
          : ch
      )
    );
  };

  // 4. Load content when chapter changes
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = currentChapter?.content || "";
    }
  }, [activeChapters]);

  return (
    <div className="editor">

      {/* Sidebar */}
      <Sidebar
        chapters={chapters}
        activeChapters={activeChapters}
        setChapters={setChapters}
        setActiveChapters={setActiveChapters}
      />

      {/* Editor Area */}
      <div className="editor-main">
        <h2>{currentChapter?.title || "No Chapter Selected"}</h2>

        <EditorToolbar  />

        <div
          ref={editorRef}
          className="editor-area"
          contentEditable
          dir="ltr"
          suppressContentEditableWarning={true}
          onInput={updateContent}
        />

        <WordCounter content={currentChapter?.content || ""} />
      </div>
    </div>
  );
};

export default Editor;