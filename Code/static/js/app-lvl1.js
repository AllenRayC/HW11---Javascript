// Assign the data from data.js
// Dates go from 1/1/2010 to 1/13/2010
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Display all data initially
tableData.forEach(function(sighting) {
	var row = tbody.append("tr");
	Object.entries(sighting).forEach(function([key, value]) {
		// Append a cell to the row for each value in the sighting object
		var cell = row.append("td");
		cell.text(value);
	});
});

// Select the Filter Table button
var button = d3.select("#filter-btn");

button.on("click", function() {
	// Prevent the page from refreshing
  	d3.event.preventDefault();

  	// Remove previous data
  	d3.selectAll("td").remove();

  	// Select the input element
  	var inputElement = d3.select("#datetime");

  	// Get the value property of the input element
  	var inputValue = inputElement.property("value");

  	// Filter data by datetime input
  	var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  	// Display filtered data
	filteredData.forEach(function(sighting) {
		var row = tbody.append("tr");
		Object.entries(sighting).forEach(function([key, value]) {
			// Append a cell to the row for each value in the sighting object
			var cell = row.append("td");
			cell.text(value);
		});
	});
});


