import React, {useState, useEffect} from "react";
import Note from './components/note';
const photoshop = require("photoshop");
const app = photoshop.app

const events = [{event: 'select'}, {event: 'selectNoLayers'}, {event: 'make'}, {event: 'delete'}]

const App = () => { 
  const [notes, setNotes] = useState([]); // {text: 'hello', names: ['layer 1', 'layer 2']}
  const [text, setText] = useState("");
  const [activeLayers, setActiveLayers] = useState(app.activeDocument?.activeLayers || []);

  const layerNames = activeLayers.map(l => l.name).join(', ');

  const onSelect = () => setActiveLayers(app.activeDocument.activeLayers);

  useEffect(() => {
    photoshop.action.addNotificationListener(events, onSelect);
    return () => {
      photoshop.action.removeNotificationListener(events, onSelect);
    }
  })

  const notesByLayers = (note) => activeLayers.map(l => l.name).some(n => note.names.includes(n))
  const activeNotes = activeLayers.length ? notes.filter(notesByLayers) : notes

  return (
    <div className="app">
      <sp-heading>{activeLayers.length ? "Notes for " + layerNames : "All notes"}:</sp-heading>
      <sp-textarea onInput={e => setText(e.target.value)}>
        <sp-label slot="label">New Note</sp-label>
      </sp-textarea>
      <sp-button 
        disabled={activeLayers.length && text ? null : 'disabled'} 
        onClick={() => setNotes([...notes, {text, names: activeLayers.map(l => l.name)}])}>
        add note
      </sp-button>
      <div className="notes">
        {activeNotes.map((note, idx) => <Note note={note} showNames={activeLayers.length !== 1} key={idx}/>)}
      </div>
    </div>
  );
}

export default App;
