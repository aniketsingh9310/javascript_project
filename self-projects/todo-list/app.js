

let inputs = document.querySelector("input")
let btn = document.querySelector("button")
let todo = document.querySelector("#todos")
console.log(todo)

        btn.addEventListener("click",(add)=>{
            // console.log(inputs.value)
            let li = document.createElement("li")
            li.innerText = inputs.value
            // console.log(li)

            let deletebtn = document.createElement("button")
            deletebtn.innerText = "delete"

            deletebtn.addEventListener("click",()=>{
                li.remove()
            })

            li.appendChild(deletebtn)
            todo.appendChild(li)
            
        })


   
