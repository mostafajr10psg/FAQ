const plusIcon = document.querySelectorAll(".plus");
const minusIcon = document.querySelectorAll(".minus");
const allAnswers = document.querySelectorAll(".answer");
const allQuestionsDetails = document.querySelectorAll(".ques-details");
const allQuestions = document.querySelectorAll(".question");

function removeProperties(ele, ...props) {
  for (let i = 0; i < props.length; i++) {
    ele.style.removeProperty(props[i]);
  }
}

for (let i = 0; i < allQuestionsDetails.length; i++) {
  allQuestionsDetails[i].addEventListener("click", (e) => {
    if (!allQuestions[i].classList.contains("active")) {
      allQuestions[i].classList.add("active");
      plusIcon[i].classList.add("hidden");
      minusIcon[i].classList.remove("hidden");
      allAnswers[i].style.cssText = `height: ${allAnswers[i].scrollHeight}px; 
      opacity: 1;
      margin-top: 2rem;`;
    } else {
      allQuestions[i].classList.remove("active");
      plusIcon[i].classList.remove("hidden");
      minusIcon[i].classList.add("hidden");
      removeProperties(allAnswers[i], "height", "opacity", "margin");
    }
  });
}
