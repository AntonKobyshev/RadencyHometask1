function findDates(string) {
  return Array.from(string.matchAll(/\d+\/\d+\/\d+/g), (match) => match[0]) || [];
}

export default class Note {
  constructor(name, content, category) {
    this.name = name;
    this.content = content;
    this.category = category;
    this.creationDate = new Date();
    this.isArchived = false;
  }

  toRenderObject() {
    const dateFormatter = new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const formattedCreationDate = dateFormatter.format(this.creationDate);

    return {
      name: this.name,
      creationDate: formattedCreationDate,
      categoryName: this.category.name,
      content: this.content,
      dates: findDates(this.content).join(', '),
      isArchived: this.isArchived,
      categoryIconUrl: this.category.iconUrl,
    };
  }
}