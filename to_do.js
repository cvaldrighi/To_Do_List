const btnAdd = document.getElementById("btnAdd");
const input = document.getElementById("input");
const list = document.getElementById("list");

function addTask() {
     btnAdd.onclick = function() {
        if (input.value == '') {
            alert("please add a task");
        } else {
            const task = document.createElement("li");
            list.append(task);
            task.append(input.value);
            input.value = '';
        }
    }
}

function doneTask() {
    list.onclick = function (e) {
        const okTask = e.target;
            okTask.classList.toggle("list__completed");
    }
}

addTask();
doneTask();

