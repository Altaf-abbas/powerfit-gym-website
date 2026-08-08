const logoutBtn = document.getElementById("logoutBtn");
const cancelBtn = document.getElementById("cancelBtn");
const animation = document.getElementById("logoutAnimation");

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("adminToken");

    animation.style.display = "flex";

    setTimeout(() => {

        window.location.href = "login.html";

    }, 150);

});

cancelBtn.addEventListener("click", () => {

    window.location.href = "dashboard.html";

});