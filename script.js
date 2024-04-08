function calculateCompatibility() {
    var yourName = document.getElementById("yourName").value.trim().toLowerCase();
    var partnerName = document.getElementById("partnerName").value.trim().toLowerCase();

    var compatibility = getCompatibility(yourName, partnerName);

    var resultText = "Compatibility: " + compatibility;

    document.getElementById("result").innerText = resultText;
}

function getNumerologyValue(name) {
    var numericValue = 0;
    for (var i = 0; i < name.length; i++) {
        var charCode = name.charCodeAt(i) - 96; // Assuming lowercase letters only
        numericValue += charCode;
    }
    return numericValue;
}

function reduceToSingleDigit(num) {
    while (num > 9) {
        num = Math.floor(num / 10) + (num % 10);
    }
    return num;
}

function getCompatibility(yourName, partnerName) {
    var yourNumerology = getNumerologyValue(yourName);
    var partnerNumerology = getNumerologyValue(partnerName);

    var yourSingleDigit = reduceToSingleDigit(yourNumerology);
    var partnerSingleDigit = reduceToSingleDigit(partnerNumerology);

    if (yourSingleDigit === partnerSingleDigit) {
        return "Highly Compatible";
    } else if ((yourSingleDigit + partnerSingleDigit) % 3 === 0) {
        return "Moderately Compatible";
    } else {
        return "Not Compatible";
    }
}
