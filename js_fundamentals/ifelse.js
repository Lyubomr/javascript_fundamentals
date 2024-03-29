// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

  var greaterNum = function(number1, number2){
    if (number1 > number2) {
      return number1;
    }
    else {
    return number2;
   }
  }

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

  var helloWorld = function(languageCode) {
      if (languageCode === "da"){
        console.log("Hej Verden!");
      }else if ( languageCode === "es"){
        console.log("¡Hola Mundo!");
      }else if ( languageCode === "ja"){
        console.log ("Kon'nichiwa Sekai!");
      }else {
        console.log("Hello World!");
      }
  }

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

  var assignGrade = function(testScore){
    if (testScore < 50){
      console.log("Your grade is F");
    }else if (testScore >= 50 && testScore < 59){
      console.log("Your grade is D");
    }else if (testScore >= 60 && testScore < 70){
      console.log("Your grade is C");
    }else if (testScore >= 70 && testScore < 80){
      console.log("Your grade is B");
    }else if (testScore >= 80 && testScore < 90){
      console.log("Your grade is A");
    }else {
      console.log("Your grade is A+");
    }
  }

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

  var pluralize = function(noun, number){
   if (number > 1){
     var pnoun = noun + "s";
   console.log(number + " " + pnoun );
   }
   else {
    console.log(number + " " + noun);
   }
  }
