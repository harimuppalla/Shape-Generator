// // class Test{
// //   constructor(name,age){
// //     this.username=name
// //     this.age = age
// //     console.log(this.username+this.age)
// //   }
// // }

// // var obj1 = new Test("Hey",23)
// // var obj1 = new Test("prograds")


// // let obj={
// //   name:"",
// //   color:"",
// //   age:""
// // }

// // function myfunc(name){
// //   this.names = name
// //   console.log(this.names)
// //   this.greet = function(){
// //     alert("HI"+this.names)
// //   }
// // }

// // let user1= new myfunc("john")
// // user1.greet()

// class car{
//   constructor(name,color,type,model){
//     this.name=name
//     this.color=color
//     this.type=type
//     this.model = model
//   }
//    getType(){
//     return this.type
//   }
// }

// // class Model extends car{
// //   constructor(brand){
// //     super(brand)
// //     this.brand = brand
// //   }
// // }
// let car1=new car("BMW","red","sedan","D20")
// let car2=new car("AUdi","black","abcd","A8")
// let mycar = new Model("ford")
// console.log(mycar)
// console.log(car1.getType())
// console.log(car2.getType())


// // class Blog{
// // constuctor(title,detail){}
// // addTitle(){
// //   return this.ram +'\n'+this.batteryPower+'\n'+this.price;
// // }
  
// // }


class Element{
  constructor(element){
    this.element= element
    this.element.style.background=Element.randomcolor()
  }
  
   static randomcolor(){
    let colors=["red","green","blue","black","pink"]
    
    return colors[Math.floor(Math.random()*colors.length)]
  }
}

class Circle extends Element{
  constructor(element){
    super(element);
    element.style.borderRadius="60%"
  }
}
let element = new Circle(document.getElementById("element"))
// let obj1 = new Element("hey")
