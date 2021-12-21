import css from './styles.css';
import { projectInputUI, ProjectUI, ToDoUI } from './UI.js';

import { initializeStorage } from './localStorage';


const projectContainer = document.querySelector('#project-list');
const todoContainer = document.querySelector('#main-content');

initializeStorage();

ToDoUI({ container: todoContainer });

ProjectUI({
    root: projectContainer,
    todoContainer
})
projectInputUI({
    DOMbtn: document.querySelector('#project-btn-container'),
    DOMlist: projectContainer,
});