
// Hiển thị javascript object lên browser
//===============================
// let myObject = { 
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
// let jsonString = JSON.stringify(myObject);

// document.getElementById("myDiv").innerHTML = jsonString;



//=========================================
//Hiển thị array javascript object lên browser
// const fruits = ["apple", "banana", "orange"];

// 		const list = document.getElementById("fruits-list");
// 		for (let i = 0; i < fruits.length; i++) {
// 			const listItem = document.createElement("li");
// 			listItem.appendChild(document.createTextNode(fruits[i]));
// 			list.appendChild(listItem);
// 		}


//================================================
// Hiển thị Array javacript object in to table -->browsers
// let students = [
//   { name: 'John', age: 18 },
//   { name: 'Jane', age: 20 },
//   { name: 'Bob', age: 19 },
//   { name: 'Tin', age: 20 }
// ];

// // Tạo một bảng HTML
// let table = document.createElement('table');
// let headerRow = table.insertRow();
// let nameHeader = headerRow.insertCell();
// nameHeader.innerText = 'Name';
// let ageHeader = headerRow.insertCell();
// ageHeader.innerText = 'Age';

// // Thêm từng dòng vào bảng
// students.forEach(student => {
//   let row = table.insertRow();
//   let nameCell = row.insertCell();
//   nameCell.innerText = student.name;
//   let ageCell = row.insertCell();
//   ageCell.innerText = student.age;
// });

// // Chèn bảng vào trang web của bạn
// document.body.appendChild(table);

//================================================
// const fruits = [
//   { name: "apple", color: "red" },
//   { name: "banana", color: "yellow" },
//   { name: "orange", color: "orange" },
//   { name: "tin", color: "vang" }
// ];

// const table = document.getElementById("fruits-table");
// const tbody = table.querySelector("tbody");

// fruits.forEach((fruit, index) => {
//   const row = document.createElement("tr");

//   const indexCell = document.createElement("td");
//   indexCell.appendChild(document.createTextNode(index));
//   row.appendChild(indexCell);

//   const nameCell = document.createElement("td");
//   nameCell.appendChild(document.createTextNode(fruit.name));
//   row.appendChild(nameCell);

//   const colorCell = document.createElement("td");
//   colorCell.appendChild(document.createTextNode(fruit.color));
//   row.appendChild(colorCell);

//   tbody.appendChild(row);
// });


// ================================
// click to add table 01 row
// const table = document.getElementById("my-table");
// 		const tbody = table.querySelector("tbody");
// 		const form = document.getElementById("add-row-form");

// 		form.addEventListener("submit", (event) => {
// 			event.preventDefault();

// 			const nameInput = form.querySelector("input[name='name']");
// 			const emailInput = form.querySelector("input[name='email']");

// 			const newRow = document.createElement("tr");

// 			const nameCell = document.createElement("td");
// 			nameCell.appendChild(document.createTextNode(nameInput.value));
// 			newRow.appendChild(nameCell);

// 			const emailCell = document.createElement("td");
// 			emailCell.appendChild(document.createTextNode(emailInput.value));
// 			newRow.appendChild(emailCell);

// 			tbody.appendChild(newRow);

// 			nameInput.value = "";
// 			emailInput.value = "";
// 		});

//===========================================
// Sử dụng API 

$(document).ready(function() {
  fetch('https://jsonplaceholder.typicode.com/users') // link API
    .then(response => response.json())
    .then(data => {
      const tableBody = $("#table-body");
      data.forEach((value) => {
        const newRow = $("<tr>");
        newRow.append($("<td>").text(value.id));
        newRow.append($("<td>").text(value.name));
        newRow.append($("<td>").text(value.email));
        
        tableBody.append(newRow);
      });
    })
    .catch(error => console.log(error)); // trường hợp lấy data lỗi
});

$(document).ready(function() {
  // Lấy đối tượng bảng
  const tableBody = $("#table-body");

  // Hàm để thêm hàng mới vào bảng
  function addRow(id, name, email) {
    const newRow = $("<tr>");
    newRow.append($("<td>").text(id));
    newRow.append($("<td>").text(name));
    newRow.append($("<td>").text(email));

    tableBody.append(newRow);
  }

  // Lắng nghe sự kiện click của nút "Add Row"
  $("#add-row").on("click", function() {
    // Lấy giá trị từ các trường nhập liệu
    const id = $("#id").val();
    const name = $("#name").val();
    const email = $("#email").val();

    // Thêm hàng mới vào bảng
    addRow(id, name, email);

    // Xóa dữ liệu từ các trường nhập liệu
    $("#id").val("");
    $("#name").val("");
    $("#email").val("");
  });
  
});