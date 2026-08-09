// ===============================
// Elements
// ===============================

const modal = document.getElementById("attendanceModal");
const addBtn = document.querySelector(".add-btn");
const closeModal = document.getElementById("closeModal");
const closeBtn = document.getElementById("closeBtn");

const tbody = document.querySelector("#attendanceTable tbody");
const searchInput = document.getElementById("searchInput");

// ===============================
// Open Modal
// ===============================

addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// ===============================
// Close Modal
// ===============================

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// ===============================
// Search
// ===============================

searchInput.addEventListener("keyup", function () {

    const filter = this.value.toLowerCase();

    const rows = tbody.querySelectorAll("tr");

    rows.forEach(row => {

        if (row.innerText.toLowerCase().includes(filter)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});

// ===============================
// Save Attendance
// ===============================

document.getElementById("saveAttendance").addEventListener("click", function () {

    const member = document.getElementById("memberName").value.trim();
    const date = document.getElementById("attendanceDate").value;
    const timeIn = document.getElementById("timeIn").value;
    const timeOut = document.getElementById("timeOut").value;
    const status = document.getElementById("status").value;

    if (member == "" || date == "") {

        alert("Please Fill All Fields");

        return;

    }

    const row = document.createElement("tr");

    row.innerHTML = `

    <td>${tbody.rows.length + 101}</td>

    <td>
        <img src="https://i.pravatar.cc/45?u=${Date.now()}">
    </td>

    <td>${member}</td>

    <td>${date}</td>

    <td>${timeIn}</td>

    <td>${timeOut}</td>

    <td>

        <span class="${status.toLowerCase()}">

            ${status}

        </span>

    </td>

    <td>

        <button class="edit">

            <i class="fa-solid fa-pen"></i>

        </button>

        <button class="delete">

            <i class="fa-solid fa-trash"></i>

        </button>

    </td>

    `;

    tbody.appendChild(row);

    attachEvents(row);

    updateCards();

    saveAttendance();

    document.getElementById("memberName").value = "";
    document.getElementById("attendanceDate").value = "";
    document.getElementById("timeIn").value = "";
    document.getElementById("timeOut").value = "";
    document.getElementById("status").selectedIndex = 0;

    modal.style.display = "none";

    alert("Attendance Saved Successfully");

});

// ===============================
// Edit & Delete
// ===============================

function attachEvents(row){

    row.querySelector(".delete").onclick = function(){

        if(confirm("Delete Attendance?")){

            row.remove();

            saveAttendance();

            updateCards();

        }

    }

    row.querySelector(".edit").onclick = function(){

        alert("Edit Feature Coming Soon");

    }

}

document.querySelectorAll("#attendanceTable tbody tr").forEach(row=>{

    attachEvents(row);

});

// ===============================
// Dashboard Cards
// ===============================

function updateCards(){

    const rows = tbody.querySelectorAll("tr");

    let total = rows.length;

    let present = 0;

    let absent = 0;

    rows.forEach(row=>{

        const status = row.cells[6].innerText.trim();

        if(status=="Present"){

            present++;

        }else if(status=="Absent"){

            absent++;

        }

    });

    let percent = total==0 ? 0 : Math.round((present/total)*100);

    document.querySelectorAll(".card h2")[0].innerText = total;
    document.querySelectorAll(".card h2")[1].innerText = present;
    document.querySelectorAll(".card h2")[2].innerText = absent;
    document.querySelectorAll(".card h2")[3].innerText = percent+"%";

}

// ===============================
// Local Storage
// ===============================

function saveAttendance(){

    localStorage.setItem("attendanceData", tbody.innerHTML);

}

function loadAttendance(){

    const data = localStorage.getItem("attendanceData");

    if(data){

        tbody.innerHTML = data;

        document.querySelectorAll("#attendanceTable tbody tr").forEach(row=>{

            attachEvents(row);

        });

    }

    updateCards();

}

loadAttendance();
