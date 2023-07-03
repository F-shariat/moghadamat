//video16-مقدماتی

//Array
let array1 = [2 , 'Hi' , {firstname : 'zari'} , [2,5,9]]
console.log(array1);
console.log(array1[3]);

//video17-مقدماتی
//Arrays Methods

//change value
let array2 = ['a' , 'b' , '4' , 'd' , '1']
array2[2] = 'c';
array2[4] = 'e';
console.log(array2)

//array.isarray
let x = ('welcome')
let y = Array.isArray(x)
console.log(y)

//Length
let array3 = [1 , 2 , 3 , [8,'zahra','hi']]
let result3 = array3.length
console.log(result3)

//indexof
let array4 = [5,8,10,12]
let result4 ;
result4 = array4.indexOf(54) //خروجی -1 ینی وجود ندارد
//result4 = array4.indexOf(10) //return 2 ; شماره ایندکس 10 در آرایه
console.log(result4)

//push
let Name = ['sara' , 'amir' , 'arash' , 'amin']
Name.push('mahin')
console.log(Name)

//pop
let M = [4 , 8 , 'salam' , [4,'nice']]
M.pop()
console.log(M)

//unshift
let z = ['d','e','f']
z.unshift(['a','b','c'])
console.log(z)

//shift
let w = [0,2,4,6]
w.shift()
console.log(w)

//splice
let p = [0,1,3,2,4,9]
 p.splice(3,2,5,7)
console.log(p)