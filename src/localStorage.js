import Project from './project';
import pubsub from './pubsub';
import ToDo from './todo'

const initializeStorage = function({ inbox, todoContainer }) {
    //local storage WEB API

    const container = {};
    container.default = new Project('default');

    inbox.addEventListener('click', (e) => {
        pubsub.publish('default-project', e);
    });
    //If there is no local storage


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
    pubsub.subscribe('add-todo', ({ data, project }) => {
        const myProject = getProject(project);
        if (myProject) {
            if (myProject.get(data.title)) {
                pubsub.publish('invalid-todo', { title: data.title });
                console.log('successfully blocked!')
                return
            }

            const newTodo = new ToDo(data)
            myProject.add(newTodo);
            pubsub.publish('render-todo', { projectName: myProject.name, todo: newTodo });
        }
    });
    pubsub.subscribe('remove-todo', ({ projectName, todo }) => {
        console.log(projectName)
        const project = getProject(projectName);
        if (project) {
            project.remove(todo.title);
            console.log(project);
        }
    });
    pubsub.subscribe('project-click', ({ name }) => {
        const project = getProject(name);
        const allTasks = project.getAll();
        if (allTasks) {
            for (const [key, value] of Object.entries(allTasks)) {
                pubsub.publish('render-todo', { projectName: key, todo: value })
            }
        }
    });



    pubsub.subscribe('add-new-project', addProject);
    pubsub.subscribe('remove-project', removeProject);

    return {
        getProject
    }
};


export { initializeStorage }