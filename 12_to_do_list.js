const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
},
{
    name: 'wash dishes',
    dueDate: '2022-12-22'
}];

rendorTodoList();

function rendorTodoList() {



    let todoListHTML = '';

    todoList.forEach(function(todoObject,index){
        
     

        const { name, dueDate } = todoObject;

        const html = `<div>${name} </div> <div> ${dueDate}</div>
        <button class="deletebtn" onclick=" todoList.splice(${index} , 1); 
        rendorTodoList();
        ">Delete</button>
        `;

        todoListHTML += html;

    });

    



    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;

    todoList.push({
        name: name,
        dueDate: dueDate
    }
    );


    inputElement.value = ''

    rendorTodoList();
}