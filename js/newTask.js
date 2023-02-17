console.log("hello.");

function Task(name, steps) {
  this.name = name;
  this.steps = steps;
  Task.allTasks.push(this);
}

Task.allTasks = [];

const strCylinder = [
  {
    desc: "Press thumb into the center of the clay. Check the thickness of the base using a dry pin tool.",
    completed: true,
  },
  {
    desc: "Pull outwards, from the center towards yourself.",
    completed: false,
  },
  {
    desc: "Compress walls, using a sponge with pressure on your edges- do this after every step going forward.",
    completed: false,
  },
  {
    desc: "Compress the base of your pot using pressing pulling outwards with a sponge.",
    completed: false,
  },
  {
    desc: "Using both hands, push walls inwards at an angle.",
    completed: false,
  },
  {
    desc: "Using your thumb, remove clay from the outward base, to create a ridge.",
    completed: false,
  },
  {
    desc: "Using both hands, pull the clay up, startin gfrom the ridge. Do this in a smoth motion, with light/medium pressure.",
    completed: false,
  },
  {
    desc: "Reapeat pulling the clay up, and compressing the walls, until you reach your desired height/wall thickness.",
    completed: false,
  },
  {
    desc: "Using a rib, hold the flat edge,with light pressure, against the outside of your vessel. Simultaneously, have your other hand inside the pot counteracting the pressure.",
    completed: false,
  },
];

const basicTurning = [
  {
    desc: "Throw your piece with a thick base- the requirements will be determined by how deep you want your turning to be.",
    completed: false,
  },
  {
    desc: "Leave to dry overnight in a damp room, base-down on the wooden board.",
    completed: false,
  },
  {
    desc: "Once it's leatherhard, remove from the board, and place rim-down on the wheel.",
    completed: false,
  },
  {
    desc: "Center your piece.",
    completed: false,
  },
  {
    desc: "Secure your piece in place using clay balls.",
    completed: false,
  },
  {
    desc: "Cut into your base using a needle tool, starting from the center and gradually pulling outwards, creating a spiral.This will break up any uneven surface. You may need to do this twice. Pressure: light. Wheel speed: fast.",
    completed: false,
  },
  {
    desc: "Using an flat-edged hoop tool, do the same motion. This will remove clay, and flatten the base. Keep a steady hand.",
    completed: false,
  },
  {
    desc: "Now you make it individual. Mark out all the parameters of your deign beforehand with a pencil or needle tool.",
    completed: false,
  },
  {
    desc: "Use the same needle-tool-spiral-technique to cut away large pieces of clay, this will relieve pressure from your piece.",
    completed: false,
  },
  {
    desc: "Personalise your form using whatever turning tools you have at your disposal, to create diffeerent shapes to the foot of your piece. Consistently bare in mind the thickness of your base, and don't make it too thin.",
    completed: false,
  },
  {
    desc: "Once done, leave your piece to dry gradually in a damp room rim-down on a wooden board",
    completed: false,
  },
  {
    desc: "When your piece is bone dry, it is ready to bisk fire.",
    completed: false,
  },
];
if (localStorage.getItem("taskData") === null) {
  // for (let i = 0; i < Task.allTasks.length; i++) {
  //   new Task(Task[i].name, Task[i].steps);
  // }
  new Task("Throwing a straight-edged cylinder", strCylinder);
  new Task("Turning the base of your piece", basicTurning);
} else {
  const taskData = JSON.parse(localStorage.getItem("taskData"));

  for (let i = 0; i < taskData.length; i++) {
    new Task(taskData[i].name, taskData[i].steps);
  }
}

function renderTask() {
  console.log("help");
  const taskElem = document.getElementById("tasks");

  // loop through all tasks using forEach
  Task.allTasks.forEach(function (theTask) {
    const h3Elem = document.createElement("h3");
    h3Elem.textContent = theTask.name;
    taskElem.appendChild(h3Elem);

    const list = document.createElement("ul");
    taskElem.appendChild(list);
    // loop through all steps within the task forEach
    theTask.steps.forEach(function (theStep) {
      const listItem = document.createElement("li");
      listItem.textContent = theStep.desc;

      if (theStep.completed == true) {
        listItem.classList.add("done");
      }

      listItem.addEventListener("click", function (event) {
        event.target.classList.toggle("done");

        theStep.completed = !theStep.completed;

        localStorage.setItem("taskData", JSON.stringify(Task.allTasks));
      });

      list.appendChild(listItem);
    });
  });
}

renderTask();

// function renderTask() {
//   console.log("help");
//   const taskElem = document.getElementById("tasks");

//   for (i = 0; i < Task.allTasks.length; i++) {
//     const h3Elem = document.createElement("h3");
//     h3Elem.textContent = Task.allTasks[i].name;
//     taskElem.appendChild(h3Elem);

//     const list = document.createElement("ul");
//     taskElem.appendChild(list);

//     for (k = 0; k < Task.allTasks[i].steps.length; k++) {
//       const listItem = document.createElement("li");
//       listItem.textContent = Task.allTasks[i].steps[k].desc;

//       if (Task.allTasks[i].steps[k].completed == true) {
//         listItem.classList.add("done");
//       }

//       let test = i;
//       console.log(k);

//       listItem.addEventListener("click", function (event, i) {
//         event.target.classList.toggle("done");
//         console.log(i);

//         localStorage.setItem("taskData", JSON.stringify(Task.allTasks));
//       });

//       list.appendChild(listItem);
//     }
//   }
// }

// renderTask();

// tim's notes:// update completed on the clicked items
// update localStorage with the latest version of the object

// listItem.addEventListener("click", function (event) {
//   event.target.classList.toggle("done");

//   // Task.allTasks[i].steps[k].completed = !Task.allTasks[i].steps[k].completed;
//   localStorage.setItem("taskData", JSON.stringify(Task.allTasks));
//   //
// });

// function handleClick (
//// writew a for loop that goes round the Tasks.allTasks and for each item, runs thsoe if statements
//   if (listItem[i].event == "true") {
//     document.Task.steps[i].completed == "false";
//   }
//   if (listItem[i].event == "false") {
//     document.Task.steps[i].completed == "true";
//   }
// )

// this was my first attempt:
// Task.alltasks[i].steps.addEventListener('click', function(event)) {
//   for (i = 0; i < Task.allTasks.length; i++) {
//     if (document.Task.steps[i].event == 'true');
//     document.Task.steps[i].completed == 'true';
//   }
// }

// 1) i want to create a click function, to mark objects within the "steps" array as true/false.

// 2) I want the loop to check all my array objects within "steps" array and if they have been clicked, to change them to true.

// 3) I want to save this to local data if they have marked any as true.
