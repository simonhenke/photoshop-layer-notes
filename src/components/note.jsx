import React from "react";

const Note = ({note, showNames}) => { 
  return (
    <div className="note">
      {showNames && <span className="layerNames">{note.names.join(', ')}</span>}
      <span>{note.text}</span>
    </div>
  );
}

export default Note;
