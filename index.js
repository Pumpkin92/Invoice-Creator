let tasks = [];
let price = [];
const taskName = document.getElementById("task-name");
const invoiceFigure = document.getElementById("invoice-figure");
const invoiceTotal = document.getElementById("invoice-total-num");
const washBtn = document.getElementById("wash-btn");
const mowBtn = document.getElementById("mow-btn");
const weedsBtn = document.getElementById("weeds-btn");
const invoiceBtn = document.getElementById("invoice-btn");

washBtn.addEventListener("click", function () {
  tasks.push("Wash Car");
  price.push(10);
  render(tasks);
});

mowBtn.addEventListener("click", function () {
  tasks.push("Mow Grass");
  price.push(20);
  render(tasks);
});

weedsBtn.addEventListener("click", function () {
  tasks.push("Pull Weeds");
  price.push(30);
  render(tasks);
});

invoiceBtn.addEventListener("click", function () {
  taskName.innerHTML = "";
  invoiceFigure.innerHTML = "";
  invoiceTotal.innerHTML = "";
});

function render(tasks) {
  taskName.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    taskName.innerHTML += `<div class="tasks"> ${tasks[i]} </div>`;
  }
  renderPrice(price);
}

function renderPrice(price) {
  invoiceFigure.innerHTML = "";
  invoiceTotal.innerHTML = "";

  for (let i = 0; i < price.length; i++) {
    invoiceFigure.innerHTML += `<div class="tasks"> £${price[i]} </div>`;
  }
  let sum = price.reduce(function (a, b) {
    return a + b;
  }, 0);
  invoiceTotal.innerHTML = `£${sum}`;
}
