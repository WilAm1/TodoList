import css from './styles.css';
import { projectInputUI, ProjectUI, ToDoUI } from './UI.js';
import Project from './project.js';
import ToDo from './todo';
import pubsub from './pubsub';
import { initializeStorage } from './localStorage';


const todoContainer = document.querySelector('#project-list');
initializeStorage();

ToDoUI({ container: todoContainer });

ProjectUI({
    root: todoContainer,
    todoContainer: document.querySelector('#main-content')
})
projectInputUI({
    DOMbtn: document.querySelector('#project-btn-container'),
    DOMlist: todoContainer,
});