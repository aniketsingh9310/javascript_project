
function get_todos () {
    let todos = []
    let todos_str = localStorage.getItem('todo')
    if(todos_str !== null){
        todos = JSON.parse(todos_str)
    }
   

    console.log('todos data in localstorage',todos_str)
    console.log('todos data in js array ',todos)

    return todos;
}

function add_todo (){
    let task = document.getElementById('task').value
    console.log('add data===>',task)
    

    let todos = get_todos()
    todos.push(task)
    localStorage.setItem('todo',JSON.stringify(todos))
    show()

    return
}

function remove (){

}


function show () {
    let todos = get_todos()
    let html = '<ul>'
    for(let i = 0; i < todos.length; i++){
        html += '<li>' + todos[i] + '<button class="romove" id"'+ i + '">Delete</button> </li>'
    }
 console.log(html)
 document.getElementById('todos').innerHTML =html
}

document.getElementById('add').addEventListener('click',add_todo)

