$(document).ready(function() {
    $("#faqs h2").next().hide();
    $("#faqs h2").click(function() {
        $(this).toggleClass("fa fa-plus");
        $(this).toggleClass("fa fa-minus text-primary");
        if ($(this).attr("class") !== "fa fa-minus text-primary") {
            $(this).next().hide();
        } else {
            $(this).next().show();
        }
    })
})