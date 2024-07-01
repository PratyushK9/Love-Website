const yesButton = document.getElementById('yes')
const noButton = document.getElementById('no')
let noCounter = 0 //  const will lead to error as it cant be assigned
yesButton.addEventListener("click" , (e)=>{
    alert(`I too Love YOU!!`)

})

noButton.addEventListener('click', (e)=>{
  //  e.preventDefault()
   noCounter++
  // alert(noCounter)
  noButton.style.position = "absolute"
  
  noButton.style.top =  `${(Math.floor((Math.random()*100)+1))}px`
  noButton.style.left =  `${Math.floor((Math.random()*300)+1)}px`
})
