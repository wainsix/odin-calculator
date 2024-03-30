let num1 = "";
let num2 = "";
let num3 = "";
let num4 = "";
let calcu = "";

function handleNumClick(num) {
  num1 += num;
  document.getElementById("screen").innerText = num1;
}

function handleEqualsClick() {
  num2 = document.getElementById("screen").innerText;
  document.getElementById("screen").innerText = "";
  console.log("num2 " + num2);
  console.log("num1 " + num1);
  console.log("num4 " + num4);
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  num4 = parseFloat(num4);
  console.log(calcu);
  if (!isNaN(num1) && !isNaN(num4)) {
    if (calcu == "+") {
      num3 = num1 + num4;
      console.log(num3);
    } else if (calcu == "-") {
      num3 = num1 - num4;
      console.log(num3);
    } else if (calcu == "*") {
      num3 = num1 * num4;
      console.log(num3);
    } else if (calcu == "/") {
      num3 = num1 / num4;
      console.log(num3);
    }
    document.getElementById("screen").innerHTML =
      num1 + calcu + num4 + " = " + num3;
  } else {
    console.log("Virheelliset numerot!");
  }
}

function handleCalcClick(calc) {
  calcu = "";
  num2 = document.getElementById("screen").innerText;
  document.getElementById("screen").innerText = "";
  console.log("painettu " + calc);
  console.log("num2 " + num2);
  console.log("num1 " + num1);
  console.log("num4 " + num4);
  if (calc == "add") {
    calcu = "+";
    num1 = "";
  } else if (calc == "sub") {
    calcu = "-";
    num1 = "";
  } else if (calc == "multi") {
    calcu = "*";
    num1 = "";
  } else if (calc == "div") {
    calcu = "/";
    num1 = "";
  }
  num4 = num2;
}
