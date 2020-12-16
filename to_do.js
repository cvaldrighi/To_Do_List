const btnAdd = document.getElementById("btnAdd");
const input = document.getElementById("input");
const list = document.getElementById("list");

function createTask() {
    const task = document.createElement("li");
            const btnX = document.createElement("span");
            btnX.className = "btn__delete";
            task.className = "li__task";
            list.append(task);
            btnX.append("x");
            task.append(input.value, btnX);
            localStorage.setItem("task",input.value);
            input.value = '';
            deleteTask();
            doneTask();
}

function addTask() {
     btnAdd.onclick = function() {
        if (input.value == '') {
            alert("please add a task");
        } else { createTask();  
        }
    }
}

function enterTask() {
    input.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            createTask();
        }
    });
}

function doneTask() {
    const tasks = document.querySelectorAll(".li__task");
    tasks.forEach(function(task) {
        task.onclick = function (e) {
             const okTask = e.currentTarget;
             okTask.classList.toggle("list__completed");
            }
        })
    }
    


function deleteTask() {
    const btnDeletes = document.querySelectorAll(".btn__delete");
    btnDeletes.forEach(function(btnDelete) {
        btnDelete.onclick = function (e) {
            const confirmation = confirm("Are you sure?");
            if (confirmation) {
                const byeTask = e.target;
                byeTask.parentElement.remove();   
            }       
        }
    })
}


addTask();
enterTask();

