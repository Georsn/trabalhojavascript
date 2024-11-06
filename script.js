const newTaskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const remainingTasks = document.getElementById('remaining-tasks');

function addTask() {
    const taskText = newTaskInput.value.trim();
    
    if (taskText === "") return; 
    
    const li = document.createElement('li');
    li.innerText = taskText;
    
    const removeBtn = document.createElement('button');
    removeBtn.innerText = "Remover";
    removeBtn.classList.add('remove-btn');
    
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        updateTaskCounter();
    });
    
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    
    newTaskInput.value = '';
    updateTaskCounter();
}

function updateTaskCounter() {
    const tasks = taskList.querySelectorAll('li');
    const remaining = Array.from(tasks).filter(task => !task.classList.contains('completed')).length;
    remainingTasks.innerText = remaining;
}

addTaskBtn.addEventListener('click', addTask);

newTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});