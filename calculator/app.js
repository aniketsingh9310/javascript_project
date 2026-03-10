let display = document.querySelector("#display")
let buttons = document.querySelectorAll("button")

buttons.forEach(function(btn){

    btn.addEventListener("click", function(){
            let value = btn.innerText
            console.log(value)
        if (value === "C"){
            display.value = "0"
        }
        else if(value === "="){
            display.value = eval(display.value)
        }
        else{
            display.value += value;
        }

    })

})