// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")


table(tableData)



// Runs table creation 
function table(Tdata) {
    tbody.html("")
    Tdata.forEach(function (line) {
        var row = {}
        row = tbody.append('tr');
        Object.entries(line).map(function([x , y]) {
            row.append('td').text(y).style('border' , 'solid thin black')
        })
    }) 
}

// Runs Date filter
function runbuttonD () {
    
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");


    var newData = tableData.filter(function(frow){
            return frow.datetime == inputValue
    })

    console.log(newData)
    return table(newData)


};


// Activates Date filter
var buttonD = d3.select('#filter-btn-Date')

buttonD.on("click", runbuttonD);


// // Runs City Filter
// function runbuttonC () {
    
//     d3.event.preventDefault();

//     // Select the input element and get the raw HTML node
//     var inputElementC = d3.select("#city");

//     // Get the value property of the input element
//     var inputValueC = inputElementC.property("value");


//     var newData = tableData.filter(function(frow){
//             return frow.city == inputValueC
//     })

//     console.log(newData)
//     return table(newData)


// };


// var buttonC = d3.select('#filter-btn-City')

// buttonC.on("click", runbuttonC);


