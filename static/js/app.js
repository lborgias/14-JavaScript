// from data.js
var tableData = data;



// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  


  // Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // clear table rows 
  tbody.selectAll('td').remove();

  
  // Select the input element and get the raw HTML node3
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");

  // Get the value property of the input element
  var inputDateValue = inputDate.property("value");
  var inputCityValue = inputCity.property("value").toLowerCase();
  var inputStateValue = inputState.property("value").toLowerCase();
  var inputCountryValue = inputCountry.property("value").toLowerCase();
  var inputShapeValue = inputShape.property("value").toLowerCase();
// Create var of filter items
  var filters = {
    datetime: inputDateValue,
    city: inputCityValue,
    state: inputStateValue,
    country: inputCountryValue,
    shape: inputShapeValue
};
  console.log(filters);
  console.log(inputDateValue==="1/11/2010");
  console.log(inputCityValue==="");
  console.log(inputStateValue==="");
  console.log(inputCountryValue==="");
  console.log(inputShapeValue==="");

// convert table to list 

  var filteredData = tableData.filter(sighting => (
  (sighting.city === inputCityValue||inputCityValue==="")
  &&(sighting.datetime == inputDateValue||inputDateValue==="")
  &&(sighting.state === inputStateValue||inputStateValue==="")
  &&(sighting.country === inputCountryValue||inputCountryValue==="")
  &&(sighting.shape === inputShapeValue||inputShapeValue===""))
  );
  


  console.log(filteredData);

  // var tbodyfiltered = d3.select("tbody");

  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  

});