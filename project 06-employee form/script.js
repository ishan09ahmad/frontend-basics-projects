let nameEl = document.querySelector("#name");
let professionEl = document.querySelector("#profession");
let ageEl = document.querySelector("#age");
let addButtonEl = document.querySelector("#addButton");
let messageEl = document.querySelector("#message");
let numberText = document.querySelector(".number");
let listEl = document.querySelector("#list");

let users = [];

addButtonEl.addEventListener("click", (e) => {
  e.preventDefault();

  let name = nameEl.value.trim();
  let profession = professionEl.value.trim();
  let age = Number(ageEl.value.trim());

  if (name === "" || profession === "" || age === "") {
    messageEl.innerText =
      "Error : Please make sure all fields are filled before adding an employee!";
    messageEl.style.color = "red";
    return;
  }
  if (isNaN(age) || age <= 0 || age > 100) {
    messageEl.innerText = "Error : Please enter a valid age between 1 and 100!";
    messageEl.style.color = "red";
    return;
  }

  let user = {
    id: users.length + 1,
    name,
    profession,
    age,
  };

  users.push(user);
  messageEl.innerText = "Success : Employee Added!";
  messageEl.style.color = "green";

  nameEl.value = "";
  professionEl.value = "";
  ageEl.value = "";

  renderUsers();
});

function renderUsers() {

  listEl.innerHTML = "";

  if (users.length > 0) {
    numberText.classList.add("hide");
  }

  users.forEach((user, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <div>
        <div>${index + 1}.</div>
        <div>Name: ${user.name}</div>
        <div>Profession: ${user.profession}</div>
        <div>Age: ${user.age}</div>
      </div>
      <button onclick="deleteUser(${user.id})">Delete User</button>
    `;

    listEl.appendChild(li);
  });
}

function deleteUser(id) {
  users = users.filter((user) => user.id !== id);
  renderUsers();
}
