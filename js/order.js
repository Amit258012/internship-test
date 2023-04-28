const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".progress-step");

let orderStepsNum = 0;

function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < orderStepsNum + 1) {
            progressStep.classList.add("progress-step-active");
        } else {
            progressStep.classList.remove("progress-step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

setInterval(function () {
    orderStepsNum++;
    updateProgressbar();
}, 5000);
