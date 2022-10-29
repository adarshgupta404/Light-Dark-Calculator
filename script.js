const userInput = document.getElementById("userInput");
var expression = "";
function press(num) {
    let text = num.toString();
    var activeButton = $("." + text);
    activeButton.addClass("pressed");
    setTimeout(function () {
        activeButton.removeClass("pressed");
    }, 100);
    switch (text) {
        case "mult":
            text = "*";
            break;
        case "div":
            text = "/";
            break;
        case "mod":
            text = "%";
            break;
        case "plus":
            text = "+";
            break;
        case "minus":
            text = "-";
            break;
        case "dec":
            text = ".";
            break;
        default:
            break;
    }
    let userInput = document.getElementById("userInput");
    expression += text;
    userInput.value = expression;
}

function erase(num) {
    var c = $("." + num);
    c.addClass("pressed");
    setTimeout(() => {
        c.removeClass("pressed");
    }, 100);
    expression = '';
    userInput.value = expression;
}

function del(num) {
    var d = $("#" + num);
    d.addClass("pressed");
    setTimeout(() => {
        d.removeClass("pressed");
    }, 100);
    expression = expression.slice(0, -1);
    userInput.value = expression;
}

function equal() {
    var e = $(".equal");
    e.addClass("pressed");
    setTimeout(() => {
        e.removeClass("pressed");
    }, 100);
    userInput.value = eval(expression);
    expression = ''
}

function darkmode() {
    $(".calculator").addClass("darkmode");
    $("button").addClass("darkbutton");
}
function lightmode() {
    $(".calculator").removeClass("darkmode");
    $("button").removeClass("darkbutton");
}