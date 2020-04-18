// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  var charNum;
  var charSpec;
  var charUpper;
  var charLower;
  
  function generatePassword() {
    
    var passLength = Number(prompt("Please enter the length of your password (min 8 character and max 128 characters)."));

    if (!passLength) {
      alert("This needs to be a value!");
      passLength = Number(prompt("Please enter a value between 8 and 128."));
        while (passLength < 8 || passLength > 128) {
          alert("The value needs to be between 8 and 128.");
          passLength = Number(prompt("Please choose between 8 and 128."));
          if (passLength >= 8 && passLength <= 128) {
            charNum = confirm("Will your password contain numbers?");
            charSpec = confirm("Will your password contain special characters?");
            charUpper = confirm("Will your password contain uppercase letters?");
            charLower = confirm("Will you password contain lowercase letters?");
          }
        }
    }
    else if (passLength < 8 || passLength > 128) {
      alert("The value needs to be between 8 and 128.");
      passLength = Number(prompt("Please choose between 8 and 128."));
        while (passLength < 8 || passLength > 128) {
          alert("The value needs to be between 8 and 128.");
          passLength = Number(prompt("Please choose between 8 and 128."));
          if (passLength >= 8 && passLength <= 128) {
            charNum = confirm("Will your password contain numbers?");
            charSpec = confirm("Will your password contain special characters?");
            charUpper = confirm("Will your password contain uppercase letters?");
            charLower = confirm("Will you password contain lowercase letters?");
          }
        }
    }
    else {
      charNum = confirm("Will your password contain numbers?");
      charSpec = confirm("Will your password contain special characters?");
      charUpper = confirm("Will your password contain uppercase letters?");
      charLower = confirm("Will you password contain lowercase letters?");
    };

  

    var charList = "";
    
    // Validate the character types
    // If no character type is chosen
    if (!charNum && !charSpec && !charUpper && !charLower) {

      alert("You must choose at least one character type!");
      
    }

    // If 4 character types are chose
    else if (charNum && charSpec && charUpper && charLower) {

      charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}:;,<.>?/"

    }

    // If 3 character types are chosen
    else if (charNum && charSpec && charUpper) {

      charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}:;,<.>?/";

    }
    else if (charNum && charSpec && charLower) {

      charList = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}:;,<.>?/";

    }
    else if (charNum && charLower && charUpper) {

      charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    
    }
    else if (charSpec && charLower && charUpper) {

      charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[{]}:;,<.>?/";

    }

    // If 2 character types are chosen
    else if (charNum && charSpec) {

      charList = "0123456789!@#$%^&*()-_=+[{]}:;,<.>?/";

    }
    else if (charNum && charLower) {

      charList = "0123456789abcedfghijklmnopqrstuvwxyz";

    }
    else if (charNum && charUpper) {

      charList = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    }
    else if (charSpec && charLower) {

      charList = "!@#$%^&*()-_=+[{]}:;,<.>?/abcedfghijklmnopqrstuvwxyz";

    }
    else if (charSpec && charUpper) {

      charList = "!@#$%^&*()-_=+[{]}:;,<.>?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    }
    else if (charUpper && charLower) {

      charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz";

    }

    // If one character type is chosen
    else if (charNum) {
      
      charList = "0123456780";

    }
    else if (charSpec) {

      charList = "!@#$%^&*()-_=+[{]}:;,<.>?/";

    }
    else if (charUpper) {

      charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    }
    else if (charLower) {

      charList = "abcedfghijklmnopqrstuvwxyz";

    };

    // Return the password
    var retPass = "";
    for (var i = 0; i < passLength; i++) {

      retPass += charList.charAt(Math.floor(Math.random() * charList.length));

    }

    return retPass;

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
