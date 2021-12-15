import css from './styles.css';
import { projectInputUI, ProjectUI } from './UI.js';
import Project from './project.js';
import pubsub from './pubsub';
import { initializeStorage } from './localStorage';

const onNewProject = ({ name }) => {
    const newProject = new Project(name);
    console.log("i added a new project class")
    pubsub.publish('add-project-to-library', newProject);

};
initializeStorage();
pubsub.subscribe('add-new-project', onNewProject);

ProjectUI({
    root: document.querySelector('#project-list'),
    todoContainer: document.querySelector('#main-content')
})
projectInputUI({ root: document.querySelector('#project-btn-container') })