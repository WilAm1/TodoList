import pubsub from './pubsub';


const addProject = function({ root }) {
    const mainBtn = root.querySelector('button');
    const removeBtn = (btn) => { btn.style.display = 'none'; };
    const showBtn = (btn) => { btn.style.display = "block"; };
    const checkStrValidity = (str) => {
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
        root.appendChild(div);

        const addBtn = div.querySelector('#add-new-project');
        addBtn.addEventListener('click', () => {
            //Place a required
            const inputText = div.querySelector('input').value;
            const isValid = checkStrValidity(inputText);
            if (isValid) {
                pubsub.publish('add-new-project', { name: inputText });
                console.log(inputText);
                div.remove();
                showBtn(mainBtn);
            } else {

            }

        });
        const cancelBtn = div.querySelector('#cancel-new-project');
        cancelBtn.addEventListener('click', () => {
            div.remove();
            showBtn(mainBtn);
        });
    }


    const onAddProject = ({ target }) => {
        removeBtn(target);
        console.log(target)
        renderInputProject();
    }

    mainBtn.addEventListener('click', onAddProject);



}


export { addProject }