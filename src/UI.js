import pubsub from './pubsub';


const addProject = function({ root }) {
    const btn = root.querySelector('button')
    const removeBtn = () => {
        btn.style.display = 'none';
    };
    const showBtn = () => { btn.style.display = "block"; };
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
                showBtn();
            } else {

            }

        });
        const cancelBtn = div.querySelector('#cancel-new-project');
        cancelBtn.addEventListener('click', () => {
            div.remove();
            showBtn();
        });
    }


    const onAddProject = ({ target }) => {
        removeBtn(target);
        renderInputProject();
    }

    btn.addEventListener('click', onAddProject);



}


export { addProject }