//...for
for(let a =0 ; a<10 ; a++){
    console.log(`number : ${a}`)
    if(a==2){
        for(let i=2 ; i<4 ; i+=0.5){
            console.log(i)
        }
    }
}
//////////////////////////////////////
//پیمایش آرایه ها با حلقه
let array = ['a','b','c','d','e'];
array.forEach(function(element,index){
    console.log(`${index}:${element}`)
});
//////////////////////////////////////
//for in
let person ={
    Name : 'ahmad' ,
    age : 24,
    tahsilat : "lisans" ,
    job : "developer"
}
for(const key in person){
    console.log(`${key} : ${person[key]}`)
}
////////////////////////////////////////
//for of
let array2 = ["arash" , 'zahra' ,'raha','omid']
for(const element of array2){
    console.log(element)
}
