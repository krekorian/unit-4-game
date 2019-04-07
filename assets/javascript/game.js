$(document).ready(function () {

    crystals = {}
    var out_number;
    var noToGuess;
    var winCounter = 0;
    var loseCounter = 0;

    //set the initial values and the values after a win or a loss
    function startUp() {
        console.log("Vartan");
        $("#guess-number").text(0);
        out_number = 0;
        crystals = { diamond: 0, emerald: 0, yellow: 0, ruby: 0 }
        crystals.diamond = Math.floor(Math.random() * 12) + 1;
        crystals.emerald = Math.floor(Math.random() * 12) + 1;
        crystals.yellow = Math.floor(Math.random() * 12) + 1;
        crystals.ruby = Math.floor(Math.random() * 12) + 1;
        noToGuess = Math.floor(Math.random() * 101) + 19;
        $("#toGuessNumber").text(noToGuess);
        $("#win-count").text(winCounter);
        $("#loss-count").text(loseCounter);
    };


    $('.crystal-square').on('click', function () {
        entered_value = ($(this).attr("value"));

        out_number += crystals[entered_value]
        $("#guess-number").text(out_number);
        if (out_number === noToGuess) {
            winCounter++;
            $("#guess-number").text(0);
            startUp();
        }
        else if (out_number > noToGuess) {
            loseCounter++;
            $("#guess-number").text(0);
            startUp();

        }
    });
    startUp();
});