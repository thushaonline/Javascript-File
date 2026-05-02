let testScores = [72, 85, 90, 65, 88];

let curvedScores = testScores.map(function(score) {
    return score + 5;
});


console.log("Original Scores:", testScores);
console.log("Curved Scores:", curvedScores);