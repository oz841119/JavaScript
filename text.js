let myArray = [
     { test: 'Jhon' },
     { name: 'Sara' },
     { test01: 'Domnic' },
     { test02: 'Bravo' }
   ];

   console.log("Before");
   console.log(myArray);
   
   myArray = myArray.map(r => {
     if (r.hasOwnProperty("name")) {
       return {name: "Praveen"};
     }
     return r;
   });
   console.log("After");
   console.log(myArray);