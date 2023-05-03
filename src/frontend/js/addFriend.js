let whichBtn = 0;
let addFriends = document.getElementById("contactos");
let groupFriends = (e) => {
    whichBtn = (e.target.id);
    if (whichBtn.slice(-1) != 2) {
    document.getElementById(whichBtn).style.display="none";
    document.getElementById(whichBtn + "2").style.display="block";
    } else {
        document.getElementById(whichBtn).style.display="none";
        document.getElementById(whichBtn.slice(0, -1)).style.display="block";
    }
};
addFriends.addEventListener('click', groupFriends);

