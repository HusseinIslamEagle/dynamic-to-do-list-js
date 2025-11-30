document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // تحميل المهام من Local Storage عند بداية الصفحة
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false عشان ما نحفظش مرتين
    }

    // إضافة مهمة جديدة
    function addTask(taskText = null, save = true) {
        const text = taskText || taskInput.value.trim();
        if (text === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.textContent = text;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        removeBtn.onclick = function() {
            taskList.removeChild(li);
            if (save) {
                removeTaskFromStorage(text);
            }
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) {
            saveTaskToStorage(text);
        }

        taskInput.value = '';
    }

    // حفظ المهمة في Local Storage
    function saveTaskToStorage(task) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // إزالة المهمة من Local Storage
    function removeTaskFromStorage(task) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(t => t !== task);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // أحداث الزر والضغط على Enter
    addButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // تحميل المهام عند بداية الصفحة
    loadTasks();
});
