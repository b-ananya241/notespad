# 📝 NotesPad

A stylish and simple notes application built with React.js and Tailwind CSS. Create, edit, and delete text notes with instant autosave functionality.

<div align="center">
  <img src="https://img.shields.io/badge/React-19.2.3-blue" alt="React Version">
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-blue" alt="TypeScript Version">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.18-blue" alt="Tailwind CSS Version">
  <img src="https://img.shields.io/badge/Vite-7.3.0-yellow" alt="Vite Version">
</div>

## ✨ Features

- **Create Notes**: Add new notes with optional titles and rich text content
- **Edit Notes**: Click to edit existing notes with instant autosave
- **Delete Notes**: Remove notes with confirmation dialog to prevent accidents
- **Auto-save**: Changes are automatically saved as you type (500ms debounce)
- **Persistent Storage**: All notes are saved locally in browser storage
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Timestamps**: Track creation and last modified dates

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Heroicons (SVG icons)
- **Storage**: Browser LocalStorage

## 🚀 Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/b-ananya241/notespad.git
   cd notespad
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📖 Usage

### Creating a Note
1. Use the form on the left side of the screen
2. Enter a title (optional) and note content
3. Click "Create Note" or press Enter

### Editing a Note
1. Click the blue edit icon (✏️) on any note card
2. The note will load into the form for editing
3. Changes are automatically saved as you type
4. Click "Update Note" or "Cancel" when done

### Deleting a Note
1. Click the red trash icon (🗑️) on any note card
2. Confirm deletion in the popup dialog
3. The note will be permanently removed

### Features Overview
- **Left Panel**: Note creation and editing form
- **Right Panel**: Grid view of all your notes
- **Auto-save Indicator**: Shows "💾 Auto-saving changes..." when editing
- **Timestamps**: Display creation and last modified dates
- **Responsive**: Adapts to different screen sizes

## 📁 Project Structure

```
notespad/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Note.tsx          # Individual note card component
│   │   ├── NoteForm.tsx      # Form for creating/editing notes
│   │   └── NoteList.tsx      # Container for all notes
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   └── style.css             # Global styles and Tailwind imports
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## 🎨 Styling

The app uses Tailwind CSS for styling with:
- **Gradient backgrounds**: Blue to indigo gradient
- **Card-based design**: Clean white cards with shadows
- **Interactive elements**: Hover effects and transitions
- **Responsive grid**: Adapts from 1 column on mobile to 3 columns on desktop
- **Icon buttons**: Edit (blue) and delete (red) actions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

### Code Style

- **TypeScript**: Strict type checking enabled
- **React**: Functional components with hooks
- **Tailwind**: Utility-first CSS approach
- **ESLint**: Code quality and consistency


---

**Made with ❤️ using React & Tailwind CSS**

Enjoy organizing your thoughts with NotesPad! 📝✨
