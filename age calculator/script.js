// Define function to get calculated Age
function getDOB() {
    // Getting input from html input element
    let dobValue = document.getElementById("inputDob").value;

    // Convert input data to usable format
    // as day, month, and year
    let dob = new Date(dobValue);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();

    // Getting current date and calculating the difference
    let nowValue = document.getElementById("cdate").value;
    let now = new Date(nowValue);

    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - day;

    // Adjust calculations
    if (dateDiff < 0) {
        dateDiff += 30;
        monthDiff -= 1;
    }

    if (monthDiff < 0) {
        monthDiff += 12;
        yearDiff -= 1;
    }

    // Show calculated age as output
    if (yearDiff < 0) {
        document.getElementById("currentAge").innerHTML = "Invalid Date";
    } else {
        document.getElementById("currentAge").innerHTML =
            "Your current Age is " + yearDiff + " years "
            + monthDiff + " months " + dateDiff + " days";
    }
}

// Function to set default current date value
function currentDate() {
    let today = formatted();
    let cdateElement = document.getElementById("cdate");
    cdateElement.value = today;
}

function formatted(date = new Date()) {
    return [
        date.getFullYear(),
        short(date.getMonth() + 1),
        short(date.getDate()),
    ].join("-");
}

function short(num) {
    return num.toString().padStart(2, "0");
}

// Calling current date function to set default date value
currentDate();
