/* *
 *  0. DATA TYPES
 * 
 *  JavaScript is weakly typed. A programming language that is loosely typed, or weakly typed, does not require different 
 *  variables and objects to be defined by programmers. As a result, variables are not tied to any one value type, and any 
 *  variable is able to be assigned or reassigned as needed to any data type. JavaScript also allows for implicit type 
 *  conversion. Implicit type conversion can lead to JavaScript converting a string of '8' to a number when it sees the 
 *  string being used in a mathematical expression that is not concatenation (example: '8' / 2 => 4). This can cause odd 
 *  results, and is something that should be avoided when possible. There are a total of six simple data types and three 
 *  complex data types, and all have unique properties that set them apart within the language.
 * 
 * */

/* *
 *  1. Number
 * 
 *  Numbers are floating point values instead of integers within JavaScript, each value is either a whole number or a 
 *  decimal. They are copy-by-value and a simpple data type. Non-numbers can be coherced into Numbers via the constructor 
 *  Number(), which converts a value to the Number type, or if it is impossible to convert- returns NaN. The JavaScript 
 *  Number type is a double-precision 64-bit binary format IEEE 754 value, allowing it to handle fractions. However, 
 *  while accurate to a high degree, it is not limitless in terms of the numbers it can produce and can run into hiccups
 *  with more complicated math.
 * 
 * */ 
      // Variable Set to a Number:
       const myNumber = 97632984729834.5;

      // Transforming a String to a Number:
       const change = Number('777');
       console.log(change); // => 777 

/* *
 *  2. String
 * 
 *  Strings have a length, a zero-based index, store data as text, and are copy-by-value. Strings can be created using 
 *  single or double quotes or using the backtick character ` to create template literals (also called template strings).
 *  While some methods like .toString() will return an error trying to turn null or undefined values to a string, 
 *  String() will convert them. Another quirk to note occurs when sorting strings- in JavaScript, 'a' is less than 'z', 
 *  since strings are sorted via lexicographical order. Regular expressions are also particularly useful when dealing with 
 *  strings, as they can target specific characters based on patterns. 
 * 
 * */
     // Variable Set to a String:
      const gimmeString = "THE STRING IS ME!";

     // Transforming a Number to a String:
      const stringy = String(99999); // a number being transformed
      console.log(stringy) // => '99999' 

/* *
 *  3. Boolean
 * 
 *  There are two boolean values: true and false. Oftentimes these values will be found in conditional statements. The
 *  primitive Boolean values true and false are distinctly different from the the true and false values of the Boolean 
 *  object. To avoid any errors within code- avoid using Boolean() constructor with new to convert a non-boolean 
 *  value to a boolean value. Instead, use Boolean as a function or the double bang operator to coherce the value 
 *  into the primitive boolean.
 * 
 * */
     // Variable Set to a Boolean:
      const isBool = true;

     // Cohercing a Value to a Primitive Boolean Value:
      const transform = 67;
      console.log(!transform)  // => false
      console.log(!!transform) // => true

/* *
 *  4. Array
 *   
 *  Arrays store a collection of elements of any value. They are complex, ordered, value-by-reference, have a length, 
 *  and are zero-indexed. They are considered to be objects within JavaScript, and Array.isArray() method is the best 
 *  method to distinguish them from other objects. JavaScript arrays are not associative arrays as the elements in an 
 *  array are accessed using index values. This is why dot notation can be used in order to access objects but not 
 *  arrays. There are several methods specifically for working with arrays that allow for both destructive and 
 *  non-destructive manipulations of data stored within arrays. Avoiding these mutated values can be a desirable 
 *  or undesirable result depending on what must be accomplished.
 * 
 * */
     // Variable Set to an Array:
      const witnessMe = ['I', 'am', 'an', 'array'];

     // Using Array.isArray() to Determine is a Value is an Array:
      console.log(Array.isArray(witnessMe)) // => 'true' 
    
    // How To Access An Array
     
     // bracket notation 
      console.log(witnessMe[1]) // => 'am' 

     // array methods, such as .push() and .unshift()
       witnessMe.push('!'); // adds element to the back of the array
       witnessMe.unshift('Look!'); // adds element to the front of the array
       console.log(witnessMe); // => [ 'Look!', 'I', 'am', 'an', 'array', '!' ]

/* *
 *  5. Object
 * 
 *  Objects are complex data types, value by reference, and unordered- instead of indexes they have a 
 *  collection of key/value pairs. Using typeof we can see that the type object is not limited to objects
 *  alone, and that many other elements are also considered objects. This includes arrays, nulls, and Date. 
 *  An object's keys and values can be accessed using dot or bracket notation, or by using a for-in loop - 
 *  which will be discussed in loops. 
 * 
 * */
      // How to Look for Specific Objects:

        const myObj = { not: 'a date, array, or null'}; // => an object
        const myDate = new Date(); // => a new date
        const myNull = null; // => value set to null
        const myArr = [1, 2, 3]; // => an array
   
        function sortObjs (obj) {
          if (obj instanceof Date) { // this condition will check for dates
           return 'A date?!?! I thought we were friends!'; 
             } else if (obj === null) { // this condition will check for null
           return 'Nullified!';
             } else if (Array.isArray(obj)) { // this condition will check for arrays
          return 'ARRAY-GED FROM THE START!';
             } else {
          return 'Is an object.' // if none of the previous values were hit, we have an object
          }
        }
   
        console.log(sortObjs(myObj)); // => 'Is an object.' 
        console.log(sortObjs(myDate)); // => 'A date?!?! I thought we were friends!' 
        console.log(sortObjs(myNull)); // => 'Nullified!' 
        console.log(sortObjs(myArr)); // => 'ARRAY-GED FROM THE START!'

      // How to Access an Object:

      const anObj = { this: 'is my object'};
        
        // dot notation 
        anObj.first = 'is the worst';
        // bracket notation 
        anObj['second'] = 'is the best';

        console.log(anObj); // =>  {
                                  //  this: 'is my object',
                                  //  first: 'is the worst',
                                  //  second: 'is the best'
                                  // }

/* *
 *  6. Function
 *
 *  Functions are complex data types that are value-by-reference. They are reusable blocks of codes that can optionally have
 *  names, parameters and a return. They are function-scoped and within them, variables that start with var and functions are
 *  hoisted. Functions can be named, anonymous, or assigned to a variable. They can be nested just like arrays. Just like the
 *  other data types, they can be returned or passed to another function via arguments. Functions optionally take parameters, 
 *  which are essentially placeholders for data passed to the function. A function without parameters can be invoked by its 
 *  name followed by an opened and closed parentheses. All functions will have a function body, and then optionally have a 
 *  return.
 * 
 * */ 
     // Example of a Function: 
     //          ___ function name   ____ parameters that take arguments are located here, they are the function inputs
     //         |                   |
      function myFunc(thisParameter) {
        return `Let's return this ${thisParameter}!'`;
      } // |
     //    |___ function return will return an output 

      const anArgument = 'argument';

     // Example of a Function Call:

        myFunc(anArgument);
     // |             |
     // |__ call func |__ argument will be passed into the function via parameter

      console.log(myFunc(thisArgument)); // => `Let's return this argument!`


/* *
 *  7. undefined
 * 
 *  undefined is a primitive value, it indicates a variable has never been assigned a value or was never declared. In this sense it 
 *  has a similar meaning to "nothing" or "non-existence", but is also seperate from it and distinct from null.
 * 
 * */
     // Checking For an undefined Value:

     let whoAmI; // => while the variable was created, it was never assigned
     console.log(whoAmI); // => 'undefined' 

     // Locating undefined Values to Assign Value to Them:

     if (whoAmI === undefined) {  // => checking for the value undefined
        whoAmI = 'I AM ELECTRIC!'; // => value is reassigned
     }
     console.log(whoAmI); // => 'I AM ELECTRIC!' is logged to the console

/* *
 *  8. null
 * 
 *  null is a primative value. It means does not exist or contains nothing, but differs in that is an intentional nothing as oppose to 
 *  the accidental nothing undefined refers to. It is important to be wary of typeof null, as this returns that the type of null is an object.
 * 
 * */
     // null is an object by error due to an artifact of early JavaScript where its type tag was similar to objects, leading to the mix up 
     console.log(typeof null); // => 'object' is logged to console
     
        // null can be sorted from other objects by filtering for it specfically
        const magic = { wand: 'KAPOW!'}; // => a standard object
        const theVoid = null; // => null

       function nullCheck (obj) {
         if (obj === null) { // this will sort null from other objects
          return "THE VOID OF NULL CONSUMES ALL"; 
         } else {
          return "Not null, it's magic!"
         }
       }

        console.log(nullCheck(theVoid)); // => "THE VOID OF NULL CONSUMES ALL"
        console.log(nullCheck(magic)); // => "Not null, it's magic!"    
     
/* *
 *  9. NaN
 * 
 *  Nan is a variable within the global scope. NaN will be returned if: a number conversion  fails (such as using Number() or Math.abs() 
 *  on undefined), a math operation returns something that is not a real number, the number has an indeterminate form (for example, 
 *  Infinity - Infinity), a method or expression has a value coherced to NaN, or when an invalid value is represented as a number. 
 *  NaN is contagious, this means that much like a virus, it spreads from one part of the code to the next, being passed on. The 
 *  place where NaN is first spotted can be far from the place that caused it, making it a high priority to track down if an 
 *  unintentional NaN slips into code. All failures that cause NaN fail silently, without errors. An interesting thing to note 
 *  about NaN is that when compared with any comparison operator, NaN always returns false - even if the comparison involves
 *  comparing NaN to NaN. The proper way to check to see if a number is NaN is via Number.isNan()
 * 
 * */ 
     // NaN Created From A Number Conversion Failure:

      let isThisNumber = 'bird';
      console.log(Number(isThisNumber)); // => NaN 
    
     // Checking for NaN:

     if (Number.isNaN(NaN)) { // is this value NaN?
      console.log('I want NaN of it!'); // => 'I want NaN of it!'
     }

/* *
 *  10. Infinity and -Infinity
 * 
 *  There are two values that represent positive Infinity in JavaScript. The first Infinity is a variable in global
 *  scope and a property of the global object. This value is distinctly different from the value that is called 
 *  with Number.POSITIVE_INFINITY. This second value is a data property (and thus the one we are concerned with).
 *  Positive Infinity is the highest number value within JavaScript. Dividing any positive number by POSITIVE_INFINITY 
 *  produces +0, while dividing a negative by POSITIVE_INFINITY results in a -0. Any positive value, including 
 *  POSITIVE_INFINITY itself, equals POSITIVE_INFINITY. 0 or NaN multipied by POSITIVE_INFINITY is NaN. Any 
 *  negative value multiplied by POSITIVE_INFINITY is equal to NEGATIVE_INFINITY. POSITIVE_INFINITY divided by 
 *  any negative value that is not NEGATIVE_INFINITY is NEGATIVE_INFINITY. POSITIVE_INFINITY, divided by any 
 *  positive value except POSITIVE_INFINITY, is POSITIVE_INFINITY. POSITIVE_INFINITY, divided by either NEGATIVE_INFINITY 
 *  or POSITIVE_INFINITY, is NaN. Number.POSITIVE_INFINITY > x is true for any number x that isn't POSITIVE_INFINITY.
 *  
 *  While POSITIVE_INFINITY is the highest possible number, Number.NEGATIVE_INFINITY is the lowest number value within 
 *  JavaScript. Any positive value, including POSITIVE_INFINITY, multiplied by NEGATIVE_INFINITY is NEGATIVE_INFINITY.
 *  A negative value, including NEGATIVE_INFINITY, multiplied by NEGATIVE_INFINITY is POSITIVE_INFINITY. A positive 
 *  value divided by NEGATIVE_INFINITY is -0. A negative value divided by NEGATIVE_INFINITY is +0. Zero or NaN multiplied
 *  by NEGATIVE_INFINITY is NaN. NEGATIVE_INFINITY, divided by any negative value except NEGATIVE_INFINITY, is POSITIVE_INFINITY.
 *  NEGATIVE_INFINITY, divided by any positive value except POSITIVE_INFINITY, is NEGATIVE_INFINITY. NEGATIVE_INFINITY, 
 *  divided by either NEGATIVE_INFINITY or POSITIVE_INFINITY, is NaN. x > Number.NEGATIVE_INFINITY is true for any number 
 *  x that isn't NEGATIVE_INFINITY.
 * 
 * */
     // Using Infinity to Cap Values:

     let huge = Number.MAX_VALUE * 2;
     let mini = -Number.MAX_VALUE * 2;
     
     function returnFinite(value) {
        if (value === Number.POSITIVE_INFINITY) {
          return Number.MAX_VALUE; // cap at max positive
        }
        if (value === Number.NEGATIVE_INFINITY) {
          return -Number.MAX_VALUE; // cap at max negative
        }
        return value; // return as-is if it's already finite
      }

      console.log(returnFinite(huge)) // => 1.7976931348623157e+308
      console.log(returnFinite(mini)) // => -1.7976931348623157e+308

/* *
 *  11. What is the difference between primitive/simple and complex data types?
 * 
 *  Simple (primitive) data types are the lowest type of data. Complex data types are formed from these
 *  simple types. The six different simple data types are: strings, numbers, booleans, undefined, NaN, null. 
 *  All these primitives are static data- that is, that they have a size fixed at the compile time and will be 
 *  stored in a stack. All primitive values are atomic - an atomic action is one that effectively happens all at 
 *  once- think of it as meaning “one at a time”. When that concept meshes with primitives, it similarly is 
 *  indicating that primitives have only one value. Simple data tyes are also immutable. An immutable value is 
 *  one whose content cannot be changed without creating an entirely new value. The last property they all share
 *  is that they are all copied from one variable to the next when assigning or passing. This process is aptly 
 *  called "copy by value". 
 * 
 * */ 
     // Examples of Simple Data Types:

      let stringed = "This is a string value"; // a string
      let numbed = 4038; // a number
      let booled = false; // a boolean

 /* *
 *  Complex values are of an indefinite size and are formed from many data types. As such they require dynamic 
 *  memory allocation- which grants more space in memory over time via the heap where they are stored. There are 
 *  three complex data types: objects, arrays, and functions. Complex data types, unlike simple data types- are
 *  "copy by reference". This means that instead of a copy, variables will simply reference the data they are 
 *  assigned to. 
 * 
 * */
     // Examples of Complex Data Types:

      let arrayed = ['this', 'array']; // an array
      let objected = {
        thisIs: 'an object'  // an object
      };
      let functioned = (summed) => summed + 1; // a function
      
/* *
 *  12. Primitive values are passed to a function BY COPY, complex values are by reference.
 *      What does that mean, and how are they different?
 * 
 *  When using any primitive value- a variable will make a copy of the value they are assigned. If there are 
 *  changes made to the original data- this will not impact the data stored in the variable. In a similar 
 *  vein, changing the variable will have no impact on the original data. 
 * 
 * */
     // Copy by Value:
     
       //number is assigned to a primitive value, 5
        let number = 5;
       //number 2 is copying the value of number
        let number2 = number;
     
       //what happens when we alter the values assigned to both variables?
        number -= 3;
        number2 += 6;
     
       //as their relationship began and ended with the moment of the copying- neither variable are impacted by the operations
        console.log(number); // => 2 is logged to console since 5 - 3 = 11
        console.log(number2); // => 11 is logged to console since 5 + 6 = 11

 /* * 
 *  Complex values will instead copy by reference. This means that variables will not make a copy of the value they
 *  are being assigned to, but instead will make a reference to that data. Any manipulation of variables will effect 
 *  the original data. Any changes to the original data will also effect the variable.
 *    
 * */
     // Copy by Reference:

      //referenceMe is assigned to the complex array value, [1, 2, 3, 'a', 'b', 'c']
       let referenceMe = [1, 2, 3, 'a', 'b', 'c'];

      //we assign refMeUpBaby to the value of referenceMe 
       let refMeUpBaby = referenceMe;

      //what happens when we alter the values assign to both variables?
       referenceMe.unshift(0);
       refMeUpBaby.push('d');

      //since they are both making a reference to the same data, refMeUpBaby can make changes to referenceMe as well
       console.log(referenceMe); // => [ 0,   1,   2,   3, 'a', 'b', 'c', 'd'] is logged to the console