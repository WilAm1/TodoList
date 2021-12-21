import css from './styles.css';
import { projectInputUI, ProjectUI, ToDoUI } from './UI.js';

import { initializeStorage } from './localStorage';


const projectContainer = document.querySelector('#project-list');
const todoContainer = document.querySelector('#main-content');
const inbox = document.querySelector("#inbox");

ToDoUI({ container: todoContainer });
ProjectUI({
    root: projectContainer,
    todoContainer
})
initializeStorage({ inbox, todoContainer });


projectInputUI({
    DOMbtn: document.querySelector('#project-btn-container'),
    DOMlist: projectContainer,
});