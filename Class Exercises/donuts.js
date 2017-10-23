var donutCost = 60; //60 cents
var taxRate = 0.08;

var cakedInput = $("#caked-donuts");
var glazedInput = $("#glazed-donuts");
var subTotalInput = $("#subtotal");
var taxInput = $("#tax");
var totalInput = $("#total");

var caked = 0;
var glazed = 0;
var subTotal = 0;
var tax = 0;
var total = 0;

cakedInput.on('input', function() {
  caked = cakedInput.val();
  calculateSubtotal(caked, glazed);
});

glazedInput.on('input', function() {
  glazed = glazedInput.val();
  calculateSubtotal(caked, glazed);
});

function calculateSubtotal(numCaked, numGlazed) {
  var glazedCost = numGlazed * donutCost;
  var cakedCost = numCaked * donutCost;
  subTotal = glazedCost + cakedCost;
  subTotal = subTotal / 100;
  subTotalInput.val("$" + subTotal.toFixed(2));
  calculateTax(subTotal);
};

function calculateTax(subTotal) {
  tax = subTotal * taxRate;
  tax = tax.toFixed(2);
  taxInput.val("$" + tax);
  calculateTotal(subTotal, tax);
};

function calculateTotal(subTotal, tax) {
  total = parseFloat(subTotal) + parseFloat(tax);
  totalInput.val("$" + total);
};