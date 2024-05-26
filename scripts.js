document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
  
    addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        taskItem.textContent = taskText;
  
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
          taskList.removeChild(taskItem);
        });
  
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }
    });
  
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTaskBtn.click();
      }
    });
  });
  