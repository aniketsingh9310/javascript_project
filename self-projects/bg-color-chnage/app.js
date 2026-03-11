const btns = document.querySelectorAll(".btn")
const display = document.querySelector("body")

// console.log("=======",btns)

    btns.forEach((btn)=>{
        btn.addEventListener("click",(dets)=>{
            // console.log("=========>",dets.target.id)
            if(dets.target.id == "red"){
                display.style.backgroundColor= "red"
            }
            if(dets.target.id == "blue"){
                display.style.backgroundColor = "blue"
            }
             if(dets.target.id == "yellow"){
                display.style.backgroundColor = "yellow"
            }
             if(dets.target.id == "white"){
                display.style.backgroundColor = "white"
            }
        })
    })
 