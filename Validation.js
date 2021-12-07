function checkFName() {
    var field = document.getElementById("FName").value;

    if (field.length < 5)
      document.getElementById("message1").innerHTML = "Too short!";
    else
      document.getElementById("message1").innerHTML = "That's long enough";
  }

  function checkLName() {
    var field = document.getElementById("LName").value;

    if (field != "")
      document.getElementById("message2").innerHTML = "Input.accepted";
    else
      document.getElementById("message2").innerHTML ="You must provide input!";
  }

  function results(){
   var greet = alert("Thank you, your doctor will see you soon!"); }
