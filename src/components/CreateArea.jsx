import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setInputText({ title: "", content: "" });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputText.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={inputText.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={() => props.onClicked(inputText)}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
