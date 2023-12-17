import { useState } from "react";
import { Note } from "../App";
import AddIcon from "@mui/icons-material/Add";
import style from './CreateNote.module.css'

interface createNoteProps {
  onAdd: (note: Note) => void;
}

type onChangeHandler = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export default function(props: createNoteProps) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event: onChangeHandler) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  return (
    <form className={style.CreateForm}>
      <input
        name="title"
        className={style.TitleInput}
        type="text"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />
      <textarea
        name="content"
        className={style.TitleInput}
        value={note.content}
        placeholder="Take a note..."
        onChange={handleChange}
      />
      <button
        onClick={submitNote}
        disabled={!!(!note.content.length)}
        className={style.AddNoteButton}
        aria-label='addButton'
      >
        <AddIcon />
      </button>
    </form>
  );
};