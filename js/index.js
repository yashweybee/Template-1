
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


document.querySelector(".navbar-toggler").addEventListener('click', handleToggleClick);
function handleToggleClick() {
    console.log("click");
    document.querySelector(".navbar").classList.toggle("show");
}

document.getElementById("dropDown-text").addEventListener("click", handleDropDown)

function handleDropDown() {
    document.querySelector(".dropdown-menu").classList.toggle("hide-block");
}

document.querySelector(".modal-body button").addEventListener("click", handleExitBtn)
function handleExitBtn() {
    document.querySelector(".modal").classList.add("hide-block");
}

const shareBtns = document.querySelectorAll(".share-btn")
shareBtns.forEach(btn => {
    btn.addEventListener("click", handleShareBtn)
})

function handleShareBtn() {
    document.querySelector(".modal").classList.remove("hide-block");
}


// animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);