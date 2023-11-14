const addTask = document.querySelector('#add-task');
const taskContainer = document.querySelector('#task-container');
const inputTask = document.querySelector('#input-task');

addTask.addEventListener('click', function() {
    if (inputTask.value === '') {
        alert('Please enter a task.');
    } else {
        let task = document.createElement('div');
        task.classList.add('task');
    
        let li = document.createElement('li');
        li.innerText = `${inputTask.value}`;
        task.appendChild(li);
    
        let checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkButton.classList.add('check-task');
        task.appendChild(checkButton);

        checkButton.addEventListener('click', function() {
            let parentText = checkButton.parentElement;
            
            if (parentText.style.textDecoration != 'line-through') {
                checkButton.parentElement.style.textDecoration = 'line-through';
            } else {
                checkButton.parentElement.style.textDecoration = 'none';
            }
        });
    
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deleteButton.classList.add('delete-task');
        task.appendChild(deleteButton);

        deleteButton.addEventListener('click', function() {
            deleteButton.parentElement.remove();
        });

        taskContainer.appendChild(task);
    }

    inputTask.value = '';
});