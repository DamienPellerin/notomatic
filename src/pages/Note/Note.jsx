import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";

export function Note(props) {
  const [isEditable, setIsEditable] = useState(false);
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === noteId)
  );

  function submit() {
    setIsEditable(false);
  }
  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickTrash={() => ""}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
