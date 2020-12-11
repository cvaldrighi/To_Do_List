const btnAdd = document.getElementById("btnAdd");
const input = document.getElementById("input");
const list = document.getElementById("list");

function addTask() {
     btnAdd.onclick = function() {
        if (input.value == '') {
            alert("please add a task");
        } else {
            const task = document.createElement("li");
            const btnX = document.createElement("span");
            btnX.className = "btn__delete";
            list.append(task);
            btnX.append("x");
            task.append(input.value, btnX);
            input.value = '';
            deleteTask();
        }
    }
}

function doneTask() {
    list.onclick = function (e) {
        const okTask = e.target;
            okTask.classList.toggle("list__completed");
    }
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
doneTask();

