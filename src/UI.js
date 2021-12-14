import pubsub from './pubsub';

const ProjectUI = ({ root }) => {
    const onProjectClick = ({ target }) => {
        console.log('I was clicked!', target.id);
        pubsub.publish('project-click', { name: target.id });
    }
    const renderProjectDiv = ({ name }) => {
        const newProject = document.createElement('div');
        newProject.classList.add('project');
        newProject.innerHTML = `
        <p class="project-name" id="${name}">${name}</p>
        <button class="project-exit-btn">X</button>
        `;
        const exitBtn = newProject.querySelector('.project-exit-btn');

        newProject.addEventListener('mouseover', () => {
            exitBtn.style.display = 'block';
            exitBtn.classList.add('active');
        });
        newProject.addEventListener('mouseout', () => {
            exitBtn.style.display = 'none';
            exitBtn.classList.remove('active');
        });
        newProject.addEventListener('click', onProjectClick);
        exitBtn.addEventListener('click', () => {
            newProject.remove();
            pubsub.publish('remove-project', { name });
        });

        root.appendChild(newProject);
    };
    pubsub.subscribe('add-new-project', renderProjectDiv);
};

const projectInputUI = function({ root }) {
    const mainBtn = root.querySelector('button');
    const removeBtn = (btn) => { btn.style.display = 'none'; };
    const showBtn = (btn) => { btn.style.display = "block"; };
    const checkStrValidity = (str) => {
        // Add pubsub to check if there is a same project name
        if (!str) {
            console.log('invalid');
            alert('Please input a valid project name.');
            return false;
        } else {
            return true
        }
    }
    const renderInputProject = function() {
        const div = document.createElement('div');
        div.innerHTML = `
        <input type="text" required >
        <button id="add-new-project" type="submit">Add</button>
        <button id="cancel-new-project">Cancel</button>
        `;


        const addBtn = div.querySelector('#add-new-project');
        addBtn.addEventListener('click', () => {
            const inputText = div.querySelector('input').value;
            const isValid = checkStrValidity(inputText);
            if (isValid) {
                console.log(inputText);
                div.remove();
                showBtn(mainBtn);
                pubsub.publish('add-new-project', { name: inputText });
            }
        });
        const cancelBtn = div.querySelector('#cancel-new-project');
        cancelBtn.addEventListener('click', () => {
            div.remove();
            showBtn(mainBtn);
        });
        root.appendChild(div);
        // Add event listener to close input div if user clicked outside the div

    }
    const onAddProject = ({ target }) => {
        removeBtn(target);
        renderInputProject();
    }

    mainBtn.addEventListener('click', onAddProject);



}


export { projectInputUI, ProjectUI }