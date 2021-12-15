import Project from './project';
import pubsub from './pubsub';

const initializeStorage = function() {
    //local storage WEB API

    //If there is no local storage
    const container = {};
    container.default = new Project('default');

    const addProject = (obj) => {
        container[obj.name] = obj;
        console.log('I was added to project container!');
    }
    pubsub.subscribe('add-project-to-library', addProject);
};


export { initializeStorage }