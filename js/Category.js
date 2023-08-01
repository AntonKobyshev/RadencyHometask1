class Category {
  constructor(name, iconUrl) {
    this.name = name;
    this.iconUrl = iconUrl;
  }

  static categories = [
    new Category('Task', '/icons/task_icon.svg'),
    new Category('Random thought', '/icons/random_thought_icon.svg'),
    new Category('Idea', '/icons/idea_icon.svg'),
  ];
}

export default Category;