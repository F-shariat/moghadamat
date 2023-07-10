//conditinal commands

//if-else
let hour = 20;
if (hour<=24 && hour>=18){
    console.log('good night');
}
else{
    console.log('good day');
}

//else-if
let hour2 = 8;
if (hour2<=24 && hour2>=18){
    console.log('good night');
}
else if(hour2<=17 && hour2>=12){
    console.log('good afternoon');
}
else{
    console.log('good morning');
}

////////////////////////////////////
//switch-case
switch (corse){
    case 20:
        console.log('excelent')
        break;
    case 18:
        console.log("very good")
    case 16:
        console.log('great') 
        break;
    default:
        console.log('invalid average')
        break;
       
}
