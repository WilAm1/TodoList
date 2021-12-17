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
pubsub.subscribe('add-new-project', onNewProject);
initializeStorage();

ProjectUI({
    root: document.querySelector('#project-list'),
    todoContainer: document.querySelector('#main-content')
})
projectInputUI({
    DOMbtn: document.querySelector('#project-btn-container'),
    DOMlist: document.querySelector('#project-list'),
});