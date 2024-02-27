const accountId = 123;
let accountEmail = "watch@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi"; //js also declared var_space in memory to store values if we don't use any var/let/const keyword before var_name
let accountState;

//accountId = 11  // not allowed const re-initialization
accountEmail = "wm@wmgmail.com";
accountPassword = "98765";
accountCity = "Ghaziabad";

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])  //return o/p in table form
