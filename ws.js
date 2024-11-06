function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}








let input = document.getElementById("input_string");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    console.log(input.value);
  }

});




