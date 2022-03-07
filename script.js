//DOM variables
let container = document.body.querySelector('.etch-container');

let number = window.prompt("Please enter number of boxes desired")
let numberNum = parseInt(number)
let side = 700/(numberNum)


//Functions
if (numberNum<=100 && numberNum>0){
for (i=0;i<numberNum**2;i++){
let box = document.createElement('div');
box.classList.add(`box`)
box.classList.add(`box-${i}`)
container.appendChild(box);
box.addEventListener('mouseover',function(){
  box.style.backgroundColor = `green`
  console.log(box)
})
}
} else {
  window.alert("Please enter a number between 1 and 100");
  location.reload();

}
//DOM variables

let boxes = document.body.querySelectorAll('.box')

let reset = document.getElementsByTagName('button')

reset[0].addEventListener('click', function(){
  location.reload();
})



for (i=0;i<boxes.length;i++){
  boxes[i].style.height = `${side}px`;
  boxes[i].style.width = `${side}px`;
}

let primaryColor = document.body.querySelector('.primary')
let secondaryColor = document.body.querySelector('.secondary')
let primaryColorSelect = document.body.querySelector('.primarybtn')
let secondaryColorSelect = document.body.querySelector('.secondarybtn')

primaryColorSelect.addEventListener("click", function(){
  let value = primaryColor.value;
  console.log(value)
  boxes.forEach(function(element){element.style.backgroundColor = `${value}`;
})
}
)

secondaryColorSelect.addEventListener("click", function(){
let value = secondaryColor.value;
console.log(value)
boxes.forEach(function(element){element.addEventListener('mouseover',function()
{
  element.style.backgroundColor = `${value}`
  console.log('gotcha')
}
)
}
) 
}
)

