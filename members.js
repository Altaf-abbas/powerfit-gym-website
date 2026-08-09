// ================================
// Search Members
// ================================

const searchInput = document.getElementById("searchInput");
const table = document.getElementById("memberTable");

searchInput.addEventListener("keyup", function () {

    const filter = searchInput.value.toLowerCase();

    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {

        let text = rows[i].innerText.toLowerCase();

        if (text.indexOf(filter) > -1) {

            rows[i].style.display = "";

        } else {

            rows[i].style.display = "none";

        }

    }

});
function attachRowEvents(row){

    // Delete Button

    row.querySelector(".delete").addEventListener("click",function(){

        if(confirm("Are you sure you want to delete this member?")){

            row.remove();

            alert("Member Deleted Successfully");

        }

    });

    // Edit Button

    row.querySelector(".edit").addEventListener("click",function(){

        const memberName=row.cells[2].innerText;

        alert("Edit Member : "+memberName);

    });

}

// ================================
// Add Member Button
// ================================

const modal = document.getElementById("memberModal");
const addBtn = document.querySelector(".add-btn");
const closeModal = document.getElementById("closeModal");

addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.querySelectorAll("#memberTable tbody tr").forEach(row=>{

    attachRowEvents(row);

});

// ================================
// Demo Statistics
// ================================

console.log("Total Members :",
table.rows.length-1);

// ================================
// Future API
// ================================

// fetchMembers()
// addMember()
// updateMember()
// deleteMember()
// searchMember()

console.log("Members Module Loaded Successfully");
// ================================
// Save Member
// ================================

document.getElementById("saveMember").addEventListener("click", function () {

    const name = document.getElementById("memberName").value.trim();
    const mobile = document.getElementById("memberMobile").value.trim();
    const email = document.getElementById("memberEmail").value.trim();
    const age = document.getElementById("memberAge").value.trim();
    const gender = document.getElementById("memberGender").value;
    const plan = document.getElementById("memberPlan").value;
    const fees = document.getElementById("memberFees").value.trim();
    const payment = document.getElementById("paymentStatus").value;
    const joining = document.getElementById("joiningDate").value;
    const expiry = document.getElementById("expiryDate").value;
    const address = document.getElementById("memberAddress").value.trim();

    if (
        name === "" ||
        mobile === "" ||
        email === "" ||
        age === "" ||
        gender === "" ||
        plan === "" ||
        fees === "" ||
        joining === "" ||
        expiry === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    const tbody = document.querySelector("#memberTable tbody");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${tbody.rows.length + 101}</td>

      <td>
    <img src="${photoPreview.src}">
      </td>

        <td>${name}</td>

        <td>${plan}</td>

        <td>${joining}</td>

        <td>${expiry}</td>

        <td>
            <span class="active-status">
                Active
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

    attachRowEvents(row);

    // Clear Form

    document.getElementById("memberName").value = "";
    document.getElementById("memberMobile").value = "";
    document.getElementById("memberEmail").value = "";
    document.getElementById("memberAge").value = "";
    document.getElementById("memberGender").selectedIndex = 0;
    document.getElementById("memberPlan").selectedIndex = 0;
    document.getElementById("memberFees").value = "";
    document.getElementById("paymentStatus").selectedIndex = 0;
    document.getElementById("joiningDate").value = "";
    document.getElementById("expiryDate").value = "";
    document.getElementById("memberAddress").value = "";

    modal.style.display = "none";

    alert("Member Added Successfully!");

});
// Photo Preview

const memberPhoto=document.getElementById("memberPhoto");

const photoPreview=document.getElementById("photoPreview");

memberPhoto.addEventListener("change",function(){

    const file=this.files[0];

    if(file){

        photoPreview.src=URL.createObjectURL(file);

    }

});
