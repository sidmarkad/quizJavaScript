// Displaying results and getting name and points from session storage

let names = sessionStorage.getItem("name");
let points = sessionStorage.getItem("userPoints");

document.querySelector("#name").innerHTML = names;
document.querySelector("#points").innerHTML = points;

// Redirecting on home page
let backBtn = document.getElementById("btn1");
backBtn.addEventListener('click', () => {
    location.href = "index.html";
});