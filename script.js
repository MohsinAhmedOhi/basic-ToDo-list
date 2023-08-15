function addTask() {
  // Get the input value
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();

  // If the input isn't empty, create a new list item
  if (taskValue) {
    const taskList = document.getElementById('taskList');

    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    // Add delete button for each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    // Clear the input
    taskInput.value = '';
  }
}
