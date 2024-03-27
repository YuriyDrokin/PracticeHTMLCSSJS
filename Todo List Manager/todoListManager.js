const addForm = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const clearAll = document.querySelector(".clear");
const messageSpan = document.querySelector(".message span");

function updateMessage() {
  const textLength = tasks.children.length;
  messageSpan.textContent = `You have ${textLength} pending tasks`;
}



addForm.addEventListener("submit", event => {
  event.preventDefault();
  const value = addForm.task.value.trim(); // remove white space 

  if (value.length) {

    tasks.innerHTML += `<li>
                          <span>${value}</span>
                          <i class="bi bi-trash-fill delete"></i>
                        </li>`;
    addForm.reset(); // resetting for new input
    updateMessage(); // update task numbers
  }

});

tasks.addEventListener("click", event => {

  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    updateMessage();
  }
});

clearAll.addEventListener("click", event => {
  const taskItems = tasks.querySelectorAll("li");
  taskItems.forEach(item => {
    item.remove();
    updateMessage();
  })
});
updateMessage();