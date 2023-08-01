function wrapIntoTd(element) {
  const tdElement = document.createElement('td');
  tdElement.appendChild(element);
  return tdElement;
}

export default function createNoteElement({
  categoryIconUrl,
  name,
  creationDate,
  categoryName,
  content,
  dates,
  isArchived,
  editClickHandler,
  deleteClickHandler,
  archiveClickHandler,
}) {
  const noteElement = document.createElement('tr');

  const categoryIconElement = document.createElement('img');
  categoryIconElement.src = categoryIconUrl;
  categoryIconElement.alt = 'Category icon';
  categoryIconElement.classList.add('category-icon');

  const nameCell = wrapIntoTd(document.createTextNode(name));
  nameCell.classList.add('td-bold');
  const creationDateCell = wrapIntoTd(document.createTextNode(creationDate));
  const categoryNameCell = wrapIntoTd(document.createTextNode(categoryName));
  const contentCell = wrapIntoTd(document.createTextNode(content));
  const datesCell = wrapIntoTd(document.createTextNode(dates));

  const editButtonElement = document.createElement('button');
  editButtonElement.classList.add('edit-button');
  editButtonElement.addEventListener('click', editClickHandler);

  const deleteButtonElement = document.createElement('button');
  deleteButtonElement.classList.add('delete-button');
  deleteButtonElement.addEventListener('click', deleteClickHandler);

  const archiveButtonElement = document.createElement('button');
  archiveButtonElement.className = isArchived
    ? 'from-archive-button'
    : 'to-archive-button';
  archiveButtonElement.addEventListener('click', archiveClickHandler);

  const editButtonCell = wrapIntoTd(editButtonElement);
  const archiveButtonCell = wrapIntoTd(archiveButtonElement);
  const deleteButtonCell = wrapIntoTd(deleteButtonElement);

  noteElement.append(
    wrapIntoTd(categoryIconElement),
    nameCell,
    creationDateCell,
    categoryNameCell,
    contentCell,
    datesCell,
    editButtonCell,
    archiveButtonCell,
    deleteButtonCell
  );

  return noteElement;
}