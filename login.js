var user_arr=["Anshum","Utsav","Anurita","Anmol"]
var pass_arr=["ANSHUM2001","UTSAV2002","ANURITA2001","ANMOL2002"]
function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (user_arr.includes(username)){
        var n = user_arr.indexOf(username);
        if(pass_arr.includes(password)){
            // window.alert("Logined Sucessfully!!");
            window.location.href = "Oldage_page.html";
        }
        else{
            window.alert("Wrong password");
        }
    }
    else{
        window.alert("Incorrect Username");
    }
}
function signup(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (user_arr.includes(username)){
        window.alert("Usename already taken");
    }
    else{
    user_arr.push(username);
    pass_arr.push(password);
    window.alert("Signed Up Sucessfully!!");
    }
}
