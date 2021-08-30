
//  Setting name in session storage and redirect to quiz.html
function loginForm(event) {
    event.preventDefault();

    let name = document.getElementById("text").value;
    sessionStorage.setItem('name', name);
    location.href = "quiz.html"
}
