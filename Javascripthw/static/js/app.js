// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var button = d3.select("#button");

function tableDisplay(ufoSightings) {
  ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};


var button = d3.select("#button");
function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

// filter the database and display
button.on("click", function(event) {
  d3.event.preventDefault();
  deleteTbody();
  var dateInput = d3.select("#datetime").property("value");
  
  if (dateInput.trim() === "" ) {
    // display the whole database if the date field has no date
    var filteredData = tableData;
  } else {
    // otherwise, display the filtered dataset  
    var filteredData = tableData.filter(ufoSighting => 
      ufoSighting.datetime === dateInput.trim());
  };

  // display message if no records found
  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };

  console.log(filteredData);
  tableDisplay(filteredData);
});


// button.on("click", function() {

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#form-control");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   var filteredData = tdata.filter(row => row.datetime === inputValue);

// tdata.forEach((filteredData) => {
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// });

// // YOUR CODE HERE!
