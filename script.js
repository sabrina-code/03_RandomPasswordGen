var charType = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz","0123456789","@#$%^&(){}[]|/~+=*|"];
var upperC;
var lowerC;
var numC;
var specialC;

//Select Charactrer Type:
function generate(){
var password = [];
var typeSelected = [];
  while (typeSelected.length==0){
    upperC = confirm("UPPERCASE: Include uppercase characters for your password?");
    if (upperC){
      typeSelected = charType[0];
      } 

    lowerC = confirm("LOWERCASE: Add lowercase characters for your password?");
    if (lowerC){
    typeSelected = typeSelected + charType[1];
    } 

    numC= confirm("NUMERICAL: Have numerical characters in your password?");
    if (numC){
        typeSelected = typeSelected + charType[2];
        } 

    specialC= confirm("SPECIAL: Would you like to have special characters in your password?");
    if (specialC){
        typeSelected = typeSelected + charType[3];
        } 

    if (typeSelected.length==0){
    alert("At least one type of characters has to be selected.");
    continue;
    }
  }
  
//Check input type and value
var pLen = prompt("The password can contain 8 to 128 characters. Please enter a number from 8 t0 128", ''); 
if (pLen==null){
  return;
}else{
pLen=parseInt(pLen);

while ((pLen < 8 || pLen > 128) || isNaN(pLen)){
      pLen = prompt("Please enter a number from 8 t0 128", ''); 
      if (pLen==null){
        return;
      }else{
      pLen=parseInt(pLen);
      continue;
      }
  }
} 
//generate a password according to selection
for (var i = 0; i < pLen; i++){
  password = password + typeSelected.charAt(Math.floor(Math.random() * Math.floor(typeSelected.length+1)));
  //display password
  document.getElementById("display").value = password;
} 
}

//copy password to clipboard
function copyToClipboard(){
  var password = document.getElementById("display").value;
  document.getElementById("display").select();
  document.execCommand("copy");
  alert("Password copied to clipboard: "+ password );
}
