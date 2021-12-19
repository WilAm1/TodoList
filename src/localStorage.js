import Project from './project';
import pubsub from './pubsub';
import ToDo from './todo'

const initializeStorage = function() {
    //local storage WEB API

    //If there is no local storage
    const container = {};
    container.default = new Project('default');

    const addProject = ({ name: projectName }) => {
        //WIl revise later new Project(obj)
        container[projectName] = new Project(projectName);
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
    pubsub.subscribe('convert-todo', ({ data, project }) => {
        const myProject = getProject(project);
        if (myProject) {
            const newTodo = new ToDo({ data })
            myProject.add(newTodo);
        }
        console.log(myProject)

    })


    pubsub.subscribe('add-new-project', addProject);
    pubsub.subscribe('remove-project', removeProject);

    return {
        getProject
    }
};


export { initializeStorage }