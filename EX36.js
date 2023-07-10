//global scope
var x = 'x';
const y = 'y';
let z = 'z';
console.log('Global scope:' +x+y+z);

//////////
//function scope
function test(){
    var a = 'A1 ';
    const b = 'B2 ';
    let c = 'C3 ';
    console.log('function scope:' +a +b+c);
}
test()
////////////////
//block scope
if(true){
    var x = 'XX ';
    const y = 'YY ';
    let z ='ZZ ';
    console.log('Block scope:' +x+y+z)
}