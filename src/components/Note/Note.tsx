import { Note } from "../App";
import style from "./Note.module.css";

interface NoteProps extends Note {
  id: number;
  onDelete: (id: number) => void;
}

export default function (props: NoteProps) {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className={style.Note}>
      {props.title && <div className={style.Title}>{props.title}</div>}
      <p className={style.Content}>{props.content}</p>
      <div className={style.Footer}>
        <button className={style.Button} onClick={handleClick}>
          DELETE
        </button>
      </div>
    </div>
  );
}
