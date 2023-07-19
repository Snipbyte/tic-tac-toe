let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
var valuee = "O";
const alertMessage = (message) => {
  var messsage = message;
  Swal.fire({
    title: "Congratulations",
    text: messsage + " WINS",
    icon: "success",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Restart",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Game Started");
      location.reload();
    }
  });
};
btn1.addEventListener("click", function () {
  btn1.innerText = valuee;
  btn1.disabled = true;
  if (btn1.innerText === "O") {
    btn1.style.color = "crimson";
  } else {
    btn1.style.color = "blue";
  }
  if (
    btn1.innerText == btn2.innerText &&
    btn1.innerText == btn3.innerText &&
    btn3.innerText != "" &&
    btn2.innerText != ""
  ) {
    alertMessage(btn1.innerText);
  }
  if (
    btn1.innerText == btn4.innerText &&
    btn1.innerText == btn7.innerText &&
    btn7.innerText != "" &&
    btn4.innerText != ""
  ) {
    alertMessage(btn1.innerText);
  }
  if (
    btn1.innerText == btn5.innerText &&
    btn1.innerText == btn9.innerText &&
    btn9.innerText != "" &&
    btn5.innerText != ""
  ) {
    alertMessage(btn1.innerText);
  }

  if (valuee == "X") {
    valuee = "O";
  } else {
    valuee = "X";
  }
});

btn2.addEventListener("click", function () {
  btn2.innerText = valuee;
  btn2.disabled = true;
  if (btn2.innerText === "O") {
    btn2.style.color = "crimson";
    
  } else {
    btn2.style.color = "blue";
  }
  if (
    btn2.innerText == btn3.innerText &&
    btn2.innerText == btn1.innerText &&
    btn3.innerText != "" &&
    btn1.innerText != ""
  ) {
    alertMessage(btn2.innerText);
  }
  if (
    btn2.innerText == btn5.innerText &&
    btn2.innerText == btn8.innerText &&
    btn8.innerText != "" &&
    btn5.innerText != ""
  ) {
    alertMessage(btn2.innerText);
  }
  if (valuee == "X") {
    valuee = "O";
  } else {
    valuee = "X";
  }
});

btn3.addEventListener("click", function () {
  btn3.innerText = valuee;
  btn3.disabled = true;
  if (btn3.innerText === "O") {
    btn3.style.color = "crimson";
  } else {
    btn3.style.color = "blue";
  }

  if (
    btn3.innerText == btn1.innerText &&
    btn3.innerText == btn2.innerText &&
    btn2.innerText != "" &&
    btn1.innerText != ""
  ) {
    alertMessage(btn3.innerText);
  }
  if (
    btn3.innerText == btn9.innerText &&
    btn3.innerText == btn6.innerText &&
    btn6.innerText != "" &&
    btn9.innerText != ""
  ) {
    alertMessage(btn3.innerText);
  }
  if (
    btn3.innerText == btn5.innerText &&
    btn3.innerText == btn7.innerText &&
    btn7.innerText != "" &&
    btn5.innerText != ""
  ) {
    alertMessage(btn3.innerText);
  }

  if (valuee == "X") {
    valuee = "O";
  } else {
    valuee = "X";
  }
});

btn4.addEventListener("click", function () {
  btn4.innerText = valuee;
  btn4.disabled = true;
  if (btn4.innerText === "O") {
    btn4.style.color = "crimson";
  } else {
    btn4.style.color = "blue";
  }
  if (
    btn4.innerText == btn5.innerText &&
    btn4.innerText == btn6.innerText &&
    btn6.innerText != "" &&
    btn5.innerText != ""
  ) {
    alertMessage(btn4.innerText);
  }
  if (
    btn4.innerText == btn1.innerText &&
    btn4.innerText == btn7.innerText &&
    btn7.innerText != "" &&
    btn1.innerText != ""
  ) {
    alertMessage(btn4.innerText);
  }

  if (valuee == "X") {
    valuee = "O";
  } else {
    valuee = "X";
  }
});

btn5.addEventListener("click", function () {
  btn5.innerText = valuee;
  btn5.disabled = true;
  if (btn5.innerText === "O") {
    btn5.style.color = "crimson";
  } else {
    btn5.style.color = "blue";
  }
  if (
    btn5.innerText == btn2.innerText &&
    btn5.innerText == btn8.innerText &&
    btn8.innerText != "" &&
    btn2.innerText != ""
  ) {
    alertMessage(btn5.innerText);
  }
  if (
    btn5.innerText == btn1.innerText &&
    btn5.innerText == btn9.innerText &&
    btn9.innerText != "" &&
    btn1.innerText != ""
  ) {
    alertMessage(btn5.innerText);
  }
  if (
    btn5.innerText == btn4.innerText &&
    btn5.innerText == btn6.innerText &&
    btn6.innerText != "" &&
    btn4.innerText != ""
  ) {
    alertMessage(btn5.innerText);
  }
  if (
    btn5.innerText == btn3.innerText &&
    btn5.innerText == btn7.innerText &&
    btn7.innerText != "" &&
    btn3.innerText != ""
  ) {
    alertMessage(btn5.innerText);
  }
  if (valuee == "X") {
    valuee = "O";
  } else {
    valuee = "X";
  }
});

btn6.addEventListener("click", function () {
  btn6.innerText = valuee;
  btn6.disabled = true;
  if (btn6.innerText === "O") {
    btn6.style.color = "crimson";
  } else {
    btn6.style.color = "blue";
  }
  if (
    btn6.innerText == btn4.innerText &&
    btn6.innerText == btn5.innerText &&
    btn5.innerText != "" &&
    btn4.innerText != ""
  ) {
    alertMessage(btn6.innerText);
  }
  if (
    btn6.innerText == btn3.innerText &&
    btn6.innerText == btn9.innerText &&
    btn3.innerText != "" &&
    btn9.innerText != ""
  ) {
    alertMessage(btn6.innerText);
  }
  if (valuee == "X") {
    valuee = "O";
  } else {
    valuee = "X";
  }
});

btn7.addEventListener("click", function () {
  btn7.innerText = valuee;
  btn7.disabled = true;
  if (btn7.innerText === "O") {
    btn7.style.color = "crimson";
  } else {
    btn7.style.color = "blue";
  }
  if (
    btn7.innerText == btn4.innerText &&
    btn7.innerText == btn1.innerText &&
    btn4.innerText != "" &&
    btn1.innerText != ""
  ) {
    alertMessage(btn7.innerText);
  }
  if (
    btn7.innerText == btn8.innerText &&
    btn7.innerText == btn9.innerText &&
    btn8.innerText != "" &&
    btn9.innerText != ""
  ) {
    alertMessage(btn7.innerText);
  }
  if (
    btn7.innerText == btn5.innerText &&
    btn7.innerText == btn3.innerText &&
    btn3.innerText != "" &&
    btn5.innerText != ""
  ) {
    alertMessage(btn7.innerText);
  }

  if (valuee == "X") {
    valuee = "O";
  } else {
    valuee = "X";
  }
});

btn8.addEventListener("click", function () {
  btn8.innerText = valuee;
  btn8.disabled = true;
  if (btn8.innerText === "O") {
    btn8.style.color = "crimson";
  } else {
    btn8.style.color = "blue";
  }
  if (
    btn8.innerText == btn5.innerText &&
    btn8.innerText == btn2.innerText &&
    btn2.innerText != "" &&
    btn5.innerText != ""
  ) {
    alertMessage(btn8.innerText);
  }
  if (
    btn8.innerText == btn7.innerText &&
    btn8.innerText == btn9.innerText &&
    btn9.innerText != "" &&
    btn7.innerText != ""
  ) {
    alertMessage(btn8.innerText);
  }

  if (valuee == "X") {
    valuee = "O";
  } else {
    valuee = "X";
  }
});

btn9.addEventListener("click", function () {
  btn9.innerText = valuee;
  btn9.disabled = true;
  if (btn9.innerText === "O") {
    btn9.style.color = "crimson";
  } else {
    btn9.style.color = "blue";
  }
  if (
    btn9.innerText == btn7.innerText &&
    btn9.innerText == btn8.innerText &&
    btn8.innerText != "" &&
    btn7.innerText != ""
  ) {
    alertMessage(btn9.innerText);
  }
  if (
    btn9.innerText == btn5.innerText &&
    btn9.innerText == btn1.innerText &&
    btn1.innerText != "" &&
    btn5.innerText != ""
  ) {
    alertMessage(btn9.innerText);
  }
  if (
    btn9.innerText == btn6.innerText &&
    btn9.innerText == btn3.innerText &&
    btn3.innerText != "" &&
    btn6.innerText != ""
  ) {
    alertMessage(btn9.innerText);
  }
  if (valuee == "X") {
    valuee = "O";
  } else {
    valuee = "X";
  }
});