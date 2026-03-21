/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr2 = [
  { id: 4, name: "alex", age: "22", profession: "designer" },
  { id: 5, name: "maria", age: "25", profession: "developer" },
  { id: 6, name: "sam", age: "21", profession: "tester" },
];
function PrintDeveloperbyMap() {
  arr.map((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function addData() {
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });

  arr.forEach((item) => {
    if (item.id === 4) {
      console.log(item);
    }
  });
}

function removeAdmin() {
  arr = arr.filter((item) => item.profession !== "admin");

  arr.forEach((item) => {
    console.log(item);
  });
}

function concatenateArray() {
  let arr3 = arr.concat(arr2);
  arr3.forEach((item) => {
    console.log(item);
  });
}
