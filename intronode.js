//Introduction to nodejs
// Node.js ek open-source, cross-platform runtime environment hai jo JavaScript ko server-side pe run karne ke liye use hota hai. Yeh V8 JavaScript engine pe based hai, jo Google Chrome browser me bhi use hota hai. Node.js asynchronous, event-driven architecture follow karta hai, jisse yeh high-performance aur scalable applications banane me madad karta hai.

// Node.js ka use karke hum web servers, APIs, real-time applications, command-line tools, aur bahut kuch bana sakte hain. Iska package manager, npm (Node Package Manager), developers ko third-party libraries aur modules easily install karne aur manage karne ki suvidha deta hai.


//Node.js Modules
// Node.js me modules code ke reusable blocks hote hain jo specific functionality provide karte hain. Har module apne scope me hota hai, jisse variable aur functions global scope me pollute nahi hote. Node.js me built-in modules jaise 'fs' (file system), 'http', 'path', 'os', etc. available hote hain, jinke through hum file operations, server creation, path manipulations, aur system information access kar sakte hain.

// Custom modules bhi create kiye ja sakte hain jise hum 'require' function ke through import kar sakte hain. Yeh modular approach code ko organize karne, maintain karne, aur reuse karne me madad karti hai, jo large applications ke development me bahut useful hoti hai.
// Node.js me module create karne ke liye hum ek JavaScript file banate hain jisme hum apni functionality likhte hain aur usse 'module.exports' ke through export karte hain. Phir dusre file me hum 'require' function ka use karke us module ko import kar sakte hain. Is tarah se hum apne code ko chhote-chhote modules me tod kar better organization aur maintainability achieve kar sakte hain.

// Example of creating and using a module in Node.js
// math.js (Custom Module)
// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// module.exports = { add, subtract };

// main.js (Using the Custom Module)
// const math = require('./math');
// console.log(math.add(5, 3)); // Output: 8
// console.log(math.subtract(5, 3)); // Output: 2

