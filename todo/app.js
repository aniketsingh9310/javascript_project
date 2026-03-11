
let input = document.querySelector("input")
let btn = document.querySelector("button")
let showTodos = document.querySelector("#todos")
console.log(showTodos)

//    input.addEventListener("input",function(dets){
//         console.log(dets.target.value)
//    })

   btn.addEventListener("click",function(dets){
      localStorage.setItem("task",input.value)
      let ls = localStorage.getItem("task")
        console.log(ls)
        

    //    console.log(input.value)
        let todos = document.createElement("li")
        todos.innerText = input.value 
        // console.log(todos)

        let deletebtn = document.createElement("button")
        deletebtn.classList.add("remove")
        deletebtn.innerText = "x"
        // console.log(deletebtn)

        deletebtn.addEventListener("click",function(){
            todos.remove()
        })

        todos.appendChild(deletebtn)     
        showTodos.appendChild(todos)   
      
        input.value = ""

   })   