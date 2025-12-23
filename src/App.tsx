import React, { useState, useEffect } from 'react';
import { NoteList } from './components/NoteList';
import { NoteForm } from './components/NoteForm';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes).map((note: any) => ({
        ...note,
        createdAt: new Date(note.createdAt),
        updatedAt: new Date(note.updatedAt),
      }));
      setNotes(parsedNotes);
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title: string, content: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: title.trim() || 'Untitled Note',
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes([newNote, ...notes]);
  };

  const updateNote = (id: string, title: string, content: string) => {
    setNotes(notes.map(note =>
      note.id === id
        ? { ...note, title: title.trim() || 'Untitled Note', content, updatedAt: new Date() }
        : note
    ));
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const startEditing = (note: Note) => {
    setEditingNote(note);
  };

  const cancelEditing = () => {
    setEditingNote(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">📝 NotesPad</h1>
          <p className="text-gray-600">Create, edit, and organize your thoughts</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <NoteForm
              onAddNote={addNote}
              editingNote={editingNote}
              onUpdateNote={updateNote}
              onCancelEdit={cancelEditing}
            />
          </div>

          <div className="lg:col-span-2">
            <NoteList
              notes={notes}
              onEditNote={startEditing}
              onDeleteNote={deleteNote}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
