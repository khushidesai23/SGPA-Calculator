
function addRow() {
    var table = document.getElementById("calcTable");
    var row = table.insertRow(table.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = '<input type="text" class="sub">';
    cell2.innerHTML = '<input type="number" class="credit">';
    cell3.innerHTML = '<input type="number" class="input" oninput="calculate(this)">';
    cell4.innerHTML = '<input type="number" class="input" oninput="calculate(this)">';
    cell5.innerHTML = '<input type="number" class="input" oninput="calculate(this)">';
    cell6.innerHTML = '<span class="result">0</span>';
    cell7.innerHTML = '<span class="grade">F</span>';
    cell8.innerHTML = '<span class="gradePoint">0</span>';
}

function calculate(inputElement) {

    var row = inputElement.parentNode.parentNode;
    var inputs = row.getElementsByClassName("input");
    var resultElement = row.getElementsByClassName("result")[0];
    var gradeElement = row.getElementsByClassName("grade")[0];
    var gradePointElement = row.getElementsByClassName("gradePoint")[0];

    var IA = parseFloat(inputs[0].value) || 0;
    var MID = parseFloat(inputs[1].value) || 0;
    var END = parseFloat(inputs[2].value) || 0;
    var FinalMid = MID / 2;
    var FinalEnd = END / 2;
    var result = IA + FinalMid + FinalEnd;
    var grade;
    var gradePoint;

    if (result >= 80) {
        grade = "O";
        gradePoint = 10;
    }
    else if (result >= 70) {
        grade = "A+";
        gradePoint = 9;
    }
    else if (result >= 60) {
        grade = "A";
        gradePoint = 8;
    }
    else if (result >= 55) {
        grade = "B+";
        gradePoint = 7;
    }
    else if (result >= 50) {
        grade = "B";
        gradePoint = 6;
    }
    else if (result >= 45) {
        grade = "C";
        gradePoint = 5;
    }
    else if (result >= 40) {
        grade = "P";
        gradePoint = 4;
    }
    else {
        grade = "F";
        gradePoint = 0;
    }

    resultElement.textContent = result;
    gradeElement.textContent = grade;
    gradePointElement.textContent = gradePoint;
}

function calculateSGPA() {
    var table = document.getElementById("calcTable");
    var rows = table.rows;
    var totalCredits = 0;
    var totalWeightedGradePoints = 0;
    var SGPA;

    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var credit = parseFloat(row.getElementsByClassName("credit")[0].value) || 0;
        var gradePoint = parseFloat(row.getElementsByClassName("gradePoint")[0].textContent) || 0;
        var SGPAElement = document.getElementsByClassName("SGPA")[0];

        totalCredits += credit;
        totalWeightedGradePoints += credit * gradePoint;
    }

    if (totalCredits > 0) {
        SGPA = totalWeightedGradePoints / totalCredits;

        // Optionally, round the SGPA to 2 decimal places
        SGPA = Math.round(SGPA * 100) / 100;

        // alert("Your SGPA is: " + SGPA);

    } else {
        alert("Please add subjects with valid credits before calculating SGPA.");
    }

    SGPAElement.textContent = SGPA;

}
