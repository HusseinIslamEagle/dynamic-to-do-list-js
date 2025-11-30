// Ensure the code runs after the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get trimmed input

        if (taskText === '') {
            alert('Please enter a task'); // Alert if input is empty
            return;
        }

        // Create list item and remove button
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Event to remove task
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append button to li and li to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
