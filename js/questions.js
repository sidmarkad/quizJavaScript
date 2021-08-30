
// Calling show function to display first question
window.onload = function () {
  show(0);
}

// Array of objects which contains question
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  }
];

let count = 0;
let userPoints = 0;

let user_s_name = sessionStorage.getItem("name");
document.getElementById("user_name").innerHTML = user_s_name;


// next() function to render next question
function next() {

  let userAnswer = document.querySelector("li.options.active").innerHTML;
  
  // Verifying user-answer with the correct answer
  if (userAnswer == questions[count].answer) {
    console.log("Correct answer")
    userPoints += 10;
    sessionStorage.setItem("userPoints", userPoints);
  }

  // Redirect to the Result page after End of questions
  if (count == questions.length - 1) {
    location.href = "result.html";
    return;
  }

  count++;
  show(count);
}

// To display question and answers
function show(count) {
  let questionDiv = document.getElementById('question');
  let questionOption = document.querySelector('.optionsDiv');

  questionDiv.innerHTML = questions[count].question;
  questionOption.innerHTML = `
                <ul class="optionGroup">
                    <li class="options">${questions[count].options[0]}</li>
                    <li class="options">${questions[count].options[1]}</li>
                    <li class="options">${questions[count].options[2]}</li>
                    <li class="options">${questions[count].options[3]}</li>
                </ul>
    `;
  toggleClass();
}

// To add active class to the li items 
function toggleClass() {
  let options = document.querySelectorAll("li.options");

  for (let index = 0; index < options.length; index++) {
    options[index].onclick = function () {
      for (let index = 0; index < options.length; index++) {
        if (options[index].classList.contains("active")) {
          options[index].classList.remove("active");
        }
      }
      options[index].classList.add("active");
    }
  }
}