/*js is a dynamic typed language
 # primitive datatypes

-string
-number
-boolean
-null
-undefined
-symbol
-BigInt(const BigNumber=12345736348488n )


#reference type(non-primitive)-can be directly allocated in memory

-array, objects, functions
array-example
let frutis=[apple,banana,orange,mango]

object-example
let myobj={
    name:"piyush",
    age:18,
}

function example
const myFunction=function(){
    console.loog("hello world");
}

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       
       */

//stack(primitive) here we get the copy of the value hence original value does not change, heap(non primitive)here we get reference of original value...original value does not change

//stack example

let myname="piyush"
let anothername=myname

anothername="ayush"
console.log(myname);
console.log(anothername);

//heap example

//using object
let userone={
       email: "user@gmail.com",
       class: 10
}

let usertwo=userone;
usertwo.email="piyush@gmail.com";
console.log(userone.email)
console.log(usertwo.email)
