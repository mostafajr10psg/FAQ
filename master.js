let plusIcon = document.querySelectorAll(".plus");
let minusIcon = document.querySelectorAll(".minus");
let allAnswers = document.querySelectorAll(".answer");
let allQuestions = document.querySelectorAll(".question");
let allQuestionsDetails = document.querySelectorAll(".ques-details");

function showHideOrAnswers(event) {
  for (let i = 0; i < plusIcon.length; i++) {
    allQuestionsDetails[i].addEventListener(event, () => {
      if (allQuestionsDetails[i].classList.contains("hide-answer")) {
        plusIcon[i].style.display = "none";
        minusIcon[i].style.display = "block";
        allQuestions[i].style.color = "rgb(173 40 235)";
        allAnswers[i].style.cssText = `
    height: ${allAnswers[i].scrollHeight}px;
    opacity: 1;
    margin-top: 15px;
    `;
        allQuestionsDetails[i].classList.remove("hide-answer");
        allQuestionsDetails[i].classList.add("show-answer");
      } else {
        plusIcon[i].style.display = "block";
        minusIcon[i].style.display = "none";
        allQuestions[i].style.removeProperty("color");
        allAnswers[i].style.cssText = `
  height: 0;
  opacity: 0;
  margin-top: 0;
  `;
        allQuestionsDetails[i].classList.remove("show-answer");
        allQuestionsDetails[i].classList.add("hide-answer");
      }
    });
  }
}

if (matchMedia("(max-width: 767px)").matches) {
  showHideOrAnswers("touchstart");
} else {
  showHideOrAnswers("click");
}
