import React from 'react';
import { Note as NoteType } from '../App';

interface NoteProps {
  note: NoteType;
  onEdit: (note: NoteType) => void;
  onDelete: (id: string) => void;
}

export const Note: React.FC<NoteProps> = ({ note, onEdit, onDelete }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getPreviewText = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800 flex-1 mr-4 line-clamp-2">
          {note.title}
        </h3>
        <div className="flex space-x-2 flex-shrink-0">
          <button
            onClick={() => onEdit(note)}
            className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors"
            title="Edit note"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this note?')) {
                onDelete(note.id);
              }
            }}
            className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 transition-colors"
            title="Delete note"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-wrap">
        {getPreviewText(note.content)}
      </p>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>Created: {formatDate(note.createdAt)}</span>
        {note.updatedAt.getTime() !== note.createdAt.getTime() && (
          <span>Updated: {formatDate(note.updatedAt)}</span>
        )}
      </div>
    </div>
  );
};
