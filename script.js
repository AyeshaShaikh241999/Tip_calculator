
//get the values of input

function calculateTip() {
    var bill = document.getElementById("bill").value;
    var service = document.getElementById("service").value;
    var numOfPeople = document.getElementById("people").value;
  
    //chech the validate input
    if (bill === "" || service == 0) {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1 
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
    //Calculate the tip
    
    var total = (bill * service) / numOfPeople;
    //round to two decimal places
    
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    
    total = total.toFixed(2);
    //Display the tip
   
    document.getElementById("total").style.display = "block";
   
    document.getElementById("tip").innerHTML = total;
  
  }
  
 // Hide the tip amount on load
  document.getElementById("total").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };