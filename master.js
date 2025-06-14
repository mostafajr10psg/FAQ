let plusIcon = document.querySelectorAll(".plus");
let minusIcon = document.querySelectorAll(".minus");
let allAnswers = document.querySelectorAll(".answer");
let allQuestions = document.querySelectorAll(".question");
let allQuestionsDetails = document.querySelectorAll(".ques-details");

function removeProperties(ele, ...props) {
  for (let i = 0; i < props.length; i++) {
    ele.style.removeProperty(props[i]);
  }
}

function addClass(ele, className) {
  ele.classList.add(className);
}

function removeClass(ele, className) {
  ele.classList.remove(className);
}

function showOrHideAnswers(event) {
  for (let i = 0; i < plusIcon.length; i++) {
    allQuestionsDetails[i].addEventListener(event, (e) => {
      if (allQuestionsDetails[i].classList.contains("hide-answer")) {
        plusIcon[i].style.display = "none";
        minusIcon[i].style.display = "block";
        allQuestions[i].style.color = "rgb(173 40 235)";
        allAnswers[i].style.cssText = `
    height: ${allAnswers[i].scrollHeight}px;
    opacity: 1;
    margin-top: 15px;
    `;

        removeClass(allQuestionsDetails[i], "hide-answer");
        addClass(allQuestionsDetails[i], "show-answer");
      } else {
        removeProperties(plusIcon[i], "display");
        removeProperties(minusIcon[i], "display");
        removeProperties(allQuestions[i], "color");
        removeProperties(allAnswers[i], "height", "opacity", "margin-top");

        removeClass(allQuestionsDetails[i], "show-answer");
        addClass(allQuestionsDetails[i], "hide-answer");
      }
    });
  }
}

if (matchMedia("(max-width: 767px)").matches) {
  showOrHideAnswers("touchstart");
} else {
  showOrHideAnswers("click");
}
