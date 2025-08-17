// Toggle between sections
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Add tasks functionality
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  
  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  // delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "✖";
  delBtn.style.background = "red";
  delBtn.style.color = "white";
  delBtn.style.border = "none";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}

// Profile form save
document.getElementById("profileForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("empName").value;
  const dept = document.getElementById("empDept").value;

  document.getElementById("profileDisplay").innerHTML =
    `<h3>Employee Details</h3>
     <p><strong>Name:</strong> ${name}</p>
     <p><strong>Department:</strong> ${dept}</p>`;
  
  this.reset();
});
