function calculateLove() {
    let name1 = document.getElementById("name1").value.trim().toLowerCase();
    let name2 = document.getElementById("name2").value.trim().toLowerCase();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    // Predefined name pairs and their fixed percentages
    let fixedResults = {
        "ranjan_meenu": 98,
        "junaid_reena": 97,
        "alex_sophia": 95,
        "mamtesh_nikita":0,
        "mithilesh_reena":100,
        // You can add more name pairs here
    };

    let key1 = `${name1}_${name2}`;
    let key2 = `${name2}_${name1}`; // To handle reverse input cases

    let lovePercentage;
    
    if (fixedResults[key1] !== undefined) {
        lovePercentage = fixedResults[key1];
    } else if (fixedResults[key2] !== undefined) {
        lovePercentage = fixedResults[key2];
    } else {
        // Generate a random love percentage between 50% - 100%
        lovePercentage = Math.floor(Math.random() * 51) + 50;
    }

    let message = "";
    if (lovePercentage > 85) {
        message = "💞 A match made in heaven! ❤️";
    } else if (lovePercentage > 85) {
        message = "😍 You both have great chemistry!";
    } else {
        message = "💛 Focus on you gole ,donn't waist your time!";
    }

    document.getElementById("result").innerHTML = 
        `💕 Love Score: ${lovePercentage}% <br> ${message}`;
}
