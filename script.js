const slidepage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1")
const nextBtnSec = document.querySelector(".next-1")
const prevBtnThird = document.querySelector(".prev-2")
const nextBtnThird = document.querySelector(".next-2")
const prevBtnFourth = document.querySelector(".prev-3")
const submitBtn = document.querySelector(".submit")
const progresstext = document.querySelectorAll(".step p")
const progresscheck = document.querySelectorAll(".step .check")
const bullet = document.querySelectorAll(".step .bullet")
let max = 4;
let current = 1;

firstNextBtn.addEventListener("click", function(){
    slidepage.style.marginLeft = "-25%";
    bullet [current -1].classList.add("active")
    progresstext[current -1].classList.add("active");
    progresscheck[current - 1].classList.add("active")
    current += 1;
});

nextBtnSec.addEventListener("click", function(){
    slidepage.style.marginLeft = "-50%";
    bullet [current -1].classList.add("active")
    progresstext[current -1].classList.add("active");
    progresscheck[current - 1].classList.add("active")
    current += 1;
    
});

nextBtnThird.addEventListener("click", function(){
    slidepage.style.marginLeft = "-75%";
    bullet [current -1].classList.add("active");
    progresstext[current -1].classList.add("active");
    progresscheck[current - 1].classList.add("active")
    current += 1;
});

submitBtn.addEventListener("click", function(){
    bullet [current -1].classList.add("active");
    progresstext[current -1].classList.add("active");
    progresscheck[current - 1].classList.add("active")
    current += 1;
    setTimeout(function(){
        alert("thanks");
        location.reload()
    }, 800)
});

prevBtnSec.addEventListener("click", function(){
    slidepage.style.marginLeft = "0%";
    bullet [current -2].classList.remove("active");
    progresstext[current -2].classList.remove("active");
    progresscheck[current - 2].classList.remove("active")
    current -= 1;
});

prevBtnThird.addEventListener("click", function(){
    slidepage.style.marginLeft = "-25%";
    bullet [current -2].classList.remove("active");
    progresstext[current -2].classList.remove("active");
    progresscheck[current - 2].classList.remove("active")
    current -= 1;
});

prevBtnFourth.addEventListener("click", function(){
    slidepage.style.marginLeft = "-50%";
    bullet [current -2].classList.remove("active");
    progresstext[current -2].classList.remove("active");
    progresscheck[current - 2].classList.remove("active")
    current -= 1;
});