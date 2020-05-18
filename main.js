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
// console.log('========================');
// var student = {
//   name: 'David Rayy',
//   sclass: 'VI',
//   rollno: 12,
// };
// function delKey(key) {
//   console.log(student);
//   delete student[key];
//   console.log(student);
// }
// delKey('sclass');

// 3. Write a JavaScript program to get the length of a JavaScript object.
// console.log('============');
// function getLength(arr) {
//   return arr.length;
// }
// console.log(getLength([1, 3, 2, 1, 3, 2]));
// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// console.log('================');
// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];

// function bookReadingStatus(lib) {
//     var showInfo = ''
//     for (var i of lib) {
//         if (i.readingStatus) {
//             var content = 'Already read ' + i.title + ' by ' + i.author + '.' + '<br>'
//         } else {
//             var content = 'You still need to read ' + i.title + ' by ' + i.author + '.' + '<br>'
//         }
//         showInfo += content;
//     }
//     document.getElementById('readingStatus').innerHTML = showInfo
// }
// bookReadingStatus(library);

// 6. Write a Bubble Sort algorithm in JavaScript.
// console.log('====================');
// Array.prototype.sortFunc = function () {
//   console.time('time: ');
//   for (let i = this.length - 1; i > 1; --i) {
//     for (let j = 0; j < i; ++j) {
//       if (this[i] > this[i + 1]) {
//         let x = this[i + 1];
//         this[i + 1] = this[i];
//         this[i] = x;
//       }
//     }
//   }
//   console.timeEnd('time: ');
//   return this;
// };

// console.log([6, 4, 0, 3, -2, 1].sortFunc());

// Way 2:
// Array.prototype.bubbleSort_algo = function () {
//   console.time('Time 2: ');
//   var is_sorted = false;
//   while (!is_sorted) {
//     is_sorted = true;
//     for (var n = 0; n < this.length - 1; n++) {
//       if (this[n] > this[n + 1]) {
//         var x = this[n + 1];
//         this[n + 1] = this[n];
//         this[n] = x;
//         is_sorted = false;
//       }
//     }
//   }
//   console.timeEnd('Time 2: ');
//   return this;
// };
// console.log([6, 4, 0, 3, -2, 1].bubbleSort_algo());

//7. Write a JavaScript program which returns a subset of a string.
// function subset(arr) {
//   var result = [];
//   for (let step = 1; step <= arr.length; step++) {
//     let m = 0;
//     let n = 0;
//     while (n < arr.length) {
//       n = m + step;
//       result.push(arr.slice(m, n));
//       m++;
//     }
//   }
//   console.log(result);
// }
// subset("1234")

// 8.
// var library = [
//   {
//     title: 'Bill Gates',
//     author: 'The Road Ahead',
//     libraryID: 1254,
//   },
//   {
//     title: 'Steve Jobs',
//     author: 'Walter Isaacson',
//     libraryID: 4264,
//   },
//   {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     libraryID: 3245,
//   },
// ];

// var sort_by = function (field_name, reverse, initial) {
//   var key = initial
//     ? function (x) {
//         return initial(x[field_name]);
//       }
//     : function (x) {
//         return x[field_name];
//       };

//   reverse = !reverse ? 1 : -1;

//   return function (x, y) {
//     return (x = key(x)), (y = key(y)), reverse * ((x > y) - (y > x));
//   };
// };

// var newobj = library.sort(sort_by('libraryID', false, parseInt));

// console.log(newobj);

// 12. get Url

// var a = document.createElement('a');
// a.href = url;
// return {
//     source: url,
//     protocol: a.protocol.replace(':', ''),
//     host: a.hostname,
//     port: a.port,
//     query: a.search,
//     params: (function () {
//         var ret = {},
//             seg = a.search.replace(/^\?/, '').split('&'),
//             len = seg.length,
//             i = 0,
//             s;
//         for (; i < len; i++) {
//             if (!seg[i]) {
//                 continue;
//             }
//             s = seg[i].split('=');
//             ret[s[0]] = s[1];
//         }
//         return ret;
//     })(),
//     file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
//     hash: a.hash.replace('#', ''),
//     path: a.pathname.replace(/^([^\/])/, '/$1'),
//     relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
//     segments: a.pathname.replace(/^\//, '').split('/')
// };

// console.log(parse_URL('https://translate.google.com/?hl=en&tab=TT'));

//
// function allKeys(obj) {
//   if (!isObject(obj)) return [];
//   var keys = [];
//   for (var key in obj) keys.push(key);
//   return keys;
// }
// function isObject(obj)
// {
//   var type = typeof obj;
//   return type === 'function' || type === 'object' && !!obj;
// }
// function Student(name) {
// this.name = name;
// }
// Student.prototype.rollno = true;
// console.log(allKeys(new Student("Sara", 23)));
// // 13.
// function allKeys(obj) {
//   if (typeof obj !== "object") return [];
//   var keys = [];
//   for (var key in obj) keys.push(key);
//   return keys;
// }

// function Student(name, age) {
//   this.name = name,
//   this.age = age
// }
// Student.prototype.relationship = true;
// console.log(allKeys(new Student("Sara", 23)));

// // 14. Write a JavaScript function to retrieve all the values of an object's properties.
// function retrieveValues(obj) {
//   if (typeof obj !== 'object') return []
//   var result = [];
//   for (var i in obj) {
//     result.push(obj[i]);
//   }
//   return result
// }
// console.log(retrieveValues({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}))

// // 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
// function convertKeyValue(obj) {
//   if (typeof obj !== 'object') {
//     return false
//   }
//   var result = {};
//   for (var i in obj) {
//     result[obj[i]] = i;
//   }
//   console.log(result)
// }
// convertKeyValue({name: 'Tien', age: '23'})

// 16. Convert an object into a list of pairs
// function convertList(obj) {
//   if (typeof obj !== 'object') {
//     return []
//   }
//   var result = [];
//   for (let i in obj) {
//     let subset = [];
//     subset.push(i);
//     subset.push(obj[i]);
//     result.push(subset)
//   }
//   console.log(result)
// }
// convertList({name: 'Tien', age: 23, relationship: false})

// JavaScript Functions [ 29 Exercises with Solution ]
// JavaScript Functions [ 29 Exercises with Solution ]
// JavaScript Functions [ 29 Exercises with Solution ]
// 1. Write a JavaScript function that reverse a number.
// console.log("==================")
// function reverseNumber(num) {
//   var newType = num.toString();
//   var splitStr = newType.split('');
//   splitStr.reverse();
//   var result = splitStr.join('');
//   result = Number(result)
//   console.log(result)
// }
// reverseNumber(8982327)

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// function returnByAlpabetical(str) {
//   var splitStr = str.split('');
//   var result = splitStr.sort().join('');
//   console.log(result)
//   return result;
// }
// returnByAlpabetical('TienNguyen')
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// function convertString(str) {
//   var splitStr = str.split(" ");
//   var result = "";
//   for (let i of splitStr) {
//     var firstLetter = i.charAt(0).toUpperCase();
//     var newWord = firstLetter + i.slice(1)
//     result += newWord + " ";
//   }
//   console.log(result)
// }
// convertString('nguyen van tien')

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// function findLongestWord(str) {
//   var splitStr = str.split(" ");
//   var longestWord = splitStr[0];
//   for (let i = 1; i < splitStr.length; i++) {
//     if (splitStr[i].length > longestWord.length) {
//       longestWord = splitStr[i]
//     }
//   }
//   console.log(longestWord)
// }
// findLongestWord('Nguyen Nghieng Van Tien')

// 9. Get the data type
// function demo() {
//     return true
// }
// console.log(demo instanceof Function);
// console.log(typeof demo)

// function detect_data_type(value)
// {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;

// if (typeof value === "object" || typeof value === "function")
//     {
//      for (x = 0, len = dtypes.length; x < len; x++)
//      {
//             if (value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//       }
//     }

//     return typeof value;
// }
// function demo() {
//     return false
// }
// var arr = [1,2,3,4]
// var obj = {name: 'tien', age: 23}
// console.log(detect_data_type(12));
// console.log(detect_data_type('w3resource'));
// console.log(detect_data_type(arr));

// 7. Check whether a number is even or not
// function evenOrNot(num) {
//     if (num < 0) {
//         num = Math.abs();
//     }
//     if (num === 0) {return true} else
//     if (num === 1) {return false} else {
//         num = num -2;
//         return evenOrNot(num)
//     }
// }
// console.log(evenOrNot(10001));

// function Char_Counts(str1) {
//   var uchars = {};
//   str1.replace(/\S/g, function (l) {
//     uchars[l] = isNaN(uchars[l]) ? 1 : uchars[l] + 1;
//   });
//   return uchars;
// }
// console.log(Char_Counts('The quick brown fox jumps over the lazy dog'));

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() { console.log(i); }, i * 1000 );
// }
// 16.  Extract unique characters from a string
function extractUniqueCharacters(str) {
    var newstr=  "";
    for (let i=0; i < str.length; i++) {
        if (newstr.includes(str.charAt(i)) === false) {
            newstr = newstr + str.charAt(i);
        }
    }
    console.log(newstr)
}
extractUniqueCharacters("Tiennguyen van")