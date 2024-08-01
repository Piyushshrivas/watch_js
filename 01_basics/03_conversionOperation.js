
//*************************** Conversion ************************/
// let score = 33;  // Number
// let score = "33abc";  // NaN
// let score = null; // 0
// let score = undefined;  // Nan 
// let score = true;  // true => 1, false => 0
// let score = "watch"; //NaN
// console.log(typeof score);
// console.log(typeof(score)); //another way

// let valInNumber = Number(score);
// console.log(typeof valInNumber);
// console.log(valInNumber);

// let isLogIn = 1;
// let isLogIn = "";
// let isLogIn = "watch";
// let booleanIsLogin = Boolean(isLogIn);
// console.log(booleanIsLogin);

// 1 => true , 0 => false
// "" => false , "watch" => true

// let someNumber = 32;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof(stringNumber));


//***************************Operation ***********************************/

let val = 2;
let negVal = -(val);
// console.log(negVal);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "watch";
let str2 = " js";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1"+2);  //12
// console.log(2+"2");  //22
// console.log("2"+2+2); //222
// console.log("2"+2+"2"); //222
// console.log(2+2+"2");  //42

// console.log(+true); //1
// console.log(+false); //0

let  num1, num2, num3;
// num1 = num2 = num3 = 2+2; // not a good way

let num = 100;
num++; //++num
console.log(num);