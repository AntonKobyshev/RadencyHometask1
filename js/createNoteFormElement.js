import Category from './Category.js';

function generateCategoryOption(category, value) {
  const optionElement = document.createElement('option');
  optionElement.value = value;
  optionElement.textContent = category.name;
  return optionElement;
}

export default function createNoteFormElement({
  submitHandler,
  initialValues,
}) {
  const noteFormElement = document.createElement('form');
  noteFormElement.id = 'note-form';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Name';
  nameInput.name = 'name';
  nameInput.required = true;
  nameInput.classList.add('regular-input');
  noteFormElement.appendChild(nameInput);

  const categorySelect = document.createElement('select');
  categorySelect.name = 'categoryIndex';
  categorySelect.classList.add('regular-input');
  Category.categories.forEach((category, index) => {
    categorySelect.appendChild(generateCategoryOption(category, index));
  });
  noteFormElement.appendChild(categorySelect);

  const contentTextarea = document.createElement('textarea');
  contentTextarea.placeholder = 'Content';
  contentTextarea.name = 'content';
  contentTextarea.classList.add('regular-input');
  contentTextarea.rows = 10;
  contentTextarea.cols = 50;
  noteFormElement.appendChild(contentTextarea);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.classList.add('create-button');
  submitButton.textContent = 'Submit';
  noteFormElement.appendChild(submitButton);

  for (const valueKey in initialValues) {
    const inputElement = noteFormElement.querySelector(`*[name="${valueKey}"]`);
    if (inputElement !== null) {
      inputElement.value = initialValues[valueKey];
    }
  }

  noteFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    submitHandler(event);
  });

  return noteFormElement;
}
