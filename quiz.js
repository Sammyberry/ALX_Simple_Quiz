// Step 1: Define the function
function checkAnswer() {
  // Step 2: Define the correct answer
  const correctAnswer = "4";

  // Step 3: Get the selected radio input by name
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Step 4: Check if an option was selected
  if (selectedOption) {
    // Step 5: Get the user's selected answer
    const userAnswer = selectedOption.value;

    // Step 6: Get the feedback element
    const feedback = document.getElementById("feedback");

    // Step 7: Compare user answer with correct answer
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
    }
  } else {
    // If no option is selected
    document.getElementById("feedback").textContent =
      "Please select an answer before submitting.";
  }
}

// Step 8: Add click event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
