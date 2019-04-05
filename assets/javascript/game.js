$(document).ready(function () {

    $('.crystal-square').on('click', function () {
        entered_value = ($(this).attr("value"));
        //$("#print-out").text(entered_value);
        console.log(entered_value);
        $("#guess-number").text(entered_value);

    });

});