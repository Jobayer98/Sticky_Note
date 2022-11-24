import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputArea from "./InputArea";
import ShowNote from "./ShowNote";

const Note = () => {
  const [items, setItem] = useState([]);

  const addItem = (noteData) => {
    setItem((prevNote) => {
      return [...prevNote, noteData];
    });
  };

  const deleteNote = (id) => {
    setItem((prevNote) => {
      return prevNote.filter((note, index) => id !== index);
    });
  };

  return (
    <div className="main">
      <div className="main_body">
        <Header />
        <InputArea onSave={addItem} />
        <div className="main_container">
          {items.map((item, index) => (
            <ShowNote
              key={index}
              id={index}
              noteItem={item}
              onChecked={deleteNote}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Note;
