  //video22-مقدماتی
  //function Expression
  (function welcome(name){
    console.log('welcome to our site ' + name)
  }('sara'))

  /////////////////////////
  let person={
    firstname : 'ramin' ,
    lastname : 'rezayi' ,
    age : 32 ,
    great : function(){
        return 'welcome ramin'
    }
  }
  console.log(person)
  console.log(person.great)
  console.log(person.great())
  /////////////////////////////////
  let person2={
    firstname2 : 'sepide' ,
    lastname2 : 'rahmani' ,
    age2 : 26 ,
    great2 : function(){
        return `welcome ${this.age2}`
    }
  }
  console.log(person2)
  console.log(person2.great2())
  /////////////////////////////////////////
  //Date object
  const time = new Date()
  console.log(time)
  //////////////////////////////////////////
  //Date object Methods
  //get
  let output = time.getFullYear()
  output = time.getDay()
  console.log(output)

  //محاسبه سن با استفاده از get
  let person3 ={
    Name : "bahar" ,
    birth : 1950 ,
  }
  const now = new Date();
  const year = now.getFullYear()
  let age = year - (person3.birth)
  console.log(age)
  ///////////////////////////////////
  //set
  let output2 = now.setFullYear(2022)
  console.log(output2)
  /////////////////////////////////
  //tolocalestring
  const tnow  = new Date().toLocaleString();
  console.log(tnow)