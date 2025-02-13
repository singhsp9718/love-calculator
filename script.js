function calculateLove() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();
    
    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    // Generate a random love percentage between 50% - 100%
    let lovePercentage = Math.floor(Math.random() * 51) + 50;

    let message = "";
    if (lovePercentage > 85) {
        message = "💞 A match made in heaven! ❤️";
    } else if (lovePercentage > 65) {
        message = "😍 You both have great chemistry!";
    } else {
        message = "💛 Love takes effort, keep going!";
    }

    document.getElementById("result").innerHTML = 
        `💕 Love Score: ${lovePercentage}% <br> ${message}`;
}
