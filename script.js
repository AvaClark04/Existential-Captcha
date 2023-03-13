// var text2 = "this is the second question";

// //This is the submit button and its interactions
// var submit = document.querySelector(".submit");
// var message = document.querySelector(".message");
// var question = document.querySelector(".question");
// submit.addEventListener("mousedown", function (event) {
//   message.classList.add("active");
//   setTimeout(function () {
//     question.innerText = text2;
//     message.classList.remove("active");
//   }, 3000);
// });

// //This is the reload button and its interactions
// var reload = document.querySelector(".reload");

// function refresh() {
//   window.location.reload();
// }

// var input = document.querySelector(".input-1");
// var currentAnswer = "";
// input.addEventListener("keyup", function (event) {
//   currentAnswer = input.value;
//   console.log(currentAnswer);
// });

//////////////////
//////////////////
// SHORT FORM

// Select elements
var messageContainer = document.querySelector(".message");

// Detect Click
var submitButton = document.querySelector(".submit");
submitButton.addEventListener("mousedown", function (event) {
  // DO STUFF
  messageContainer.style.opacity = 1;
  messageContainer.style.pointerEvents = "all";
});

var reloadButton = document.querySelector(".reload");
var question      = document.querySelector(".question");
var text1 = "Is God real?";
var text2 = "What is the point of art?";
var text3 = "What is joy?";
var text4 = "What is the meaning of beauty?";
reloadButton.addEventListener("mousedown", function (event) {
  if(question.innerText == text1){
    question.innerText = text2;
  }
  if(question.innerText == text2){
    question.innerText = text3;
  }
  if(question.innerText == text3){
    question.innerText = text4;
  }
  messageContainer.style.opacity = 0;
  messageContainer.style.pointerEvents = "none";
});

function myFunction() {
    document.getElementById("myForm").reset();
}