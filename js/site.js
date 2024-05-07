
//get the values from the Page
//starts or controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value; 

    //Need to validate input
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);

        //call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }

}

//generate numbers from the startValue to the endValue
//logic function(s)
function generateNumbers(sValue, eValue) {
    let numbers = [];

    //get all numbers from start to end
    
    for (let index = sValue; index <= eValue; index++) { 
        //execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;
}

//display the numbers and mark even numbers bold
//display or view functions
function displayNumbers(numbers) {
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let number = numbers[index];

        if (index % 5 == 0) {
            templateRows += `<tr>`;
        }

        if (number % 2 == 0) {
            className = "even"
        }
        else {
            className = "odd"
        }
        templateRows += `<td class="${className}">${number}</td>`;

        if ((index + 1) % 5 == 0) {
            templateRows += `</tr>`;
        }
    }

    document.getElementById("results").innerHTML = templateRows;

}