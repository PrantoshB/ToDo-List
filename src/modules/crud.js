const ListData = document.querySelector(".lists");
const InputField = document.querySelector(".add-to-list");
const ClearAll = document.querySelector(".clear-all");
let today = new Date();
const DateField = document.querySelector('#show-date')
let day = today.getDay()
let date = today.getDate()
let month = today.getMonth()
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
let monthlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



let completed = false,
  index = 0;
let ToDoData = [];

InputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && InputField.value.length != 0) {
    let storedData = localStorage.getItem("To-Do");

    if (storedData === null) {
      ToDoData = [];
    } else {
      ToDoData = JSON.parse(storedData);
      index = ToDoData.length === 0 ? 0 : ToDoData.length;
    }

    const LocalData = {
      index: index,
      description: InputField.value,
      completed: completed,
    };
    ToDoData.push(LocalData);
    localStorage.setItem("To-Do", JSON.stringify(ToDoData));
    addToList();
  }
});

function addToList() {
  ListData.innerHTML = "";
  ToDoData.forEach((element) => {


    if (element.completed == true) {
      ListData.innerHTML += `
      <div class="mainlist">
      <input type="checkbox" class="check" id="check${element.index}" onclick="Check(${element.index});" checked>
      <input class="listitem checked" id="list${element.index}" value="${element.description}" readonly>
      <i class="fa-solid fa-pen-to-square edit " id="edit${element.index}" onclick="editList(${element.index});"></i>
           <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" onclick="saveList(${element.index});"></i>
      <i id="removeicon" onclick="Remove(${element.index});" class="fa-solid fa-trash"></i>
      </div>
     `;

    }
    else {
      ListData.innerHTML += `
      <div class="mainlist">
      <input type="checkbox" class="check" id="check${element.index}" onclick="Check(${element.index});">
      <input class="listitem" id="list${element.index}" value="${element.description}" readonly>
      <i class="fa-solid fa-pen-to-square edit " id="edit${element.index}" onclick="editList(${element.index});"></i>
           <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" onclick="saveList(${element.index});"></i>
      <i id="removeicon" onclick="Remove(${element.index});" class="fa-solid fa-trash"></i>
      </div>
     `;
    }
    InputField.value = "";
  });
}


window.Check = (index) => {
  const CheckIfChecked = document.getElementById("check" + index + "");
  const specList = document.getElementById("list" + index + "");
  if (CheckIfChecked.checked) {
    specList.style.textDecoration = 'line-through'
    specList.style.color = 'gray'
    let storedData = localStorage.getItem("To-Do");
    ToDoData = JSON.parse(storedData);
    ToDoData[index].completed = true;
    localStorage.setItem("To-Do", JSON.stringify(ToDoData));
    addToList();
  }
  else {
    specList.style.textDecoration = 'none'
    specList.style.color = 'inherit'
    let storedData = localStorage.getItem("To-Do");
    ToDoData = JSON.parse(storedData);
    ToDoData[index].completed = false;
    localStorage.setItem("To-Do", JSON.stringify(ToDoData));
    addToList();
  }
}


window.editList = (index) => {
  const editBtn = document.getElementById("edit" + index + "");
  const saveBtn = document.getElementById("save" + index + "");

  saveBtn.style.display = "block";
  editBtn.style.display = "none";
  const specList = document.getElementById("list" + index + "");
  specList.removeAttribute("readonly");
  const length = specList.value.length;
  specList.setSelectionRange(length, length);
  specList.focus();
  return specList;
};

window.saveList = (index) => {
  const editBtn = document.getElementById("edit" + index + "");
  const saveBtn = document.getElementById("save" + index + "");

  saveBtn.style.display = "none";
  editBtn.style.display = "block";

  const specList = document.getElementById("list" + index + "");
  let storedData = localStorage.getItem("To-Do");
  ToDoData = JSON.parse(storedData);
  ToDoData[index].description = specList.value;

  localStorage.setItem("To-Do", JSON.stringify(ToDoData));
  addToList();
};

window.Remove = (index) => {
  let storedData = localStorage.getItem("To-Do");
  ToDoData = JSON.parse(storedData);
  ToDoData.splice(index, 1);
  for (let i = 0; i < ToDoData.length; i++) {
    ToDoData[i].index = i;
  }

  localStorage.setItem("To-Do", JSON.stringify(ToDoData));
  addToList();
};

window.onload = () => {
  DateField.innerHTML = `${date} ${monthlist[month]}, ${daylist[day]}`;
  if (localStorage.getItem("To-Do")) {
    ToDoData = JSON.parse(localStorage.getItem("To-Do"));
  }
  addToList()
};

ClearAll.addEventListener('click', () => {
  console.log('clicked')
  let storedData = localStorage.getItem("To-Do");
  ToDoData = JSON.parse(storedData);
  let ClearedData = ToDoData.filter((element) => element.completed === false);
  ToDoData = ClearedData;
  for (let i = 0; i < ToDoData.length; i++) {
    ToDoData[i].index = i;
  }
  localStorage.setItem("To-Do", JSON.stringify(ToDoData));
  addToList();
})