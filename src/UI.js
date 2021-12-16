import pubsub from './pubsub';


const ToDoUI = () => {

};
const renderTodo = () => {

}

const renderAllTodos = () => {
    //Will render all todos
    //fetchs the data from ProjectUI
    console.log('I rendered the todos!')
};
const ProjectUI = ({ root, todoContainer }) => {
    const makeToDoBtn = () => {
        const addBtn = document.createElement('button');
        addBtn.textContent = "+";
        addBtn.classList.add('add-todo-btn');
        return addBtn;
    };

    const removeToDoBtn = () => {
        const btn = todoContainer.querySelector('button');
        if (btn) btn.remove();
    };

    const removeContents = () => {
        todoContainer.innerHTML = ``;
    };

    const onProjectClick = ({ target }) => {
        console.log('I was clicked! I will now fetch local todos!', target);
        removeContents();
        pubsub.publish('project-click', { name: target.id });
    };

    const renderBtn = ({ name }) => {
        if (todoContainer.querySelector('button')) return;
        const btn = makeToDoBtn(name);
        todoContainer.appendChild(btn);
        console.log("I added an Add todo Btn!");
        //pubsub to remove project on the project list
    };

    const makeProjectElement = (name) => {
        const element = document.createElement('div');
        element.classList.add('project');
        element.innerHTML = `
        <p class="project-name" id="${name}">${name}</p>
        <button class="project-exit-btn">X</button>
        `;
        return element
    }

    const renderProjectDiv = ({ name }) => {
        const newProject = makeProjectElement(name)
        const exitBtn = newProject.querySelector('.project-exit-btn');
        const paragraphElement = newProject.querySelector('p');

        newProject.addEventListener('mouseover', () => {
            exitBtn.style.display = 'block';
            exitBtn.classList.add('active');
        });
        newProject.addEventListener('mouseout', () => {
            exitBtn.style.display = 'none';
            exitBtn.classList.remove('active');
        });
        paragraphElement.addEventListener('click', onProjectClick);
        exitBtn.addEventListener('click', () => {
            newProject.remove();
            pubsub.publish('remove-project', { name });
        });

        root.appendChild(newProject);
    };
    pubsub.subscribe('add-new-project', renderProjectDiv);
    pubsub.subscribe('add-new-project', renderBtn);
    pubsub.subscribe('remove-project', removeContents);
};




//Handles the Popup 
const projectInputUI = function({ root }) {
    const mainBtn = root.querySelector('button');
    const hideBtn = (btn) => { btn.style.display = 'none'; };
    const showBtn = (btn) => { btn.style.display = "block"; };
    const checkStrValidity = (str) => {
        // Add pubsub to check if there is a same project name
        if (!str) {
            console.log('invalid');
            alert('Please input a valid project name.');
            return false;
        }
        return true;
    };
    const renderInputProject = function() {
        const div = document.createElement('div');
        div.innerHTML = `
        <input type="text" required >
        <button id="add-new-project" type="submit">Add</button>
        <button id="cancel-new-project">Cancel</button>
        `;


        const addBtn = div.querySelector('#add-new-project');
        const cancelBtn = div.querySelector('#cancel-new-project');

        addBtn.addEventListener('click', () => {
            const inputText = div.querySelector('input').value;
            const isValid = checkStrValidity(inputText);
            if (isValid) {
                console.log("The new project is Valid!", inputText);
                div.remove();
                showBtn(mainBtn);
                pubsub.publish('add-new-project', { name: inputText });
            }
        });
        cancelBtn.addEventListener('click', () => {
            div.remove();
            showBtn(mainBtn);
        });
        root.appendChild(div);
        // Add event listener to close input div if user clicked outside the div

    }
    const onAddProject = ({ target }) => {
        hideBtn(target);
        renderInputProject();
    }

    mainBtn.addEventListener('click', onAddProject);



}


export { projectInputUI, ProjectUI }