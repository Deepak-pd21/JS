// how to accept user input

// 1. EASY WAY = window prompt
// 2. PROFFESIONAL WAY = HTML textbox

let username;                                              //declare 

document.getElementById("mybutton").onclick = function(){    //after button clicked
    username = document.getElementById("mytext").value;    //get text from text box ie from "mytext" and store in username
    document.getElementById("myh1").textContent = `Hello ${username}`;  //the h1 element is changed into hello (username)
} 