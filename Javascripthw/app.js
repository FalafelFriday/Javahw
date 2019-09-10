// from data.js
var tdata = data;

var tbody = d3.select("tbody");

var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tdata.filter(row => row.datetime === inputValue);

tdata.forEach((filteredData) => {
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

});

// YOUR CODE HERE!
