import openNoteForm from './openNoteForm.js';
import notes from '../db/notes.js';
import { getShowArchived, setShowArchived, editNote, deleteAllNotes } from './editNote.js';

const headArchiveButton = document.querySelector('#head-archive-button');
const deleteAllButton = document.querySelector('#head-delete-button');
const newNoteButton = document.querySelector('#create-note-button');

editNote();

headArchiveButton.addEventListener('click', (event) => {
  const currentShowArchived = getShowArchived();
  const updatedShowArchived = !currentShowArchived;
  headArchiveButton.classList.toggle('from-archive-button', updatedShowArchived);
  headArchiveButton.classList.toggle('to-archive-button', !updatedShowArchived);
  setShowArchived(updatedShowArchived);
  editNote();
});

newNoteButton.addEventListener('click', () => {
  openNoteForm(null, notes, editNote);
});

deleteAllButton.addEventListener('click', () => {
  deleteAllNotes();
});