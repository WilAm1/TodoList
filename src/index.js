import css from './styles.css';
import { projectInputUI, ProjectUI } from './UI.js';
import Project from './project.js';
import ToDo from './todo';
import pubsub from './pubsub';
import { initializeStorage } from './localStorage';



initializeStorage();

ProjectUI({
    root: document.querySelector('#project-list'),
    todoContainer: document.querySelector('#main-content')
})
projectInputUI({
    DOMbtn: document.querySelector('#project-btn-container'),
    DOMlist: document.querySelector('#project-list'),
});