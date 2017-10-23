var donutCost = 60; //60 cents
var taxRate = 0.08;

var cakedInput = document.getElementById("caked-donuts");
var glazedInput = document.getElementById("glazed-donuts");
var subTotalInput = document.getElementById("subtotal");
var taxInput = document.getElementById("tax");
var totalInput = document.getElementById("total");

var caked = 0;
var glazed = 0;
var subTotal = 0;
var tax = 0;
var total = 0;

cakedInput.addEventListener("input", function(event) {
  caked = cakedInput.value;
  calculateSubtotal(caked, glazed);
});

glazedInput.addEventListener("input", function(event) {
  glazed = glazedInput.value;
  calculateSubtotal(caked, glazed);
});

function calculateSubtotal(numCaked, numGlazed) {
  var glazedCost = numGlazed * donutCost;
  var cakedCost = numCaked * donutCost;
  subTotal = glazedCost + cakedCost;
  subTotal = subTotal / 100;
  subTotalInput.value = "$" + subTotal.toFixed(2);
  calculateTax(subTotal);
};

function calculateTax(subTotal) {
  tax = subTotal * taxRate;
  tax = tax.toFixed(2);
  taxInput.value = "$" + tax;
  calculateTotal(subTotal, tax);
};

function calculateTotal(subTotal, tax) {
  total = parseFloat(subTotal) + parseFloat(tax);
  totalInput.value = "$" + total;
};