import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });
  const [isClick,setClick] = useState(false)
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
  function handleClick(){
    setClick(true)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
      {isClick&&<input
          value={inputText.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />}
        <textarea
        onClick={handleClick}
          value={inputText.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isClick?3:1}
        />
        <Zoom in={isClick}>
          <Fab onClick={() => props.onClicked(inputText)}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
