import css from './styles.css';
import { projectInputUI, ProjectUI } from './UI.js';


console.log("hello world")

ProjectUI({ root: document.querySelector('#project-list') })
projectInputUI({ root: document.querySelector('#project-btn-container') })