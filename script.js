
function idCard() {
    var firstName = document.getElementById('firstName').value;
    var LastName = document.getElementById('lastName').value;
    
    var age = document.getElementById('age').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    


    var postFullName = document.getElementById("postFullName");
    
    var postAge = document.getElementById("postAge");
    var postCity = document.getElementById("postCity");
    var postState = document.getElementById("postState");
    var postZip = document.getElementById("postZip");
    



    postFullName.innerText = firstName+ " " + "" + LastName;
    
    postCity.innerText = city;
    postState.innerText = state;
    postZip.innerText = zip;
    
   
var ages = [];
ages.push(age);


for (var i = 0; i < ages.length; i++) {
    if(parseInt(ages[i]) <= 100) {
        postAge.innerText = ages[i]; 
        }
      }

    }
