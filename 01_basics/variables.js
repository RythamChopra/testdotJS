

const accountId = 1223345 ;
let accountEmail = 'rythamcwork@gmail.com' ;
var accountPassword = "12345" ; 
accountCity = "Jaipur" ;

let accountDetails ; //this variable value will be 'undefined'


accountEmail = 'vjsy@gmail.com' ;
accountPassword = "433" ; 
accountCity = "Kanpur" ; 

console.table([ accountId , accountEmail , accountPassword , accountCity]) ; 
/* 
Do not prefer using var variable.
*/
//Do not use var , due to block scope and functional scope issue.