const box = document.querySelector(".box");
const ratingBox = document.querySelectorAll(".rating-box");
const ratingBtns = document.querySelectorAll(".rating");
const btn = document.querySelector(".button");
const thanksBox = document.querySelector(".thanks-box");
const rated = document.querySelector(".rated");


ratingBtns.forEach((ratingBtn) => {
    ratingBtn.addEventListener("click", (e) => {
        console.log("clicked");
        removeActive();
        e.target.classList.add("active");
        selected = e.target.innerText;
        console.log(selected.innerText);

        rated.innerHTML = ratingBtn.innerHTML;
    });
});

function removeActive(){
    ratingBtns.forEach((ratingBtn) => {
        ratingBtn.classList.remove("active");
    });
}

    btn.addEventListener("click", () => {
        thanksBox.classList.remove("hidden");
        box.classList.add("hidden");
    });
