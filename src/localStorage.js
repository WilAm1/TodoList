import Project from './project';
import pubsub from './pubsub';

const initializeStorage = function() {
    //local storage WEB API

    //If there is no local storage
    const container = {};
    container.default = new Project('default');

    const addProject = (obj) => {
        //WIl revise later new Project(obj)
        container[obj.name] = new Project(obj);
        console.log(`Project ${obj.name} was added!`);
    }
    const getProject = (name) => {
        return container.name;
    }
    pubsub.subscribe('add-new-project', addProject);
};


export { initializeStorage }