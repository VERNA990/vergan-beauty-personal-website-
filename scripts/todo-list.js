const addTodoButton = document.querySelector('.js-add-todo-button');
const clearTodosButton = document.querySelector('.js-clear-todos-button');
const todoInputElement = document.querySelector('.js-name-input')



todoInputElement.addEventListener('keydown', handleInputKeydown)
addTodoButton.addEventListener('click', addTodo)
clearTodosButton.addEventListener('click', clearTodos)

let toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];




renderTodoList();
function renderTodoList() {
    let todoListHTML = '';
    toDoList.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject;
        if (name !== '' && dueDate !== '') {
        const html = `<div>${name}</div> 
                     <div>${dueDate}</div>
                        <button
                         class="js-delete-todo-button delete-todo-button" >Delete</button>
                        `;
            todoListHTML += html;
        }
        

    });
   /* for (let i = 0; i < toDoList.length; i++) {
        const todoObject = toDoList[i];
        const {name, dueDate} = todoObject;
        const html = `<div>${name}</div> 
                     <div>${dueDate}</div>
                        <button onclick="toDoList.splice(${i},1);
                        renderTodoList();" class="delete-todo-button">Delete</button>
                        `;
        todoListHTML += html;
    }*/
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(task) {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    if (name !== '' && dueDate !== '') {
        toDoList.push({name, dueDate});
        console.log(toDoList);  
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
        
        inputElement.value = '';
        renderTodoList();   
    }else{
        alert('Please enter both task name and due date.');
    }
    
}

function handleInputKeydown(event){
            if (event.key === 'Enter'){
                addTodo();
            }
        }

function clearTodos() {
    const proceed = confirm("All tasks will be deleted!\nDo you still wish to proceed?");
    
    if (proceed) {
        localStorage.removeItem('toDoList'); 
        toDoList = [];                        
        renderTodoList();                     
    } else {
        return;
    }
}

const deleteTodoButton = document.querySelectorAll('.js-delete-todo-button');
deleteTodoButton.forEach((button, index) => {
    button.addEventListener('click', () => {
         const deleteTask = confirm('Are you sure you want to delete this task?');
        if (deleteTask) {
                toDoList.splice(index, 1);
                renderTodoList();
                localStorage.setItem('toDoList', JSON.stringify(toDoList));
            } else {
                return;
            }
            });
});

