import { useState } from "react";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Note from "./Note/Note";
import CreateNote from "./CreateNote/CreateNote";

export type Note = {
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (newNote: Note) => {
    if (newNote.content) {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
    return;
  };

  const deleteNote = (id: number) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => index !== id);
    });
  };

  return (
    <div className="App">
      <Header />
        <main style={{flexGrow: 1}}> 
          <CreateNote onAdd={addNote} />
          <div className="notesDisplay">
            {notes.map((note, index) => (
              <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
              />
            ))}
          </div>
        </main>
      <Footer />
    </div>
  );
};

export default App;
