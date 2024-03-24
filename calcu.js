
// fungsi clear / menghapus nilai
function clearScreen() {
    document.getElementById("result").value="";

}

// fungsi display nilai
function display(value) {
    document.getElementById("result").value+= value;
}

function calculate() {
    var p =
    document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value=q;
}

function del() {
    var input =document.getElementById("result");
    input.value = input.value.substring(0, input.value.length - 1);
}

