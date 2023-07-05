//video21-مقدماتی
//function

function Developer(a){
    console.log (`${a} programmer`)
    //console.log (a + " programmer")
}
Developer('js')
//////////////////////////////////
function sum(x , y){
    return (x+y)
    //console.log(x+y)
}
console.log(sum(8,3))
//console.log(sum(4)) //return NaN

//روش قدیمی
function sum2(k,z){
    k = k || 0
    z = z || 0
    return k + z
}
console.log(sum2(5)) //return 5

//روش جدید
function sum3(m=0 , n=0){
    return m + n
}
console.log(sum3(5)) //return 5