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
  var thingsToDo = [
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
  "correction email",
  // "clean fridge",
  "make packages",
  "file mail and documents away"
  ]

  

    document.querySelector("#choose").addEventListener("click",function(e){
    e.preventDefault();
         var currentThing = thingsToDo[Math.floor(Math.random() * thingsToDo.length)]
      document.querySelector("#yourChoice").innerHTML = `<h5>Looks like you're gonna do:</h5> <h3>${currentThing}</h3>`
    })