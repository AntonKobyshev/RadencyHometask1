import Category from './Category.js';

export class InvalidNoteFormError extends Error {
  constructor() {
    super('Invalid note form. Please, check all the values.');
  }
}

export default function validateNoteForm(formData) {
  const name = formData.get('name');
  const content = formData.get('content');
  const categoryIndexString = formData.get('categoryIndex');

  const categoryIndex = parseInt(categoryIndexString);

  if (
    isNaN(categoryIndex) ||
    categoryIndex < 0 ||
    categoryIndex >= Category.categories.length
  ) {
    throw new InvalidNoteFormError();
  }

  return {
    name,
    content,
    categoryIndex,
  };
}