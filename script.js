let draggedTask;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  draggedTask = ev.target;
}

function drop(ev) {
  ev.preventDefault();
  ev.target.appendChild(draggedTask);
}

function addTask(columnId) {
  const taskInput = document.getElementById(`${columnId}TaskInput`);
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const newTask = document.createElement("div");
    newTask.textContent = taskText;
    newTask.setAttribute("draggable", "true");
    newTask.classList.add("task");
    newTask.addEventListener("dragstart", drag);
    document.getElementById(columnId).getElementsByClassName("tasks")[0].appendChild(newTask);
    taskInput.value = "";
     
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
      deleteTask(newTask);
    });
    newTask.appendChild(deleteBtn);
    
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.classList.add("done-btn");
    doneBtn.addEventListener("click", function() {
      markAsDone(newTask);
    });
    newTask.appendChild(doneBtn);
  }
}


function deleteTask(task) {
  task.remove();
}
function markAsDone(task) {
  const doneColumn = document.getElementById("done").getElementsByClassName("tasks")[0];
  task.classList.add("done-task");
  task.draggable = false;
  doneColumn.appendChild(task);
}
