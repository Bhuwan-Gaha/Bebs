// ===================================
// WELCOME MESSAGE
// ===================================

window.addEventListener("load", () => {
    console.log("Welcome to Biju English Boarding Secondary School Website");
});

// ===================================
// DARK MODE
// ===================================

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML = "☀️";
    }
    else{
        darkBtn.innerHTML = "🌙";
    }

});

// ===================================
// LIVE SEARCH
// ===================================

const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});

// ===================================
// SMOOTH SCROLL
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===================================
// CONTACT FORM VALIDATION
// ===================================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if(input.value.trim() === ""){

            valid = false;

            input.style.border = "2px solid red";

        }
        else{

            input.style.border = "2px solid green";

        }

    });

    if(valid){

        alert("✅ Message Sent Successfully!");

        form.reset();

        inputs.forEach(input => {

            input.style.border = "2px solid #ddd";

        });

    }
    else{

        alert("⚠ Please fill all fields.");

    }

});

// ===================================
// SCROLL ANIMATION
// ===================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});