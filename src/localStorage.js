import Project from './project';
import pubsub from './pubsub';
import todo from './todo';
import ToDo from './todo'


//Local Storage Stuff
const savedProjects = (() => {
    const defaultProject = localStorage.getItem('default');
    if (!defaultProject) {
        localStorage.setItem('default', JSON.stringify(new Project('default')));
    }

    const updateProject = (project) => {
        const name = project.name;
        const JSONProject = JSON.stringify(project);
        localStorage.setItem(name, JSONProject);
    };
    const removeProject = (project) => {
        localStorage.removeItem(project)
    };

    const getProjects = () => {
        const myContainer = {};
        for (let [projectName, project] of Object.entries(localStorage)) {
            project = JSON.parse(project);
            myContainer[projectName] = new Project(projectName);

            for (let [, todoObj] of Object.entries(project.container)) {
                todoObj = JSON.parse(todoObj);
                console.log(todoObj);
                myContainer[projectName].add(new ToDo(todoObj));
            }
            console.log(myContainer[projectName]);
        }
        return myContainer;
    };

    pubsub.subscribe('fetch-local-storage', getProjects)

    return { getProjects }
})();
const initializeStorage = function({ inbox, todoContainer }) {
    //local storage WEB API

    //If there is no local storage
    let container;

    if (savedProjects) {
        container = savedProjects.getProjects();

    } else {
        container = {
            default: new Project('default')
        };
        // container.default = new Project('default');
    }

    inbox.addEventListener('click', (e) => {
        pubsub.publish('default-project', e);
    });


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
        if (Object.keys(allTasks).length === 0 && allTasks.constructor === Object) {
            console.log('I have no tasks!')
            return
        }
        for (const [key, value] of Object.entries(allTasks)) {
            pubsub.publish('render-todo', { projectName: key, todo: value })
        }
    });



    pubsub.subscribe('add-new-project', addProject);
    pubsub.subscribe('remove-project', removeProject);
    //renders the inbox project at DOMLoad
    pubsub.publish('default-project', { target: inbox });


    return {
        getProject
    }
};


export { initializeStorage }