import Category from './Category.js';
import createNoteElement from './createNoteElement.js';
import openNoteForm from './openNoteForm.js';
import createCategorySummaryElement from './createCategorySummaryElement.js';
import notes from '../db/notes.js';


const notesTableBodyElement = document.querySelector('#notes-table-body');
const summaryTableBodyElement = document.querySelector('#summary-table-body');

let showArchived = false;

export function getShowArchived() {
  return showArchived;
}

export function setShowArchived(value) {
  showArchived = value;
}


function handleEditClick(note) {
  openNoteForm(notes.indexOf(note), notes, editNote);
}

function handleArchiveClick(note) {
  note.isArchived = !note.isArchived;
  editNote();
}

function handleDeleteClick(note) {
  notes.splice(notes.indexOf(note), 1);
  editNote();
}

export function editNote() {
  notesTableBodyElement.classList.toggle('show-archived', showArchived);

  const filteredNotes = notes.filter((note) => note.isArchived === showArchived);

  notesTableBodyElement.textContent = '';
  notesTableBodyElement.append(
    ...filteredNotes.map((note) =>
      createNoteElement({
        ...note.toRenderObject(),
        editClickHandler: () => handleEditClick(note),
        archiveClickHandler: () => handleArchiveClick(note),
        deleteClickHandler: () => handleDeleteClick(note),
      })
    )
  );


  summaryTableBodyElement.textContent = '';
  summaryTableBodyElement.append(
    ...Category.categories.map((category) => createCategorySummaryElement({
      name: category.name,
      iconUrl: category.iconUrl,
      activeNumber: notes.filter(
        (note) => note.category === category && !note.isArchived
      ).length,
      archivedNumber: notes.filter(
        (note) => note.category === category && note.isArchived
      ).length,
    }))
  );

}


