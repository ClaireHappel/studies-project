/* *
 *  0. STRING MANIPULATION
 *
 *  Strings are a primitive data type contained with quotes or inside a template literal. They have a length, a 
 *  zero-based index, store data as text, and are copy-by-value. When using quotes within quotes, strings can be 
 *  escaped with backslashes. With more modern template literals, escape characters are not needed and parameters 
 *  can easily be incorporated into a string. Strings can be manipulated via concatenation or string methods. 
 *  Regular expressions are also particularly useful when dealing with strings, as they can target specific characters 
 *  based on patterns. Something to be aware of in JavaScript is that 'a' is less than 'z'. Letters and characters 
 *  within JavaScript do follow lexicographical order, and comparisons are measuring the Unicode values.
 * 
 * */

/* *
 *  1. With operators
 * 
 *  Strings can be manipulated with operators via concatenation using the operators + or += . While addition is 
 *  possible, subtraction is not. Generally, subtracting a string will provide NaN as a result. The exception
 *  is if the string contains numbers that can be converted to integers. If an integer exists that can changed
 *  into a number, Javascript will attempt to use the integers for mathmatical operations involving substraction,
 *  division, and multiplication. This automatic type conversion creates stringy numbers, and can potentially create
 *  issues with the math- so it is recommended instead to intentionally convert strings to integers to avoid side effects.
 * 
 * */
     // Using the Addition Operator (+):

     const humpty = 'All the kings horses and all the kings men ';
     const dumpty = 'wish they could concat to put him together again.';
     
     const humptyDumpty = humpty + dumpty; // adding the two strings with +
     
     console.log(humptyDumpty); // => "All the kings horses and all the kings men wish they could concat to put him together again."

    // Using the Addition Assignment Operator(+=):

     let train = 'Chugga chugga chugga chugga-'
     let caboose = 'CHOOO CHOOOOO!'

     train += caboose; // += concatenates the original value of train with the value of caboose
     console.log(train) // => 'Chugga chugga chugga chugga-CHOOO CHOOOOO!'

/* *
*  2. With string methods
* 
*  There are several methods that can be used to manipulate strings, some of them include .slice(), .split(), .concat(), .charAt(), 
*  .substring(), .replace(), .replaceAll(), .toUpperCase(), and .toLowerCase(). There are two methods for extracting a part of a 
*  string: .slice() and .substring(). The replaceAll() method allows you to specify a regular expression instead of a string to 
*  be replaced - and can be used to replace all instances of the match. The method toUpperCase() simply converts a string 
*  to upper case while a string can be converted to lower case with toLowerCase(). Like the concatenation operator (+), concat() 
*  joins two or more strings together. The charAt() method returns a character at a specified index in a string. And if we 
*  wanted to convert a string to an array, we can do so with the split() method. 
* 
* */
     // Manipulation With Methods:

     const pizza = "Pepperoni";

     // .slice()
     console.log(pizza.slice(0, 6)); // => "Pepper"
     
     // .split()
     console.log(pizza.split('')); // => ["P","e","p","p","e","r","o","n","i"]
     
     // .concat()
     console.log(pizza.concat(pizza)); // => "PepperoniPepperoni"
     
     // .charAt()
     console.log(pizza.charAt(1)); // => "e"
     
     // .substring()
     console.log(pizza.substring(0, 3)); // => "Pep"
     
     // .replace()
     console.log(pizza.replace('Pepperon', 'Raviol')); // => "Ravioli"
     
     // .replaceAll()
     console.log(pizza.replaceAll('p', 'P')); // => "PePPeroni"
     
     // .toUpperCase()
     console.log(pizza.toUpperCase()); // => "PEPPERONI"
     
     // .toLowerCase()
     console.log(pizza.toLowerCase()); // => "pepperoni"