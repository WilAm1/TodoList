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

    return { getProjects, updateProject, removeProject }
})();


const initializeStorage = function({ inbox, todoContainer }) {

    let container;

    if (savedProjects) {
        container = savedProjects.getProjects();
        // console.log(container);

    } else {
        //if there is no local function called savedProjects
        container = {
            default: new Project('default')
        };
    }


    // #TODO Move to appropriate module
    inbox.addEventListener('click', ({ target }) => {
        pubsub.publish('default-project', target.dataset.name);
    });


    const addProject = ({ name: projectName }) => {
        // hmm checks if there is same name
        if (container[projectName]) {
            return
        }
        container[projectName] = new Project(projectName);
        //Updates the key in the local Storage
        if (savedProjects) {
            savedProjects.updateProject(container[projectName]);
        }
    };
    const removeProject = ({ name }) => {
        if (container[name]) {
            if (savedProjects) {
                savedProjects.removeProject(name);
            }
            delete container[name];
        }
    };
    const getProject = (name) => {
        if (container[name]) {
            return container[name]
        }
        return null;
    };

    pubsub.subscribe('update-todo', ({ data, project, todoName }) => {
        console.log(getProject(project).remove(todoName));
        const updatedToDo = new ToDo(data);
        const success = getProject(project).add(updatedToDo);
        if (savedProjects) {
            savedProjects.updateProject(getProject(project));
            console.log('saved on localStorage')
        }
        console.log(success);
        // must use default project . But we can't get project button
        pubsub.publish('default-project', project);

    });

    pubsub.subscribe('add-todo', ({ data, project }) => {
        const myProject = getProject(project);
        if (myProject) {
            //error handling for blocking same name todo
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
        const project = getProject(projectName);
        if (project) {
            project.remove(todo.title);
            if (savedProjects) {
                savedProjects.updateProject(project);
            }
        }
    });


    pubsub.subscribe('project-click', ({ name }) => {
        const project = getProject(name);
        const allTasks = project.getAll();
        // console.log(allTasks)
        if (Object.keys(allTasks).length === 0 && allTasks.constructor === Object) {
            console.log('I have no tasks!')
            return
        }
        for (const [, value] of Object.entries(allTasks)) {
            pubsub.publish('render-todo', { projectName: name, todo: value })
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
    pubsub.publish('default-project', inbox.dataset.name);
    pubsub.publish('fetch-projects')


    return {
        getProject
    }
};


export { initializeStorage }