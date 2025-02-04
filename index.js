function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const taskList = document.getElementById("task-list");
  
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${taskText}
      <div>
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
      </div>
    `;
  
    taskList.appendChild(listItem);
    taskInput.value = ""; 
  }
  function deleteTask(button) {
    const taskList = document.getElementById("task-list");
    taskList.removeChild(button.parentElement.parentElement);
  }
  function editTask(button) {
    const listItem = button.parentElement.parentElement;
    const taskText = listItem.firstChild.textContent.trim();
  
    const newTask = prompt("Edit your task:", taskText);
  
    if (newTask !== null && newTask.trim() !== "") {
      listItem.firstChild.textContent = newTask;
    }
  }