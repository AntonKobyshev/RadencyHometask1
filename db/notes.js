import Note from '../js/Note.js';
import Category from '../js/Category.js';


const Task = Category.categories[0];
const RandomThought = Category.categories[1];
const Idea = Category.categories[2];

const notes = [
  new Note(
    'Shopping list',
    'Tomatoes, bread',
    Task
  ),
  new Note(
    'The theory of evolution',
    'The evolution theory learn',
    RandomThought
  ),
  new Note(
    'New Feature',
    'Implement new feature 3/5/2021, 5/5/2021',
    Idea
  ),
  new Note(
    'Some idea',
    'Find solution',
    Task
  ),
  new Note(
    'Plan weekend trip',
    'Write weekend trip',
    Task
  ),
  new Note(
    'Books',
    `Read 10 new books till the end of the year`,
    Task
  ),
  new Note(
    'Appointment',
    'Go to the appointment with Sara 20/10/2023',
    RandomThought
  ),
];
export default notes;