// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

  var numberOfChildren = N;
  var partnerName = Z;
  var location = Y;
  var jobTitle = X;
  console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.");

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

  var currentYear = 2016;
  var birthYear = 1987;
  var yearsOld  = currentYear - birthYear;
  console.log("They are either " + yearsOld + " or " + (yearsOld - 1));

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

  var currentAge = 23;
  var maxAge = 90;
  var dailyBurrito = 5;
  var totalBurritos = (maxAge - currentAge) * dailyBurrito
  console.log("You will need " + totalBurritos + " to last you until the ripe old age of " + maxAge);

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

  var radius = 5;
  var circumference = (radius * 2) * Math.PI
  var area = Math.PI * Math.pow(raidus, 2)
  console.log("The circumference is " + circumference);
  console.log("The area is " + area);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

  var celsius = 34;
  var fahrenheit = 77;
  var cToF = (celsius * (9/5)) + 32;
  var fToC = (fahrenheit - 32) * (5/9);
  console.log(celsius + "°C" + " is " + cToF + "°F");
  console.log(fahrenheit + "°F" + " is " + fToC + "°C");
