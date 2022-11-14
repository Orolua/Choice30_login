function getInfo(){
    let email = document.getElementById("email").value;
    let password =  document.getElementById("password").value; 
let objPeople =[{email:"oroluachoice@gmail.com", password: "12345678"}]

for(i=0; i < objPeople.length; i++){
    if((email == objPeople[i].email) && (password == objPeople[i].password)){
        alert("Login Successful");  
   }
    else if((email != objPeople[i].email) && (password == objPeople[i].password)){
    alert('Incorrect email');
    }else if((email == objPeople[i].email) && (password != objPeople[i].password)){
        alert('Incorrect password');
        }else {
            alert('Incorrect username and password');
            }
//     // console.log(email);
//     // console.log(password);
// }
//console.log(objPeople.length);
}
}

