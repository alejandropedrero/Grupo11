let whichMessage = 0;
let addMessage = document.getElementById("btn-message");
let clickOut = document.getElementById("escape");

function groupMessage () {
    document.getElementById("btn-message").style.display="none";
    document.getElementById("btn-message2").style.display="block";
};

function chaoMessage (){
    document.getElementById("btn-message").style.display="block";
    document.getElementById("btn-message2").style.display="none";
};

addMessage.addEventListener('mouseover', groupMessage);
clickOut.addEventListener('click', chaoMessage);
