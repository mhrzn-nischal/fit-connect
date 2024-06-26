document.addEventListener("DOMContentLoaded", () => {
  const completeBtn = document.getElementById("complete-btn");
  const editBtn = document.getElementById("edit-btn");

  completeBtn.addEventListener("click", () => {
    markAsCompleted();
  });

  editBtn.addEventListener("click", () => {
    editTask();
  });
});

function markAsCompleted() {
  alert("Task has been marked as completed!");
  // Here you can add logic to update the task status in your database
}

function editTask() {
  const newTitle = prompt("Enter new task title:", "Task Title");
  if (newTitle) {
    document.querySelector(".task-details h2").innerText = newTitle;
    alert("Task title has been updated!");
    // Here you can add logic to update the task details in your database
  }
}
