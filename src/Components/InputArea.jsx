import React, { useState } from "react";

const InputArea = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleHandler = (e) => {
    const noteTitle = e.target.value;
    setTitle(noteTitle);
  };
  const contentHandler = (e) => {
    const noteContent = e.target.value;
    setContent(noteContent);
  };

  const clickHandler = () => {
    const noteData = {
      title,
      content
    };
    if (noteData.title.length > 0 && noteData.content.length > 0) {
      props.onSave(noteData);
    }

    setTitle("");
    setContent("");
  };

  return (
    <div className="container">
      <div className="inputContainer">
        <input
          className="input"
          id="title"
          onChange={titleHandler}
          type="text"
          placeholder="Title"
          value={title}
        />
        <textarea
          className="input"
          id="content"
          onChange={contentHandler}
          name=""
          cols="30"
          rows="3"
          placeholder="Take a note..."
          value={content}
        ></textarea>
      </div>
      <button className="btn btn_add" onClick={clickHandler}>
        Add
      </button>
    </div>
  );
};

export default InputArea;
