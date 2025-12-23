import React from 'react';
import { Note as NoteType } from '../App';
import { Note } from './Note';

interface NoteListProps {
  notes: NoteType[];
  onEditNote: (note: NoteType) => void;
  onDeleteNote: (id: string) => void;
}

export const NoteList: React.FC<NoteListProps> = ({ notes, onEditNote, onDeleteNote }) => {
  if (notes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No notes yet</h3>
        <p className="text-gray-500">Create your first note to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Your Notes ({notes.length})</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onEdit={onEditNote}
            onDelete={onDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};
