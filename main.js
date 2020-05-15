// 1. Write a JavaScript program to list the properties of a JavaScript object.
function listKey(obj) {
    for (var i in obj) {
        console.log(i)
    }
}
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
listKey(student)