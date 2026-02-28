let addBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        addTaskToDOM(task.text, task.completed);
    });
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        let taskSpan = li.querySelector(".task-text");
        tasks.push({
            text: taskSpan.textContent,
            completed: taskSpan.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskToDOM(taskText, isCompleted = false) {
    if (taskText === "") return;

    let li = document.createElement("li");

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text");

    if (isCompleted) {
        taskSpan.classList.add("completed");
    }

    taskSpan.addEventListener("click", function() {
        taskSpan.classList.toggle("completed");
        saveTasks();
    });

    let editBtn = document.createElement("span");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    editBtn.addEventListener("click", function() {
        let currentText = taskSpan.textContent;
        let input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.classList.add("edit-input");

        li.replaceChild(input, taskSpan);
        li.removeChild(editBtn);

        input.focus();

        input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                let newText = input.value.trim();
                if (newText !== "") {
                    taskSpan.textContent = newText;
                    li.replaceChild(taskSpan, input);
                    li.insertBefore(editBtn, deleteBtn);
                    saveTasks();
                }
            }
        });
    });

    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function() {
        li.remove();
        saveTasks();
    });

    li.appendChild(taskSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

addBtn.addEventListener("click", function() {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTaskToDOM(taskText);
        saveTasks();
        taskInput.value = "";
    }
});

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

loadTasks();