// ===============================
// CONTACT FORM + BACKEND
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector("textarea");

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value,
        }),
    });

    const result = await response.json();

    alert(result.message);

    form.reset();
});
// ===============================
// PREMIUM 3D EFFECTS
// ===============================

// 3D Card Tilt
document.querySelectorAll(".card, .plan, .trainer").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 20;
        const rotateX = -(y / rect.height - 0.5) * 20;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

// Hero Fade Animation
window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(50px)";

    setTimeout(() => {

        hero.style.transition = "1.2s";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    }, 300);

});

// Smooth Button Glow
document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.boxShadow = "0 0 30px #ff3b3b";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.boxShadow = "none";

    });

});
// ===============================
// PREMIUM NAVBAR
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        if(window.scrollY >= top){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});
// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2000);

});
// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeToggle.innerHTML = "☀️";
    }else{
        themeToggle.innerHTML = "🌙";
    }

});
// LOGIN MODAL

const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", () => {
    loginModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
});
const loginFormBtn = document.querySelector("#loginModal button");

loginFormBtn.addEventListener("click", function () {

    const email = document.querySelector('#loginModal input[type="email"]').value;
    const password = document.querySelector('#loginModal input[type="password"]').value;

    if(email === "" || password === ""){
        alert("Please fill all fields.");
        return;
    }

    alert("Login Successful!");

    document.getElementById("loginModal").style.display = "none";
});
// ===============================
// POWERFIT AI CHATBOT
// ===============================

const chatToggle = document.getElementById("chatToggle");
const chatbot = document.getElementById("chatbot");
const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("userInput");
const messages = document.getElementById("chatMessages");

chatToggle.addEventListener("click", () => {
    chatbot.style.display =
        chatbot.style.display === "block" ? "none" : "block";
});

function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    messages.innerHTML += `<div class="user">${text}</div>`;

    let reply = "❓ Sorry, I don't understand.";

    const q = text.toLowerCase();

    if (q.includes("chest"))
        reply = "💪 Best chest workout: Bench Press, Incline Press, Cable Fly.";

    else if (q.includes("back"))
        reply = "🏋️ Best back workout: Pull-up, Lat Pulldown, Barbell Row.";

    else if (q.includes("leg"))
        reply = "🦵 Best leg workout: Squat, Leg Press, Lunges.";

    else if (q.includes("protein"))
        reply = "🥚 Consume around 1.6–2.2g protein per kg of body weight daily if you train regularly.";

    else if (q.includes("bmi"))
        reply = "📏 Use the BMI Calculator section on this page.";

    else if (q.includes("weight"))
        reply = "🍚 Stay in a calorie surplus, eat enough protein, and follow progressive overload.";

    else if (q.includes("hello") || q.includes("hi"))
        reply = "👋 Hello! Welcome to PowerFit Gym.";

    messages.innerHTML += `<div class="bot">${reply}</div>`;

    messages.scrollTop = messages.scrollHeight;

    input.value = "";
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});
// ===============================
// CONTACT FORM
// ===============================
console.log("Script Loaded");
const contactForm =
 document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", 
        async (e) => {
                e.preventDefault();
                console.log("Form Submitted");
        const name =
         document.getElementById("name").value.trim();
        const email = 
        document.getElementById("email").value.trim();
        const message =
         document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            const data = await response.json();

            if (data.success) {
                alert("✅ " + data.message);
                contactForm.reset();
            } else {
                alert("❌ " + data.message);
            }

        } catch (error) {
            console.error(error);
            alert("❌ Server Error!");
        }
    });
}
// ===============================
// SIGNUP MODAL
// ===============================

const signupBtn = document.getElementById("signupBtn");
const signupModal = document.getElementById("signupModal");
const closeSignup = document.querySelector(".close-signup");

signupBtn.addEventListener("click", () => {
    signupModal.style.display = "flex";
});

closeSignup.addEventListener("click", () => {
    signupModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === signupModal) {
        signupModal.style.display = "none";
    }
});

// STEP 1 → STEP 2
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");

document.getElementById("nextBtn").addEventListener("click", () => {
    step1.style.display = "none";
    step2.style.display = "block";
});

document.getElementById("backBtn").addEventListener("click", () => {
    step2.style.display = "none";
    step1.style.display = "block";
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

    alert("🎉 Account Created Successfully!");

    signupModal.style.display = "none";

    step2.style.display = "none";
    step1.style.display = "block";

    e.target.reset();
});
