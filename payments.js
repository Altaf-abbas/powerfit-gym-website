// ================================
// Elements
// ================================

const modal = document.getElementById("paymentModal");
const addBtn = document.querySelector(".add-btn");
const closeModal = document.getElementById("closeModal");
const closeBtn = document.getElementById("closeBtn");

const tbody = document.querySelector("#paymentTable tbody");
const searchInput = document.getElementById("searchInput");

// ================================
// Open Modal
// ================================

addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// ================================
// Close Modal
// ================================

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

// ================================
// Search Payment
// ================================

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

// ================================
// Edit & Delete Events
// ================================

function attachEvents(row){

    row.querySelector(".delete").onclick=function(){

        if(confirm("Delete this payment?")){

            row.remove();

            updateCards();

        }

    }

    row.querySelector(".edit").onclick=function(){

        alert("Edit Feature Coming Soon");

    }

}

document.querySelectorAll("#paymentTable tbody tr").forEach(row=>{

    attachEvents(row);

});

// ================================
// Save Payment
// ================================

document.getElementById("savePayment").addEventListener("click",function(){

    const member=document.getElementById("memberName").value.trim();

    const plan=document.getElementById("plan").value;

    const amount=document.getElementById("amount").value;

    const date=document.getElementById("paymentDate").value;

    const status=document.getElementById("status").value;

    if(member=="" || amount=="" || date==""){

        alert("Please Fill All Fields");

        return;

    }

    const row=document.createElement("tr");

    row.innerHTML=`

    <td>${tbody.rows.length+1}</td>

    <td>${member}</td>

    <td>${plan}</td>

    <td>₹${amount}</td>

    <td>${date}</td>

    <td>

        <span class="${status=="Paid" ? "paid":"pending"}">

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

    document.getElementById("memberName").value="";
    document.getElementById("amount").value="";
    document.getElementById("paymentDate").value="";

    modal.style.display="none";

    alert("Payment Added Successfully");

});

// ================================
// Dashboard Cards
// ================================

function updateCards(){

    const rows=tbody.querySelectorAll("tr");

    let revenue=0;

    let paid=0;

    let pending=0;

    rows.forEach(row=>{

        const amount=parseInt(row.cells[3].innerText.replace("₹",""));

        revenue+=amount;

        if(row.cells[5].innerText=="Paid"){

            paid++;

        }else{

            pending++;

        }

    });

    document.querySelectorAll(".card h2")[0].innerText="₹"+revenue;

    document.querySelectorAll(".card h2")[1].innerText=rows.length;

    document.querySelectorAll(".card h2")[2].innerText=paid;

    document.querySelectorAll(".card h2")[3].innerText=pending;

}

updateCards();
// Copy UPI ID

document.getElementById("copyUPI").addEventListener("click",function(){

    navigator.clipboard.writeText(document.getElementById("upiId").innerText);

    alert("UPI ID Copied Successfully");

});
