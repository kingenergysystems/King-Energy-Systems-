function calculate() {
  let bill = document.getElementById("bill").value;
  let savings = bill * 0.7;

  document.getElementById("result").innerText =
    "You could save approx KES " + savings + " monthly.";
}