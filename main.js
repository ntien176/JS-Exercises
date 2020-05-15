// 1. Write a JavaScript program to list the properties of a JavaScript object.
// function listKey(obj) {
//   for (var i in obj) {
//     console.log(i);
//   }
// }
// var student = {
//   name: 'David Rayy',
//   sclass: 'VI',
//   rollno: 12,
// };
// listKey(student);

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
console.log('========================')
var student =  { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12  };
function delKey(key) {
    console.log(student);
    delete student[key];
    console.log(student)
}
delKey('sclass');

// 3. Write a JavaScript program to get the length of a JavaScript object.
console.log('============');
function getLength(arr) {
    return (arr.length)
}
console.log(getLength([1,3,2,1,3,2]))
// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
console.log('================');
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

function bookReadingStatus(lib) {
    var showInfo = ''
    for (var i of lib) {
        if (i.readingStatus) {
            var content = 'Already read ' + i.title + ' by ' + i.author + '.' + '<br>'
        } else {
            var content = 'You still need to read ' + i.title + ' by ' + i.author + '.' + '<br>'
        }
        showInfo += content;
    }
    document.getElementById('readingStatus').innerHTML = showInfo
}
bookReadingStatus(library)