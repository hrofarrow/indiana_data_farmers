// Read CSV
var bettingData = d3.csv("../csv/Betting_Data_2.csv")

bettingData.then(function (bettingData) {
    console.log(bettingData);


    // // Define title case function
    // function titleCase(str) {
    //     // convert string to lowercase
    //     str = str.toLowerCase();
    //     str = str.split(" ");
    //     for (var i = 0; i < str.length; i++)
    // }

    // Read in the data and create the table
    // Select the tbody and assign a variable
    var tbody = d3.select("tbody");
    // Append new row for each ufo object (creating new trs)
    Array.from(bettingData).forEach((mlbGame) => {
        // console.log(mlbGame)
        var row = tbody.append("tr");
        var game = Object.entries(mlbGame)
        // console.log(game)
        game.forEach(([key, value]) => {
            // Append cell for each value to the row 
            var cell = row.append("td");
            cell.text(value);
        });
    });


    // Event handler - attaching the function to the button
    // Select the drop-down in the html and assign a variable
    var teamChoice = d3.select(".team-menu");

    // Create event handlers for selecting a team
    teamChoice.on("change", runEnter);

    // Create the function to run for both events
    function runEnter() {
        // Prevent the page from refreshing
        d3.event.preventDefault();
        // Select the input element and get the raw HTML node
        var teamElement = d3.select("#datetime");
        // Get the value property of the input element
        var teamSelection = teamElement.property("value");
        // Make sure it grabs input correctly
        console.log(teamSelection);
        // console.log(tableData);
        // Filter by the input date
        var filteredbyTeam = bettingData.filter(game => game.team === teamSelection);
        // Check filter
        console.log(filteredbyTeam);

    };

}).catch(function (error) {
    console.log(error);
});

// Read in the filtered data to the table

// Select the tbody and assign a variable


// // Iterate through each table row
// tableData.forEach((sighting) => {

//     // Iterate through each key and value in the row
//     Object.entries(sighting).forEach(([key, value]) => {

//         // Use the key to determine which array to push the value to
//         if (key === "datetime") {
//             dishes.push(value);
//         }
//         else {
//             spices.push(value);
//         }
//     });
// });




// // Create a filter function for searching by date
// function selectDatetime(date) {
//     return date.datetime === inputValue;
// };

// // Use custom function as filter argument
// var filteredDate = tableData.filter(selectDatetime);

// // Test if it filtered correctly
// console.log(filteredDate);

