import pubsub from './pubsub';
//Will be using localStorage to check if projectname is avaible.


const ToDoUI = ({ container }) => {
    const formatDate = (date) => {
        return (date) ? date : 'no due date'
    }
    const renderTodo = ({ title, description, date, priority }) => {
        const card = document.createElement('div');
        const formattedDate = formatDate(date);
        card.classList.add('todo-card');
        card.innerHTML = `
          <div class="card-partial">
            <p class="card-title" data-todo-name="${title}">${title}</p>
            <p class="card-date">${formattedDate}</p>
          </div>
                `;
        container.appendChild(card)
    };

    pubsub.subscribe('render-todo', renderTodo);
};

//Function that handles all event listeners of the modals
const eventManagerModal = (modal) => {
    const closeButton = modal.querySelector(".close-button");
    const form = modal.querySelector('form');
    const projectName = modal.querySelector('h3').dataset.projectName;
    console.log(projectName);
    // gets all required inputs (title,priority,description)
    const formInputs = Array.from(form.querySelectorAll('[required'));
    const showModal = () => {
        modal.classList.toggle("show-modal");
    };
    const removeModal = () => {
        modal.remove();
    };

    const windowOnClick = (event) => {
        //Will utilize this later on the closing the add project
        if (event.target === modal) {
            modal.remove();
        }
    };
    const addNotRequiredValues = () => {
        // optional if date is also input make it into another function
        if (form.querySelector('#date').value) {
            formInputs.push(form.querySelector('#date'))
        };
    };
    const checkFormValidity = () => {
        for (const input of formInputs) {
            if (!input.value.trim()) {
                // Will change later into warning element
                alert('Please input all fields');
                return false;
            }
        }
        return true;
    };
    const getInputValues = () => {
        return formInputs.reduce((obj, input) => {
            obj[input.id] = input.value;
            return obj
        }, {})
    };
    //show modal kinda redundant
    showModal();
    closeButton.addEventListener("click", removeModal);
    window.addEventListener("click", windowOnClick);

    //form event listeners
    const submitBtn = modal.querySelector('button[type="submit"]');
    submitBtn.addEventListener('click', (e) => {
        //Removes the default referesh on the form tag
        e.preventDefault();
        addNotRequiredValues();
        if (checkFormValidity()) {
            const formData = getInputValues();
            console.log('I passed all form checks!', formData)
                // Will add todo to project container !
            pubsub.publish('add-todo', {
                data: {...formData, },
                project: projectName,
            })
            modal.remove();
        };
    })
};

//ToDo Modal Module
const renderToDoModal = ({ name, container }) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
          <div class="modal-header">
            <h3 data-project-name="${name}">New Task (${name})</h3>
            <span class="close-button">&times;</span>
          </div>
          <div class="modal-body">
            <form id="todo-form">
                <label for="title">Title:</label>
                <input type="text" required id="title">
                <label for="description">Description:</label>
                <textarea id="description" rows="4" required></textarea>
                <label for="date">Due Date:</label>
                <input type="date" id="date" >
                <label for="priority">Priority:</label>
                <select id="priority" required>
                <option value="low" selected>Low</option>
                <option value="medium" >Medium</option>
                <option value="high" >High</option>
                </select>
             </form>
            <button form="todo-form" type="submit" id="form-submit-btn">Add Task</button>
           </div>
        </div>`;
    eventManagerModal(modal);
    container.appendChild(modal);

};




const ProjectUI = ({ root, todoContainer }) => {
    const makeToDoBtn = () => {
        const addBtn = document.createElement('button');
        addBtn.textContent = "+";
        addBtn.classList.add('add-todo-btn');
        return addBtn;
    };

    const removeContents = () => {
        todoContainer.innerHTML = ``;
    };

    const onProjectClick = ({ target }) => {
        removeContents();
        renderBtn({ name: target.dataset.name });
        pubsub.publish('project-click', { name: target.dataset.name });
        console.log('I will now fetch todos from pubsub(project-click_');
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
        renderBtn({ name });
    };
    pubsub.subscribe('add-new-project', renderProjectDiv);
    pubsub.subscribe('remove-project', removeContents);
    pubsub.subscribe('make-modal', renderToDoModal);

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
        str = str.trim();
        if (!str) {
            console.log('invalid');
            alert('Please input a valid project name.');
            return false;
        }
        if (isProjectNameValid(str)) {
            alert('Project Name must be different')
            return false;
        }
        //Add another conditionial if there is a localStorage
        // if(localStorage) ...
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


export { projectInputUI, ProjectUI, ToDoUI }