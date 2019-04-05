$(document).ready(function () {
    /*var crystals = { diamond: 0, emerald: 0, yellow: 0, ruby: 0 }
    crystals.diamond = Math.floor(Math.random() * 12) + 1;
    crystals.emerald = Math.floor(Math.random() * 12) + 1;
    crystals.yellow = Math.floor(Math.random() * 12) + 1;
    crystals.ruby = Math.floor(Math.random() * 12) + 1;
*/

    crystals = {}
    var out_number;
    var noToGuess;
    var winCounter = 0;
    var loseCounter = 0;
    $(function startUp() {
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
    });
    function startOver() {
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
        $("#guess-number").text(0);
    }
    /*(function ($) {
        $.fn.myfunction = function () {
            console.log("Vartan");
            return this;
        };
    })(jQuery);
*/
    $('.crystal-square').on('click', function () {
        entered_value = ($(this).attr("value"));
        //$("#print-out").text(entered_value);
        //console.log(entered_value);
        //console.log(crystals.diamond);
        //console.log(crystals.emerald);
        //console.log(crystals.yellow);
        //console.log(crystals.ruby);
        //console.log(crystals[entered_value]);
        out_number += crystals[entered_value]
        $("#guess-number").text(out_number);
        if (out_number === noToGuess) {
            winCounter++;
            startOver();
        }
        else if (out_number > noToGuess) {
            loseCounter++;
            startOver();

        }
    });

});