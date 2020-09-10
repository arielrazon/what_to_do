/*
must:
add rows with a column for the task, and an X out button

color code things by priority

add drop-down in the submission pane for priority

add submission pane section

host on a database all the information
*/


    //to do list:
    //stylize
    //add css animations
    //add manual add item
    //visualize entire array, add and delete
  var thingsToDo = JSON.parse(window.localStorage.getItem("toDoList")) || [
  /*"Scrimba Flexbox",
  "Scrimba Grid",
  "Grid Garden",*/
  // "Udemy Bootcamp",
  // "teamTreeHouse",
  // "algorithm udemy",
  // "trilogy express homework",
  // "fullStackOpen",
  // "do laundry",
  // "iron shirts",
  // "organize",
  // "re-do resumé",
  // "organize medicine case",
  // "clean room",
  // "shower",
  // "meal prep",
  // "bike ride",
  // "python auto email scheduler",
  // "update weekly reminder email for boot camp",
  // "core exercises",
  // "journaling about current day",
  // "journaling about miami",
  // "journaling about nyc",
  // "meditation",
  // "organize notes",
  // "Edabit",
  // "jerk off",
  // "write porn",
  {name:"file mail and documents away",
  workDayOnly:false,
  priority:0,
  className:"filemailanddocumentsaway"}
  ];

  

document.querySelector("#choose").addEventListener("click",function(e){
    e.preventDefault();
    var currentThing = thingsToDo[Math.floor(Math.random() * thingsToDo.length)]
    document.querySelector("#yourChoice").innerHTML = `<h5>Looks like you're gonna do:</h5> <h3>${currentThing}</h3>`
    })

document.querySelector("#addItemBtn").addEventListener("click",function(){
  var newItem={
    name:document.querySelector("#newItem").value,
    priority:document.querySelector("#newItemPriority").selectedIndex,
    workDayOnly:document.querySelector("#workDay").checked,
    className: document.querySelector("#newItem").value.trim()
  }
  thingsToDo.push(newItem)
  window.localStorage.setItem("toDoList",JSON.stringify(thingsToDo))
})

function displayTable(){
  for(i=0;i<thingsToDo.length;i++){
  document.querySelector("#toDoList").innerHTML+= `<tr id="${thingsToDo[i].className}"><td>${thingsToDo[i].name}</td><td>${thingsToDo[i].priority}</td><td><span class="completed">X</span></td></tr>`
  }
}