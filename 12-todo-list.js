let toDOList = [{
  name :'make dinner',
  dueDate: '2022-12-22',
},{
  name :'wash dinner',
  dueDate: '2022-12-22',
}
];
renderTodoList();

function renderTodoList(){
let toDOListHTML='';
toDOList.forEach((toDOObject, index) => {
 
  const {name, dueDate} = toDOObject;
  const html = 
      `<div>${name} </div>
      <div>${dueDate}</div>
      <button class="js-button2 js-delete-todo-button" >delete</button>
      ` ;
      toDOListHTML += html
})
// for(let i = 0 ; i< toDOList.length ; i++){
//   const toDOObject =toDOList[i] ;
//   // const name = toDOObject.name ;
//   // const dueDate= toDOObject.dueDate
//   const {name, dueDate} = toDOObject;
//   const html = 
//       `<div>${name} </div>
//       <div>${dueDate}</div>
//       <button class="js-button2" onclick="
//       toDOList.splice(${i},1);
//       renderTodoList();
//       ">delete</button>
//       ` ;
//       toDOListHTML += html

// }
// console.log(toDOListHTML);
document.querySelector('.js-toDo-list')
.innerHTML = toDOListHTML ;
}


document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
deleteButton.addEventListener('click',()=>{
  toDOList.splice(index,1);
      renderTodoList();
})
})


document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
addToDo();
});
function addToDo(){
const inputElement = document.querySelector('.js-name-input');
let name = inputElement.value ;
const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value
toDOList.push({
  // name :name ,
  // dueDate: dueDate,
  name,
  dueDate,
}
  );
// console.log(toDOList);
inputElement.value ='';

renderTodoList();
  


}



function keyPressEnter(event){
if(event.key === 'Enter'){
  addToDo();
}
}

// written by me 

/*let var1 = [];
function addToDo(){
  let name = document.querySelector('.js-name-input') ;
  inputElement = name.value ;
  var1.push(inputElement);
  console.log(var1);
  name.value ='';
  

  renderTodoList();
 
}
function renderTodoList(){
  let toDOListHTML='';
  for (i = 0 ; i < var1.length ; i++){
    let selector = var1[i] ;
    let html = `<p>${selector}</p>` ;
    toDOListHTML += html ;

    console.log(html);
    document.querySelector('.js-toDo-list')
    .innerHTML = toDOListHTML ;
    
  }
}

// function removeTodo(){
//   var1.splice(var1.length );
// }

function keyPressEnter(event){
  if(event.key === 'Enter'){
    addToDo();
  }
}
// }else if(event.key ==='g'){
//   removeTodo();
// }


*/
