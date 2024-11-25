const bodyE=document.querySelector("body")
bodyE.addEventListener("mousemove",(e)=>{

    const xCord=e.offsetX
    const yCord=e.offsetY


    const spanE=document.createElement("span")
    
    spanE.style.left=`${xCord}px`
    spanE.style.top=`${yCord}px`

    const size=Math.random()*100
    spanE.style.width=`${size}px`;
    spanE.style.height=`${size}px`
    bodyE.appendChild(spanE)

    setTimeout(()=>{
            spanE.remove()
    },3000)
})