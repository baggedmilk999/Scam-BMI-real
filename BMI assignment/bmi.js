function BMI() {
    let weight = document.getElementById("Weight").value;
    let height = document.getElementById("Height").value; 
    let first_Name = document.getElementById("firstName").value;
    let last_Name = document.getElementById("lastName").value;
   let Result = document.getElementById("result");

    
    var bmi = weight / (height*height) * 703;
    
 
    
    
    if(bmi <= 25 && bmi >= 18 ){
    document.getElementById("weightScale").innerText = "You are so swag and health!";
    
    }else{
      document.getElementById("weightScale").innerText = "N O!!!!!!!!!!!!!";
    }

Result.innerHTML = first_Name  + " " + last_Name + " your BMI is: " + bmi;

}



