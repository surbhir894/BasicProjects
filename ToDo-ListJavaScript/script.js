//Selecting HTML Element
const taskInput = document.getElementById('taskInput');
const taskDescriptionInput = document.getElementById('taskDiscription');
const todoList =document.getElementById('todoList');
const searchBar=document.getElementById('searchBar');

//Load tasks from local storage on page load
document.addEventListener('DOMContentLoaded',loadTasks);

//Function to add a new task
function addNewTask(){
  const task = taskInput.value.trim();
  const description = taskDescriptionInput.value.trim();

  if(task!=="" && description!==""){
    const taskObj ={
      title: task,
      description:description,
      completed:false
    };

    addTaskToUI(taskObj);
    saveTaskToLocalStorage(taskObj);
    taskInput.value ='';
    taskDescriptionInput.value ='';
}
else{
  alert('Please enter both task and description')
}}

//Function to display tasks stored in local storage
function loadTasks(){
  const tasks = getTasksFromLocalStorage();
  tasks.forEach(task =>addTaskToUI(task));
}

//Function to add a task to the UI
function addTaskToUI(taskObj){
  const li = document.createElement('li');
  li.className =`todo-item $ {taskObj.completed ?'completed':'todo'}`;
  li.innerHTML=`
  <span class="task-title">${taskObj.title}</span>
  <span class="task-description">${taskObj.description}</span>
  <i class="fas fa-check" onclick="toggleTaskCompleted(this)"></i>
  <i class="fas fa-trash" onclick="removeTask(this)"></i>
  `;

  todoList.appendChild(li);
}

//Remove task from the UI and Local Storage
function removeTask(button){
  const taskItem =button.parentElement;
  const taskTitle=taskItem.querySelector('.task-title').textContent;
  taskItem.remove();
  removeTaskFromLocalStorage(taskTitle);
}

//clear all tasks from the UI and local Storage
function clearAllTasks(){
  todoList.innerHTML='';
  clearAllTasksFromLocalStorage();
}

//Toogle Task Completion
function toggleTaskCompleted(button){
  const taskItem=button.parentElement;
  const taskTitle = taskItem.querySelector('.task-title').textContent;
  taskItem.classlist.toggle('completed');
  taskItem.classlist.toggle('todo');

  toggleTaskCompletedInLocalStorage(taskTitle);
}

//Search tasks by title
function searchTasks(){
  const searchText = searchBar.value.toLowerCase();
  const tasks = todoList.querySelectorAll('li');

tasks.forEach(task=>{
  const title = task.querySelector('.task-title').textContent.toLowerCase();
  task.style.display=title.includes(searchText)?'':'none';
});

}

//Filter tasks (all ,todo,completed)
function filterTasks(filter){
  const tasks = todoList.querySelectorAll('li');

  tasks.forEach(task =>{
    switch(filter){
      case'all':
      task.style.display='';
      break;
      case 'todo':
      task.style.display=task.classList.contains('todo')?'':'none';
      break;
      case 'completed':
      task.style.display=task.classList.contains('completed')?'':'none';
      break;
    }
  });
}

// Save a task to local storage 
function saveTaskToLocalStorage(taskObj){
  const tasks =getTasksFromLocalStorage();
  tasks.push(taskObj);
  localStorage.setItem('tasks' ,JSON.stringify(tasks))
}

//Get all tasks from local storage
function getTasksFromLocalStorage(){
  const tasks =localStorage.getItem('tasks');
  return tasks?JSON.parse(tasks):[];
}

//Remove a specific task from local storage
function removeTaskFromLocalStorage(taskTitle){
  let tasks = getTasksFromLocalStorage();
  tasks = tasks.filter(task=>task.title!==taskTitle);
  localStorage.setItem('tasksd',JSON.stringify(tasks));
}

//Toggle task completion in local storage
function toggleTaskCompletedInLocalStorage(taskTitle){
  const tasks = getTasksFromLocalStorage();
  tasks.forEach(task =>{
    if(task.title === taskTitle){
      task.completed=!task.completed;
    }
  });
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

//Clear all tasks from Local Storage 
function clearAllTasksFromLocalStorage(){
  localStorage.removeItem('tasks');
  
}