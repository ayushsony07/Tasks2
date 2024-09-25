// script.js

document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  // Add new task
  addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.trim() !== '') {
      addTask(taskInput.value);
      taskInput.value = '';
    }
  });

  // Add task function
  function addTask(taskText) {
    const li = document.createElement('li');
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    const taskButtons = document.createElement('div');
    taskButtons.classList.add('task-buttons');
    
    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      const newText = prompt('Edit task:', taskSpan.textContent);
      if (newText) {
        taskSpan.textContent = newText;
      }
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(editBtn);
    taskButtons.appendChild(deleteBtn);
    
    li.appendChild(taskSpan);
    li.appendChild(taskButtons);
    
    taskList.appendChild(li);
  }
});