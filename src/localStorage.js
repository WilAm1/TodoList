import Project from './project';
import pubsub from './pubsub';


const initializeStorage = function() {
    //local storage WEB API

    //If there is no local storage
    const container = {};
    container.default = new Project('default');

    const addProject = ({ name: projectName }) => {
        //WIl revise later new Project(obj)
        container[projectName] = new Project(projectName);
        console.log(`Project ${container[projectName]} was added to storage!!`);
        console.log(container)
    };
    const removeProject = ({ name }) => {
        if (container[name]) {
            delete container[name];
        }
    };
    const getProject = (name) => {
        if (container[name]) {
            return container[name]
        }
        return null;
    };


    pubsub.subscribe('add-new-project', addProject);
    pubsub.subscribe('remove-project', removeProject);

    return {
        getProject
    }
};


export { initializeStorage }