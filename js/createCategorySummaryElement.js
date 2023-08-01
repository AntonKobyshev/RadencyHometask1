function createCategorySummaryElement({ iconUrl, name, activeNumber, archivedNumber }) {
  const categorySummaryElement = document.createElement('tr');

  const iconCell = document.createElement('td');
  const iconImage = document.createElement('img');
  iconImage.src = iconUrl;
  iconImage.alt = 'Category icon';
  iconImage.classList.add('category-icon');
  iconCell.appendChild(iconImage);
  categorySummaryElement.appendChild(iconCell);

  const nameCell = document.createElement('td');
  nameCell.textContent = name;
  categorySummaryElement.appendChild(nameCell);
  nameCell.classList.add('td-bold');

  const activeNumberCell = document.createElement('td');
  activeNumberCell.textContent = activeNumber;
  categorySummaryElement.appendChild(activeNumberCell);

  const archivedNumberCell = document.createElement('td');
  archivedNumberCell.textContent = archivedNumber;
  categorySummaryElement.appendChild(archivedNumberCell);

  return categorySummaryElement;
}

export default createCategorySummaryElement;
