//given json data iterate with for,for in,for of and forEach loops respectively.
var employee=[{"Name":"poornima",
         "age":"27",
         "email":"poorni@gmail.com",
         "salary":"7000$"},
         
         {"Name":"roja",
         "age":"25",
         "email":"roja@gmail.com",
         "salary":"2000$"},
         
         {"Name":"arun",
         "age":"22",
         "email":"arun@gmail.com",
         "salary":"4000$"}];


//for loop   
for(i=0;i<employee.length;i++){
   console.log(employee[i]);          
} ;
console.log(" for loop");
//for in loop

for( const x in employee){
    console.log(employee[x]);
} ;       
console.log(" for in loop");
//for of loop

for(let a of employee){
    console.log(a);
};
console.log("for of loop");
// //for Each loop


employee.forEach(function(employee){
   console.log(employee.Name)
    console.log(employee.age)
    console.log(employee.email)
  
});