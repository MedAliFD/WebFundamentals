var like1 = document.getElementById("test1");
var like2 = document.getElementById("test2");
var like3 = document.getElementById("test3");
console.log(like1.innerText);
console.log(like2.innerText);
console.log(like3.innerText);
function liking1(element){
    like1.innerText++
}
function liking2(element) {
    like2.innerText++
}
function liking3(element) {
    like3.innerText++
}

