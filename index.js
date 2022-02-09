const insertNumber = (n1) => {
 var existingNumber = $("#result").val();
  $("#result").val(existingNumber + n1);
}

const clearResult = () =>{
    $("#result").val('');
}

const calculate = () => {
    var result = eval($("#result").val());
    $("#result").val(result);
}

const deleteLastOne = () => {
   var presentVal = $("#result").val();
   if(presentVal!=""){
    $("#result").val(presentVal.slice(0,-1));
   }
   
}

const posToMinusToggling = () =>
{
    var presentVal = eval($("#result").val());
   
    presentVal = -presentVal;

    var newVal = presentVal.toString();
    $("#result").val(newVal);
    


    
}