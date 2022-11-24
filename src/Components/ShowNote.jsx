import React from "react";
import "../styles.css";

const ShowNote = (props) => {
  const clickDeleteHandler = () => {
    props.onChecked(props.id);
  };
  return (
    <div className="container show_container">
      <h4 className="notes">{props.noteItem.title}</h4>
      <p className="notes">{props.noteItem.content}</p>
      <button className="btn delete_btn" onClick={clickDeleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default ShowNote;
