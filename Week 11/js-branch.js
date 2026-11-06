
let tasks = [];

const taskForm = document.getElementById("task-form");
const taskDesc = document.getElementById("task-desc");
const tableBody = document.getElementById("task-table-body");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskitem = taskDesc.value.trim();

    if (taskitem !== "") {
        tasks.push(taskitem);

        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.textContent = taskitem;

        row.appendChild(cell);
        tableBody.appendChild(row);

        taskDesc.value = "";
    }
});
