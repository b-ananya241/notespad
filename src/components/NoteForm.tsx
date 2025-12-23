import React, { useState, useEffect } from 'react';
import { Note as NoteType } from '../App';

interface NoteFormProps {
  onAddNote: (title: string, content: string) => void;
  editingNote: NoteType | null;
  onUpdateNote: (id: string, title: string, content: string) => void;
  onCancelEdit: () => void;
}

export const NoteForm: React.FC<NoteFormProps> = ({
  onAddNote,
  editingNote,
  onUpdateNote,
  onCancelEdit,
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Update form when editing note changes
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) return;

    if (editingNote) {
      onUpdateNote(editingNote.id, title, content);
      onCancelEdit();
    } else {
      onAddNote(title, content);
      setTitle('');
      setContent('');
    }
  };

  const handleCancel = () => {
    onCancelEdit();
    setTitle('');
    setContent('');
  };

  // Auto-save functionality - save on every keystroke with debouncing
  useEffect(() => {
    if (editingNote && (title !== editingNote.title || content !== editingNote.content)) {
      const timeoutId = setTimeout(() => {
        onUpdateNote(editingNote.id, title, content);
      }, 500); // 500ms delay

      return () => clearTimeout(timeoutId);
    }
  }, [title, content, editingNote, onUpdateNote]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {editingNote ? 'Edit Note' : 'Create New Note'}
        </h2>
        {editingNote && (
          <button
            onClick={handleCancel}
            className="text-gray-500 hover:text-gray-700 p-1 rounded hover:bg-gray-100 transition-colors"
            title="Cancel editing"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Note title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
          />
        </div>

        <div>
          <textarea
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
            required
          />
        </div>

        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={!content.trim()}
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {editingNote ? 'Update Note' : 'Create Note'}
          </button>

          {editingNote && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {editingNote && (
        <div className="mt-4 text-sm text-gray-500 text-center">
          💾 Auto-saving changes...
        </div>
      )}
    </div>
  );
};
