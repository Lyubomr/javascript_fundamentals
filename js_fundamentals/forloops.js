// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
  var count = 0;
  while (count < 20) {
    count ++;
    if (count % 2 === 0){
      console.log(count + " is even.")
    }
    else ( count % 2 !== 0) {
      console.log(count + " is odd")
    }
  }
// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
  var counter;
  for (counter = 0; counter <= 10; counter ++){
    console.log(counter + " *" + " 9" + " =" + ( counter * 9));
  }
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// EXERCISE: The Grade Assigner
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

  for ( g = 60; g < 100; g++ ){
     console.log("For " + g + " you got " + assignGrade(g) + ".");
   }
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
