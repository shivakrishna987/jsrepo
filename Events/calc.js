<script>
function sum(){
    let a = eval(document.getElementById('para1').value);
    let b = eval(document.getElementById('para2').value);
    let x = a + b;
    document.getElementById('para3').value = x;
}
function minus() {
    let a = eval(document.getElementById('para1').value);
    let b = eval(document.getElementById('para2').value);
    let x = a - b;
    document.getElementById('para3').value = x;
}
function mul() {
    let a = eval(document.getElementById('para1').value);
    let b = eval(document.getElementById('para2').value);
    let x = a * b;
    document.getElementById('para3').value = x;
}
function mod() {
    let a = eval(document.getElementById('para1').value);
    let b = eval(document.getElementById('para2').value);
    let x = a % b;
    document.getElementById('para3').value = x;
}
function div() {
    let a = eval(document.getElementById('para1').value);
    let b = eval(document.getElementById('para2').value);
    let x = a / b;
    document.getElementById('para3').value = x;
};
function erase(){
    document.getElementById('para1').value = 0;
    document.getElementById("para2").value = 0;
    document.getElementById('para3').value = 0;
}
</script>