const btnAdd = document.getElementById("btnAdd");
const input = document.getElementById("input");
const list = document.getElementById("list");
const items = JSON.parse(localStorage.getItem("items")) || [];

function createTask() {
    const task = document.createElement("li");
            const btnX = document.createElement("span");
            const item = {
                itemtext: this.input.value,
                done: false
            };
            btnX.className = "btn__delete";
            task.className = "li__task";
            list.append(task);
            btnX.append("x");
            task.append(item, btnX);
            items.push(item);
            localStorage.setItem("items",JSON.stringify(items));
            input.value = '';
            deleteTask();
            doneTask();
}

function addTask() {
     populateItem();
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

function populateItem() {
    list.innerHTML = items.map((item) => {
        return `
            <li class="list__item">
                ${item}
                <span class="btn__delete">x</span>
            </li>
        `;    
    }).join("");
}

addTask();
enterTask();

