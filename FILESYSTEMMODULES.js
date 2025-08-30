// File System Module kya hai nodejs me
// File System Module (fs) Node.js ka ek built-in module hai jo file system ke sath interact karne ke liye use hota hai. Is module ke through hum files aur directories create, read, update, delete, aur manage kar sakte hain. File System Module asynchronous aur synchronous dono tarike se operations perform karne ki suvidha deta hai.   
// File System Module ke kuch common methods hain:
// fs.readFile() - File ko read karne ke liye
// fs.writeFile() - File me data write karne ke liye
// fs.appendFile() - File me data append karne ke liye
// fs.unlink() - File ko delete karne ke liye
// fs.rename() - File ka naam change karne ke liye
// fs.mkdir() - Directory create karne ke liye
// fs.rmdir() - Directory delete karne ke liye
// fs.readdir() - Directory ke contents ko read karne ke liye
// Example of using File System Module in Node.js
const fs = require('fs');

// Asynchronous file read
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});


// is code ko line by line samjhao
// 1. const fs = require('fs'); 
// Is line me hum 'fs' module ko import kar rahe hain jo Node.js ka built-in File System Module hai. 'require' function ka use karke hum kisi bhi module ko apne code me include kar sakte hain.
// 2. fs.readFile('example.txt', 'utf8', (err, data) => { ... });
// Is line me hum fs.readFile() method ka use karke 'example.txt' file ko read kar rahe hain. Ye method asynchronous tarike se file read karta hai, matlab ye non-blocking hota hai aur program ke execution ko rokta nahi hai. Is method me teen arguments hote hain:
// Pehla argument: 'example.txt' - Ye file ka naam hai jise hum read karna chahte hain.
// Doosra argument: 'utf8' - Ye encoding type hai jisme file ko read kiya jayega. Yahan 'utf8' use kiya gaya hai jo ek common text encoding format hai.
// Teesra argument: (err, data) => { ... } - Ye ek callback function hai jo file read hone ke baad call hota hai. Is function me do parameters hote hain:
// err: Agar file read karne me koi error hoti hai to wo is parameter me aata hai. Agar koi error nahi hoti to ye null hota hai.
// data: Agar file successfully read ho jati hai to uska content is parameter me aata hai. Ye content string format me hota hai agar humne 'utf8' encoding specify ki hai.
// 3. if (err) { console.error('Error reading file:', err); return; }
// Is block me hum check kar rahe hain ki kya err parameter me koi error hai. Agar hai to hum console.error() ka use karke error message print kar rahe hain aur return statement ke through function se bahar aa rahe hain. Isse program ka execution yahan ruk jata hai agar file read karne me error hoti hai.
// 4. console.log('File content:', data);
// Agar file successfully read ho jati hai to hum is line me console.log() ka use karke file ka content print kar rahe hain. 'data' parameter me file ka content hota hai jo humne read kiya tha. Ye content string format me hota hai kyunki humne 'utf8' encoding specify ki thi.
// Is tarah se ye code 'example.txt' file ko asynchronous tarike se read karta hai aur uska content console par print
// karta hai. Agar file read karne me koi error hoti hai to wo error message bhi console par print hota hai.
// syntax of fs.readFile
// fs.read
// File System Module ke fs.readFile() method ka syntax kuch is tarah hota hai:
// fs.read
// fs.readFile(path, options, callback)
// Yahan:
//mujhe code samjhado or syntax  bhi batao
// Is code me humne 'fs' module ko require kiya hai jo File System Module ko import karta hai. Phir humne fs.readFile() method ka use karke 'example.txt' file ko asynchronous tarike se read kiya hai. Is method me pehla argument file ka naam hai, doosra argument encoding type hai (yahan 'utf8' use kiya gaya hai), aur teesra argument ek callback function hai jo file read hone ke baad call hota hai. Agar file read karne me koi error hoti hai to wo err parameter me aata hai, aur agar file successfully read ho jati hai to uska content data parameter me aata hai. Humne console.log() ka use karke file ka content print kiya hai.    
// Is tarah se hum File System Module ke methods ka use karke files aur directories ke sath kaam kar sakte hain. Ye module Node.js applications me file handling ke liye bahut useful hota hai.

        

//// fs.writeFile() - File me data write karne ke liye
fs.writeFile('example.txt', 'Hello, World!', 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Data written to file successfully.');
});

// is code ko line by line samjhao  
// 1. fs.writeFile('example.txt', 'Hello, World!', 'utf8', (err) => { ... });
// Is line me hum fs.writeFile() method ka use karke 'example.txt' file me data write kar rahe hain. Ye method asynchronous tarike se file me data write karta hai, matlab ye non-blocking hota hai aur program ke execution ko rokta nahi hai. Is method me chaar arguments hote hain:
// Pehla argument: 'example.txt' - Ye file ka naam hai jisme hum data write karna chahte hain. Agar file exist nahi karti to ye nayi file create kar dega.
// Doosra argument: 'Hello, World!' - Ye wo data hai jo hum file me write karna chahte hain. Yahan humne ek simple string 'Hello, World!' specify kiya hai.
// Teesra argument: 'utf8' - Ye encoding type hai jisme data ko write kiya jayega. Yahan 'utf8' use kiya gaya hai jo ek common text encoding format hai.
// Chautha argument: (err) => { ... } - Ye ek callback function hai jo file me data write hone ke baad call hota hai. Is function me ek parameter hota hai:
// err: Agar file me data write karne me koi error hoti hai to wo is parameter me aata hai. Agar koi error nahi hoti to ye null hota hai.
// 2. if (err) { console.error('Error writing to file:', err); return; }
// Is block me hum check kar rahe hain ki kya err parameter me koi error hai. Agar hai to hum console.error() ka use karke error message print kar rahe hain aur return statement ke through function se bahar aa rahe hain. Isse program ka execution yahan ruk jata hai agar file me data write karne me error hoti hai.
// 3. console.log('Data written to file successfully.');
// Agar file me data successfully write ho jata hai to hum is line me console.log() ka use karke success message print kar rahe hain. Ye message indicate karta hai ki data file me successfully likh diya gaya hai.
// Is tarah se ye code 'example.txt' file me asynchronous tarike se 'Hello, World!' string ko write karta hai. Agar file me data write karne me koi error hoti hai to wo error message bhi console par print hota hai, aur agar data successfully write ho jata hai to success message print hota hai.
// syntax of fs.writeFile
// fs.writeFile(path, data, options, callback)
// Yahan:


