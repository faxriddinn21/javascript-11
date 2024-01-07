// 3.10-mashq

// masala-1

// function getSum(n) {
//     let sum1 = 0;
//     let sum2 = 0;

//     for (let i = 1; i <= n; i++) {
//         sum1 += 2 * i - 1; // 1 * 3 * 5 + ...
//         sum2 += 2 * i;     // 2 * 4 * 6 + ...
//     }

//     return sum1 + sum2;
// }

// let n = 3;
// let result = getSum(n);
// console.log(`Input: let n = ${n};\nOutput: ${result}`);
  


// masala-2

// function getHighestNumberOfDigits(arr) {
//     let maxDigits = 0;
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         const num = Math.abs(arr[i]);
//         const numDigits = Math.floor(Math.log10(num)) + 1;

//         if (numDigits > maxDigits) {
//             maxDigits = numDigits;
//             result = arr[i];
//         }
//     }

//     return result;
// }

// let arr = [1589, 31851, 512, 180975, 78];
// let result = getHighestNumberOfDigits(arr);
// console.log(`Input: let arr = [${arr}];\nOutput: ${result}`);




// masala-3

// function getStringArr(arr) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "string") {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];
// let result = getStringArr(arr);
// console.log(`Input: let arr = [${arr}];\nOutput: [${result}]`);


// masala-4

// function getPunctuationNumber(str) {
//     const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (punctuationSigns.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// let str = "Hello! How are you? I'm doing great. What's new?";
// let result = getPunctuationNumber(str);
// console.log(`Input: let str = "${str}";\nOutput: ${result}`);




// masala-5

// function switchLetters(str) {
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];

//         if (char >= 'a' && char <= 'z') {
//             result += char.toUpperCase();
//         } else if (char >= 'A' && char <= 'Z') {
//             result += char.toLowerCase();
//         } else {
//             result += char;
//         }
//     }

//     return result;
// }

// let str = "Abdulaziz Programmer";
// let result = switchLetters(str);
// console.log(`Input: "${str}";\nOutput: "${result}"`);



// masala-6

// function changeObjToArr(obj) {
//     const result = [];

//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             result.push(key + obj[key]);
//         }
//     }

//     return result;
// }

// let obj = {a: 1, b: 2, c: 3};
// let result = changeObjToArr(obj);
// console.log(`Input: ${JSON.stringify(obj)};\nOutput: [${result}]`);




// masala-7

// function seperateStudents(students) {
//     const result = {
//         grant: [],
//         contract: []
//     };

//     for (let i = 0; i < students.length; i++) {
//         const student = students[i];

//         if (student.isGrant) {
//             result.grant.push(student.name);
//         } else {
//             result.contract.push(student.name);
//         }
//     }

//     return result;
// }

// let students = [
//     {name: "Jurabek", isGrant: false},
//     {name: "Elbek", isGrant: true},
//     {name: "Shamshod", isGrant: false},
//     {name: "Kamola", isGrant: false},
//     {name: "Gulnoza", isGrant: true},
//     {name: "Savlatbek", isGrant: false},
// ];
// let result = seperateStudents(students);
// console.log(`Input: ${JSON.stringify(students)};\nOutput: ${JSON.stringify(result)}`);



// // masala-8

// function getTotalPages(books) {
//     let totalPages = 0;

//     for (let i = 0; i < books.length; i++) {
//         if (books[i].isReadFinished) {
//             totalPages += books[i].pages;
//         }
//     }

//     return totalPages;
// }

// const books = [
//     { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//     { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//     { name: "Atom habits", pages: 328, isReadFinished: true },
//     { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//     { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//     { name: "The Hobbit", pages: 310, isReadFinished: false },
//     { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//     { name: "Harry Potter", pages: 320, isReadFinished: true },
//     { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//     { name: "To the Lighthouse", pages: 209, isReadFinished: true }
// ];
// let result = getTotalPages(books);
// console.log(`Input: ${JSON.stringify(books)};\nOutput: ${result}`);


// masala-9

// Object.prototype.keys = function() {
//     return Object.keys(this);
// };

// let obj = {a: 1, b: 2, c: 3};
// let result = obj.keys();
// console.log(`Input: let obj = ${JSON.stringify(obj)};\nOutput: [${result}]`);



// masala-10

// function Student(firstName, lastName, university, course, totalYears, isGrant) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.university = university;
//     this.course = course;
//     this.totalYears = totalYears;
//     this.isGrant = isGrant;
// }

// Student.prototype.getInfo = function() {
//     const grantStatus = this.isGrant ? "grant" : "contract";
//     return `${this.firstName} ${this.lastName} ${this.university} universitetida ${this.course}-kursda ${grantStatus} asosida o'qiydi. ${this.totalYears} yildan keyin universitetidan qutuladi.`;
// };

// // Test
// let student = new Student("Abdulaziz", "Programmer", "TATU", 3, 4, true);
// let result = student.getInfo();
// console.log(`Input: let student = new Student("${student.firstName}", "${student.lastName}", "${student.university}", ${student.course}, ${student.totalYears}, ${student.isGrant});\nOutput: "${result}"`);





// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




// 5.10-mashq

// masala-1

// function getOddDividersSum(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0 && i % 2 !== 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// let n = 30;
// let result = getOddDividersSum(n);
// console.log(`Input: let n = ${n};\nOutput: ${result}`);



// masala-2

// function search(arr, str) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].toLowerCase().includes(str.toLowerCase())) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// let arr = ["Abdulaziz", "Shahobiddin", "Shohrux", "Shukurjon", "Azamat", "Rahmatulla"];
// let str = "az";
// let result = search(arr, str);
// console.log(`Input: let arr = [${arr}];\nlet str = "${str}";\nOutput: [${result}]`);




// masala-3

// function getDividersSum(arr, n) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % n === 0) {
//             sum += arr[i];
//         }
//     }

//     return sum;
// }

// let arr = [2, 5, 7, 10, 0, 18, 15];
// let n = 5;
// let result = getDividersSum(arr, n);
// console.log(`Input: let arr = [${arr}];\nlet n = ${n};\nOutput: ${result}`);



// masala-4

// function checkSentence(str) {
//     const firstChar = str[0];
//     const lastChar = str[str.length - 1];

//     return str.length > 1 && firstChar === firstChar.toUpperCase() && lastChar === '.';
// }

// let str = "Abdulaziz programmer is full-stack developer.";
// let result = checkSentence(str);
// console.log(`Input: let str = "${str}";\nOutput: ${result}`);



// masala-5

// function getNumberOfCases(str) {
//     let upperCases = 0;
//     let lowerCases = 0;

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];

//         if (char >= 'A' && char <= 'Z') {
//             upperCases++;
//         } else if (char >= 'a' && char <= 'z') {
//             lowerCases++;
//         }
//     }

//     return {
//         upperCases: upperCases,
//         lowerCases: lowerCases
//     };
// }

// let str = "Abdulaziz Programmer";
// let result = getNumberOfCases(str);
// console.log(`Input: let str = "${str}";\nOutput: ${JSON.stringify(result)}`);



// masala-6

// function changeObjToString(obj) {
//     const result = [];

//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             result.push(key + obj[key]);
//         }
//     }

//     return result.join('');
// }

// let obj = {a: 1, b: 2, c: 3};
// let result = changeObjToString(obj);
// console.log(`Input: let obj = ${JSON.stringify(obj)};\nOutput: "${result}"`);



// masala-7

// function getProductsSum(...ids) {
//     const products = [
//         { id: 1, name: 'Bike', price: 100 },
//         { id: 2, name: 'TV', price: 400 },
//         { id: 3, name: 'Album', price: 800 },
//         { id: 4, name: 'Book', price: 600 },
//         { id: 5, name: 'Phone', price: 500 },
//         { id: 6, name: 'Computer', price: 1000 },
//         { id: 7, name: 'Skate', price: 300 },
//         { id: 8, name: 'Keyboard', price: 200 },
//         { id: 9, name: 'Bottle', price: 700 },
//     ];

//     let sum = 0;

//     for (let i = 0; i < products.length; i++) {
//         const product = products[i];
//         if (ids.includes(product.id)) {
//             sum += product.price;
//         }
//     }

//     return sum;
// }

// let result = getProductsSum(4, 6, 9);
// console.log(`Input: getProductsSum(4, 6, 9);\nOutput: ${result}`);




// masala-8

// function getTopProducts(products, n) {

//     const sortedProducts = products.sort((a, b) => b.price - a.price);

//     const topProductNames = sortedProducts.slice(0, n).map(product => product.name);

//     return topProductNames;
// }

// const products = [
//     { id: 1, name: 'Bike', price: 100 },
//     { id: 2, name: 'TV', price: 400 },
//     { id: 3, name: 'Album', price: 800 },
//     { id: 4, name: 'Book', price: 600 },
//     { id: 5, name: 'Phone', price: 500 },
//     { id: 6, name: 'Computer', price: 1000 },
//     { id: 7, name: 'Skate', price: 300 },
//     { id: 8, name: 'Keyboard', price: 200 },
//     { id: 9, name: 'Bottle', price: 700 },
// ];
// let n = 3;
// let result = getTopProducts(products, n);
// console.log(`Input: getTopProducts(products, ${n});\nOutput: [${result}]`);



// masala-9

String.prototype.count = function(char) {
    let count = 0;

    for (let i = 0; i < this.length; i++) {
        if (this[i] === char) {
            count++;
        }
    }

    return count;
};

let str = "Abdulaziz Programmer";
let char = "a";
let result = str.count(char);
console.log(`Input: let str = "${str}";\nlet char = "${char}";\nOutput: ${result}`);





// masala-10

function Product(name, company, price, discount = 0) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.discount = discount;
}

Product.prototype.getInfo = function() {
    let discountedPrice = this.price - (this.price * this.discount) / 100;

    if (this.discount > 0) {
        console.log(`${this.company} kompaniyasi tomonidan ishlab chiqarilgan ${this.name} ning asl narxi ${this.price}$. Aksiyadagi narxi esa ${discountedPrice}$.`);
    } else {
        console.log(`${this.company} kompaniyasi tomonidan ishlab chiqarilgan ${this.name} ning asl narxi ${this.price}$. Aksiya mavjud emas!`);
    }
};

let p1 = new Product("Iphone 15", "Apple", 1500, 20);
let p2 = new Product("S22", "Samsung", 1200);
p1.getInfo();
p2.getInfo();
