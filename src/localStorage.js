import Project from './project';
import pubsub from './pubsub';
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
                const newTodo = new ToDo(todoObj);
                myContainer[projectName].add(newTodo);
            }

        }
        return myContainer;
    };

    pubsub.subscribe('fetch-local-storage', getProjects)

    return { getProjects, updateProject }
})();


const initializeStorage = function({ inbox, todoContainer }) {

    let container;

    if (savedProjects) {
        container = savedProjects.getProjects();
        console.log(container);

    } else {
        //if there is no local function called savedProjects
        container = {
            default: new Project('default')
        };
    }


    // #TODO Move to appropriate module
    inbox.addEventListener('click', (e) => {
        pubsub.publish('default-project', e);
    });


    const addProject = ({ name: projectName }) => {
        container[projectName] = new Project(projectName);
        //Updates the key in the local Storage
        if (savedProjects) {
            savedProjects.updateProject(container[projectName]);
        }
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
            if (savedProjects) {
                savedProjects.updateProject(myProject);
            }
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

    pubsub.subscribe('fetch-projects', () => {
        for (const [key] of Object.entries(container)) {
            if (key === 'default') continue
            pubsub.publish('add-new-project', { name: key })
        }
    });


    pubsub.subscribe('add-new-project', addProject);
    pubsub.subscribe('remove-project', removeProject);
    //renders the inbox project at DOMLoad
    pubsub.publish('default-project', { target: inbox });
    pubsub.publish('fetch-projects')


    return {
        getProject
    }
};


export { initializeStorage }