let display = document.querySelector("#display")
let btns = document.querySelectorAll("button")

btns.forEach((btn)=>{
    btn.addEventListener("click",(dets)=>{
        // console.log(display.value)
        // console.log(dets.target)  this is wrong
       let value = btn.innerText
       console.log(value)

       if(value === "C"){
        display.value = ""
       }
       else if(value === "="){
        display.value = eval(display.value)
       }
       else{
        display.value += value
       }
    })
})