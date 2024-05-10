
let output = document.getElementById("outputDisplay");
let resetOutput = true;
let finalResult = null;
let mathOperators = "*+/-";

function inputValue(value) {
  if (resetOutput) {
    if (value === ".") {
      output.value = "0" + value; // Reset to zero with decimal
    } else {
      output.value = ""; // Reset to empty string
    }
    resetOutput = false;
  }

  if (output.value === "0" && value !== ".") {
    output.value = value;
  } else if (value === "." && !output.value.includes(".")) {
    output.value += value; // Append decimal if not already present
  } else if (value !== ".") {
    if (finalResult !== null && mathOperators.includes(value)) {
      output.value = finalResult + value;
    } else {
      output.value += value;
    }
  }
}

function solution() {
  try {
    output.value = eval(output.value);
    finalResult = output.value;
  } catch (error) {
    output.value = "Error";
  }
  resetOutput = true;
}
