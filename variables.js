/**
 *  0. VARIABLES  
 * 
 *  Variables hold on to information, acting like tentacles to grasp assigned data via initialization or 
 *  assignment. Through calling them, we can access the data they hold, making the data reusable within our programs. 
 *  They can be assigned to the value of any data type: whether simple like strings, booleans, and numbers or 
 *  complex like objects and arrays. If they are not assigned a value at declaration, their value defaults to undefined.
 *  Their names always align with a naming convention: camelCase, snake_case, PascalCase, and kebab-case and their names
 *  cannot be a reserved keyword (words reserved by JavsScript, such as let, var or const). Whatever convention is used,
 *  a name should reflect clearly it's held data (for example, nameArr could be an array of names). Once declared, all 
 *  variables exist within a scope: global scope when declared outside of a function, local scope (or function scope) when 
 *  declared inside a function, or block scope where variables are only accessible within the block of code they are declared 
 *  within (such as if statements or for loops). Variables can be manipulated so that they let go of their old value and 
 *  grasp on to a new one via reassignment. Because JavaScript is loosely-typed, we can reassign the variable to any data type.
 *  Reassignment should not be confused with redeclaration- an undesired side effect that occurs when declaring the same 
 *  variable twice with var. With the emergence of let and const, redeclaration is something less likely to be seen in newer 
 *  code, but may exist in legacy code.
 * 
 *  1. Declaration and assignment
 * 
 *  Declaration is naming a variable. Assignment is providing a value for a variable to hold. If both are performed in 
 *  one step, a variable is initialized. If a value is not provided, the variable will hold the value 
 *  undefined until assigned a value. After assignment, it is possible to reassign the variable to a new value, provided 
 *  it is not a initialized with const.
 * 
 * */

     // Declaration:

      // declaration of variable cat- it has no value assigned, so it defaults to the value undefined
      var brother;
    
     // Assignment:

      // assigning the value of the string Grant to brother reassigns the previous value of undefined to 'Grant'
      brother = 'Grant';

     // Initialization:

      // initialization of secondBrother with the value of 'Peter'
      var secondBrother = 'Peter';

/* * 
 *  2. var, let, and const
 * 
 *  There are three ways to declare a variable within Javascript- var, let, and const. Using "var" can cause issues as it can be redeclared.
 *  Using "let" will allow for reassaignment not allow for redeclaration. Meanwhile, "const" will not allow reassignment or redeclaration. 
 *  A const can never be left unassigned or undefined. While var is hoisted to the top of scope and is function scope, let and const are
 *  both block scoped. Since they are not hoisted, attempting to access them before they are initialized will cause an error, as they 
 *  cannot be accessed in this aptly named "temporal dead zone".
 * 
 * */

     // var: 

      // declaring and assigning a value with var
      var ghostRidersInTheSky = 'Yippie-yi-o'; 
      console.log(ghostRidersInTheSky); // => Yippie-yi-o

     // redeclaring the variable
      var ghostRidersInTheSky = 'Yippie-yi-yay';
      console.log(ghostRidersInTheSky); // => Yippie-yi-yay

     // function scope and var
     function scopingItOut() {
        // function/local scoped
        var seeMe = 'can you see me?';
        if (seeMe){
         // blocked scoped
         var seeMe = 'see me now?'; // redeclaring and reassigning overwrites value of the parent scope
        }
        console.log(seeMe);
     }
     // the redeclared variable will print to console
     scopingItOut(); // => see me now?

    // let:

     // declaring and assigning a value with let
      let see = 'who I am';
      console.log(see); // => who I am

     // attempting to redeclare with let will result in errors
      let see = `who I'm not`; // => SyntaxError: Identifier 'see' has already been declared
       
      see = `who I'm not`; // instead, reassign see to a new value
      console.log(see) // => who I'm not

     // block scope and let
     function noScoping() {
        // declared in local/function scope
        let threeSixtyNoScope = '36T';
        if (threeSixtyNoScope === '36T') {
          let threeSixtyNoScope = '360 NO SCOPE'; // in the block scope, this is a new variable with a new value
          // accessing within this scope gives us the value of our second variable
          console.log(threeSixtyNoScope); // => '360 NO SCOPE'
        }
        // and in the local/function scope, we access the value of our first variable
        console.log(threeSixtyNoScope); // => '36T'
      }
      noScoping() // => "360 NO SCOPE"
                    //  "36T"

    // const:

     // declaring and assigning a value with const
     const iAm = 'The Alpha and Omega, the beginning and end.';
     console.log(iAm); // => 'The Alpha and Omega, the beginning and end.'

    // attempting to redeclare will result in errors
     const iAm = 'A wild and crazy guy!'; // running code results in => SyntaxError: Identifier 'iAm' has already been declared
                
    // attempting to reassign will result in errors
     iAm = 'the law!'; // running code results in => Uncaught TypeError: Assignment to constant variable.

     // block scope and const
     function constantScoping() {
        // this variable is within function/local scope
        const seeMe = `I'm sure I pop up somewhere-`;
        if (seeMe){
          // and this one is blocked scope
          const seeMe = `I know I'll pop up somewhere too!`; // similar to let, a completely new variable and value are created
          // so within the block scope, the value is:
          console.log(seeMe); // => "I know I'll pop up somewhere too!"
        }
        // while in the function scope, the value is:
        console.log(seeMe); // => "I'm sure I pop up somewhere-"
      }
     constantScoping() // => "I know I'll pop up somewhere too!"
                          // "I'm sure I pop up somewhere-"
  
/* *
*  3. Hoisting
*  
*  Hoisting is a pre execution process. Functions are always hoisted to the top, next are any variable declarations using var. This process 
*  does not just happen on a global scope, but also inside of functions at a local scope (function scope) and inside of block scope (such as 
*  if statements or for loops). Hoisting impacts where we can access parts of our code and can lead to errors. Using let and const to declare 
*  a variable will prevent variables being used before declaration, sending an Reference error to the console. 
*
* */ 
    // Hoisting and Accessibility:
   
    // declaring a variable before a function allows it to be accessed
    var wash = 'the poison from off my skin.';
   
    function castleOfGlass() {
       // accessible values 
       console.log(takeMeDown); // => 'to the riverbend'
       console.log(takeMe); // => 'down to the fighting end'
       console.log(wash); // => 'the poison from off my skin.'

       // var will cause the value not yet declared to return undefined, though it will be recognized as existing due to being hoisted
       console.log(showMe); // => undefined

       // const will also prevent intitilization prior to declaration
       console.log(flyMe); // => Uncaught ReferenceError: Cannot access 'flyMe' before initialization
      
       // let prevents initialization before declaration
       console.log(iAm); // => Uncaught ReferenceError: Cannot access 'iAm' before initialization
       let iAm = 'only a crack, in this castle of glass';  
      
       // iAm can be accessed after being declared
       console.log(iAm); // => only a crack, in this castle of glass
   }
   
    // declaring before the function call, also allows it to be accessed- as seen with both let and var here
    var takeMeDown = 'to the riverbend';
    let takeMe = 'down to the fighting end';
   
    // function call
    castleOfGlass();
   
    // declaring after a function call
    // values either throw errors or are undefined in function
    var showMe = 'how to be whole again';
    const flyMe = 'up on a silver wing';