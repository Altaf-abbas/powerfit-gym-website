// =============================
// Demo Dashboard Data
// =============================

const dashboardData = {
    totalMembers: 245,
    totalPayments: 186,
    todayAttendance: 97,
    monthlyIncome: 185000
};

// =============================
// Dashboard Cards
// =============================

document.getElementById("members").innerText =
dashboardData.totalMembers;

document.getElementById("payments").innerText =
dashboardData.totalPayments;

document.getElementById("attendance").innerText =
dashboardData.todayAttendance;

document.getElementById("income").innerText =
"₹ " + dashboardData.monthlyIncome.toLocaleString();

// =============================
// Revenue Chart
// =============================

const revenueCtx =
document.getElementById("revenueChart");

new Chart(revenueCtx, {

    type: "bar",

    data: {

        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul"
        ],

        datasets: [{

            label: "Revenue",

            data: [
                50000,
                62000,
                70000,
                85000,
                90000,
                120000,
                185000
            ],

            borderWidth: 1

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                display: true

            }

        }

    }

});

// =============================
// Attendance Chart
// =============================

const attendanceCtx =
document.getElementById("attendanceChart");

new Chart(attendanceCtx, {

    type: "line",

    data: {

        labels: [

            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"

        ],

        datasets: [{

            label: "Attendance",

            data: [

                72,
                81,
                75,
                90,
                96,
                110,
                97

            ],

            tension: .4,

            fill: false

        }]

    },

    options: {

        responsive: true

    }

});

// =============================
// Dark Mode
// =============================

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

    else {

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});

// =============================
// Load Saved Theme
// =============================

window.addEventListener("load", () => {

    const savedTheme =
    localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

});

// =============================
// Future API Functions
// =============================

// fetchMembers()
// fetchPayments()
// fetchAttendance()
// fetchRevenue()

// Backend Ready Structure
