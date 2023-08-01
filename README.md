Hometask #1 | JavaScript

The task is to create a notes app in JS as a web app. Users can add, edit and remove notes.
List of notes is displayed in a form of table (HTML representation may vary: table, divs etc). The columns are time of creation, note content, note category. Categories are predefined: “Task”, “Random Thought”, “Idea”.
Notes in the table should also display a list of dates mentioned in this note as a separate column. For example, for a note “I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021” the dates column is “3/5/2021, 5/5/2021”.
Users can archive notes. Archived notes are not shown in the notes list. Users can view archived notes and unarchive them.
There should also be a summary table which counts notes by categories: separately for active and archived. The table is updated whenever users perform some action on notes. The summary table is shown on the same page as the notes table.
There is no need to implement data storage. Simply create a JS variable which stores the data and prepopulate it with 7 notes so that they are shown when the page is reloaded.

Aim to write clean code.
Write small functions, pure functions.
Adhere to the single responsibility principle. Separate the logic of rendering and data processing, ideally to separate files.
Give variables and functions descriptive names.

The goal of the task is to let to get better acquainted with the JavaScript language and browser DOM API. If you don’t know some of the APIs needed for the task, it might use these resources as references:
https://exploringjs.com/impatient-js https://developer.mozilla.org/ru/docs/Web/API/Document

While working on the task should utilize all of the following:
JavaScript
Import / export
Array methods: map, reduce, filter (some of them)
Array spread operator
Regular expressions
Try / catch
DOM API
document.querySelector
document.addEventListener

Another skil should practice is working with Git and Github. Implement the following git requirements while working on the task:
Make at least 3 commits
Push commits to the develop branch to the Github repository
When finished, create a pull request to the master branch
Try several git commands
See commit log
See diff between commits
Make some code changes and see git status
Perform reset --hard
https://git-scm.com/docs
https://guides.github.com/introduction/flow/

![alt text](https://github.com/AntonKobyshev/RadencyHometask1/blob/main/img/readme-img.jpg?raw=true)
