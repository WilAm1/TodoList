import css from './styles.css';
import { projectInputUI, ProjectUI } from './UI.js';
import Project from './project.js';


const myProject = new Project('sample');
console.log(myProject);
myProject.add({ name: 'Willy', data: 123 });
myProject.add({ name: 'sadfasf', data: 234 });
myProject.add({ name: 'wil', data: 234 });
console.log(myProject);
myProject.add({ name: 'Willy', data: 324 });

console.log(myProject.getAll())
ProjectUI({
    root: document.querySelector('#project-list'),
    todoContainer: document.querySelector('#main-content')
})
projectInputUI({ root: document.querySelector('#project-btn-container') })