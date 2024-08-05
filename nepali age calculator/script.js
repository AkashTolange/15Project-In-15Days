// Function to calculate age in BS
function calculateAgeBs() {
    // Getting input from html input element
    let dobBs = document.getElementById("inputDobBs").value;
    let cdateBs = document.getElementById("cdateBs").value;

    // Convert BS dates to AD
    let dobAd = NepaliFunctions.BS_TO_AD(dobBs);
    let nowAd = NepaliFunctions.BS_TO_AD(cdateBs);

    if (!dobAd || !nowAd) {
        document.getElementById("currentAge").innerHTML = "Invalid Date";
        return;
    }

    dobAd = new Date(dobAd);
    nowAd = new Date(nowAd);

    let yearDiff = nowAd.getFullYear() - dobAd.getFullYear();
    let monthDiff = nowAd.getMonth() - dobAd.getMonth();
    let dateDiff = nowAd.getDate() - dobAd.getDate();

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

// Function to set default current date value in BS
function setCurrentDateBs() {
    let todayAd = new Date();
    let todayBs = NepaliFunctions.AD_TO_BS({
        year: todayAd.getFullYear(),
        month: todayAd.getMonth() + 1,
        day: todayAd.getDate()
    });

    document.getElementById("cdateBs").value = `${todayBs.year}-${String(todayBs.month).padStart(2, '0')}-${String(todayBs.day).padStart(2, '0')}`;
}

// Calling current date function to set default date value
setCurrentDateBs();
