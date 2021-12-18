import pubsub from './pubsub';
//Will be using localStorage to check if projectname is avaible.


const ToDoUI = () => {

};
const renderTodo = () => {

};

const eventManagerModal = (modal) => {

    const closeButton = modal.querySelector(".close-button");
    const showModal = () => {
        modal.classList.toggle("show-modal");
    };
    const removeModal = () => {
        modal.remove();
    };

    function windowOnClick(event) {
        //Will utilize this later on the closing the add project
        if (event.target === modal) {
            modal.remove();
        }
    }
    showModal();
    closeButton.addEventListener("click", removeModal);
    window.addEventListener("click", windowOnClick);
}

//ToDo Modal Module
const renderToDoModal = ({ name, container }) => {

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
          <div class="modal-header">
            <h3>New Task(to the project Name)</h3>
            <span class="close-button">&times;</span>
          </div>
          <div class="modal-body">
            <label for="title">Title:</label>
            <input type="text">
            <label for="description">Description:</label>
            <textarea id="description" rows="4" required></textarea>
            <label for="date">Due Date:</label>
            <input type="date" id="date">
            <label for="priority" required>Priority:</label>
            <select id="priority" required>
              <option value="low" selected>Low</option>
              <option value="medium" >Medium</option>
              <option value="high" >High</option>
            </select>
            <button>Add Task</button>
           </div>
        </div>`;
    eventManagerModal(modal);
    container.appendChild(modal);

};
pubsub.subscribe('make-modal', renderToDoModal);

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
        removeContents();
        renderBtn({ name: target.name });
        pubsub.publish('project-click', { name: target.dataset.name });
        console.log('I will now fetch local todos!', target);
    };

    const renderBtn = ({ name, container = todoContainer }) => {
        // Will always run since will wipe main content for every click
        if (container.querySelector('button')) return;
        console.log("I rendered the TODO + Btn!");
        const btn = makeToDoBtn(name);
        btn.addEventListener('click', () => {
            pubsub.publish('make-modal', {
                name,
                container
            });
        });
        container.appendChild(btn);
        //pubsub to remove project on the project list
    };

    const makeProjectElement = (name) => {
        const element = document.createElement('div');
        element.classList.add('project');
        element.dataset.name = `${name}-container`;
        element.innerHTML = `
        <p class="project-name" data-name="${name}">${name}</p>
        <button class="project-exit-btn">X</button>
        `;
        return element
    };



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
        //wil edit later
        renderBtn(name);
    };
    // pubsub.subscribe('check-project', checkProjectValidity)
    pubsub.subscribe('add-new-project', renderProjectDiv);
    // pubsub.subscribe('project-click', renderBtn);
    pubsub.subscribe('remove-project', removeContents);
};




//Handles the Popup 
const projectInputUI = function({ DOMbtn, DOMlist }) {
    const mainBtn = DOMbtn.querySelector('button');
    const hideBtn = (btn) => { btn.style.display = 'none'; };
    const showBtn = (btn) => { btn.style.display = "block"; };

    // Checks the data attribute of all elems of  project list 
    const isProjectNameValid = (name) => {
        const isAvailable = DOMlist.querySelector(`[data-name="${name}"]`);
        //#Will Add later: use API to check 
        //localStorage if property is already used.
        return !!isAvailable;
    };

    const checkStrValidity = (str) => {
        if (!str) {
            console.log('invalid');
            alert('Please input a valid project name.');
            return false;
        }
        if (isProjectNameValid(str)) {
            alert('Project Name must be different')
            return false;
        }
        console.log('Is valid!', str)
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
                div.remove();
                showBtn(mainBtn);
                pubsub.publish('add-new-project', { name: inputText })
            }
        });
        cancelBtn.addEventListener('click', () => {
            div.remove();
            showBtn(mainBtn);
        });
        DOMbtn.appendChild(div);
        // Add event listener to close input div if user clicked outside the div

    }
    const onAddProject = ({ target }) => {
        hideBtn(target);
        renderInputProject();
    }

    mainBtn.addEventListener('click', onAddProject);



}


export { projectInputUI, ProjectUI }