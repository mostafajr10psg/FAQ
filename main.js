let plusIcon = document.querySelectorAll(".plus");
let minusIcon = document.querySelectorAll(".minus");
let allAnswers = document.querySelectorAll(".answer");
let allQuestions = document.querySelectorAll(".question");
let allQuestionsDetails = document.querySelectorAll(".ques-details");

allQuestionsDetails.forEach((ele) => {
  ele.className = "hide-answer";
});

for (let i = 0; i < plusIcon.length; i++) {
  allQuestionsDetails[i].addEventListener("click", (e) => {
    if (allQuestionsDetails[i].className === "hide-answer") {
      plusIcon[i].style.display = "none";
      minusIcon[i].style.display = "block";
      allQuestions[i].style.color = "rgb(173 40 235)";
      allAnswers[i].style.cssText = `
      height: ${allAnswers[i].scrollHeight}px;
       opacity: 1;
      `;
      allQuestionsDetails[i].className = "show-answer";
    } else {
      plusIcon[i].style.display = "block";
      minusIcon[i].style.display = "none";
      allQuestions[i].style.removeProperty("color");
      allAnswers[i].style.cssText = `
    height: 0;
    opacity: 0;
    `;
      allQuestionsDetails[i].className = "hide-answer";
    }
  });
}

let mediaQuery = matchMedia("(max-width: 767px)");

if (mediaQuery.matches) {
  for (let i = 0; i < plusIcon.length; i++) {
    allQuestionsDetails[i].addEventListener("touchstart", (e) => {
      if (allQuestionsDetails[i].className === "hide-answer") {
        plusIcon[i].style.display = "none";
        minusIcon[i].style.display = "block";
        allQuestions[i].style.color = "rgb(173 40 235)";
        allAnswers[i].style.cssText = `
      height: ${allAnswers[i].scrollHeight}px;
       opacity: 1;
      `;
        allQuestionsDetails[i].className = "show-answer";
      } else {
        plusIcon[i].style.display = "block";
        minusIcon[i].style.display = "none";
        allQuestions[i].style.removeProperty("color");
        allAnswers[i].style.cssText = `
    height: 0;
    opacity: 0;
    `;
        allQuestionsDetails[i].className = "hide-answer";
      }
    });
  }
}
