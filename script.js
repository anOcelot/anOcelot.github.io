$(document).ready(function () {
    $("button").click(function () {
        var input = document.getElementById("input").value;
        var baseFrom = document.getElementById("baseFrom");
        baseFrom = baseFrom.options[baseFrom.selectedIndex].text;
        var temp = parseInt(input, baseFrom);

        var baseTo = document.getElementById("baseTo");
        baseTo = baseTo.options[baseTo.selectedIndex].text;
        temp = temp.toString(baseTo);
        document.getElementById("output").value = temp;
        alert(temp);
    });
});