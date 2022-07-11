let turn = true;
var tokencountA = 2;//locker variables
var tokencountB = 2;
var tokenHomeA = 0;//home count variables
var tokenHomeB = 0;

var pos1A = 1;
var pos2A = 1;

var pos1B = 15;
var pos2B = 15;

const playerturninfo = document.getElementsByClassName('info')[0];

function chancedecide(turn) {
    if (turn === true) {
        playerturninfo.innerText = "TURN : " + playerA;
        playerturninfo.style.background = "linear-gradient(to right, rgb(255 150 150), rgb(255 0 0))";
    }
    else if (turn === false) {
        playerturninfo.innerText = "TURN : " + playerB;
        playerturninfo.style.background = "linear-gradient(to right, rgb(130 73 254), rgb(0 88 250))";
    }
}


function turnswap(turn) {
    if (turn === true)
        return false;
    else
        return true;
}

let playerA = prompt("Enter the name of Player A : ", "Player A");
let playerB = prompt("Enter the name of Player B : ", "Player B");

const lockerA = document.getElementsByClassName("counttokenA")[0];
const lockerB = document.getElementsByClassName("counttokenB")[0];

chancedecide(turn);

var flag = 0;//for game over

const getdice = document.getElementsByClassName('dice')[0];
let decideA = 0;
let decideB = 0;
let moveA = 0;
let moveB = 0;

let flagA1=0;
let flagA2=0;
let flagB1=0;
let flagB2=0;
function numgen() {

    if(tokenHomeA==2){
        alert("Player A won the game!!\nRefresh to start a new game.");
        return;
    }
    
    if(tokenHomeB==2){
        alert("Player B won the game!!\nRefresh to start a new game.");
        return;
    }
    
    let num = Math.round(1 + Math.random() * 5);
    console.log(num);
    getdice.innerText = num;

    
    if (turn === true && tokencountA === 0) {
        if (tokenHomeA === 0) {
            moveA = prompt("Player A\nWhich piece should be moved?\n Enter 1 for 1A and 2 for 2A : ",2);
            if (moveA == 1) {
                if (pos1A + num <= 28) {
                    if ((pos1A != 1) && (pos1A != 15))
                    document.getElementById('a' + pos1A).innerHTML = `<div class="empty"></div>`;
                    else if (pos1A == 1)
                    document.getElementById('A1').innerText = "";
                    else if (pos1A == 15) {
                        document.getElementsByClassName('tokena')[0].innerText = "";
                    }
                    pos1A = pos1A + num;
                    let getidofpieces = document.getElementById('a' + pos1A);
                    getidofpieces.innerHTML += '<div class="tokena" >1A</div>';
                }
            }
            if (moveA == 2) {
                if (pos2A + num <= 28) {
                    if ((pos2A != 1) && (pos2A != 15))
                    document.getElementById('a' + pos2A).innerHTML = `<div class="empty"></div>`;
                    else if (pos2A == 1)
                    document.getElementById('A2').innerText = "";
                    else if (pos2A == 15) {
                        document.getElementsByClassName('tokena2')[0].innerText = "";
                    }
                    pos2A = pos2A + num;
                    let getidofpieces = document.getElementById('a' + pos2A);
                    getidofpieces.innerHTML += '<div class="tokena2" >2A</div>';
                }
            }
        }
        else if(tokenHomeA===1){
            if(flagA1===0){
                if(pos1A==28){
                    tokenHomeA=1;
                    flagA1=1;
                    alert("PlayerA has completed its first token.");
                }
                else if(pos2A==28){
                    tokenHomeA=1;
                    flagA2=1;
                    alert("PlayerA has completed its first token.");
                }
            }
            else if(flagA2===0){
                if (pos2A + num <= 28) {
                    if ((pos2A != 1) && (pos2A != 15))
                    document.getElementById('a' + pos2A).innerHTML = `<div class="empty"></div>`;
                    else if (pos2A == 1)
                    document.getElementById('A2').innerText = "";
                    else if (pos2A == 15) {
                        document.getElementsByClassName('tokena2')[0].innerText = "";
                    }
                    pos2A = pos2A + num;
                    let getidofpieces = document.getElementById('a' + pos2A);
                    getidofpieces.innerHTML += '<div class="tokena2" >2A</div>';
                }
            }
        }
    }
    if (turn === false && tokencountB === 0) {
        if (tokenHomeB === 0) {
            moveB = prompt("Player B\nWhich piece should be moved?\n Enter 1 for 1B and 2 for 2B : ",2);
            if (moveB == 1) {
                if (!(pos1B >= 8) || !(pos1B <= 14)) {
                    if (pos1B != 15 && pos1B != 1)
                        document.getElementById('a' + pos1B).innerHTML = `<div class="empty"></div>`;
                    else if (pos1B == 15)
                        document.getElementById('B1').innerText = "";
                    else if (pos1B == 1) {
                        document.getElementsByClassName('tokenb')[0].innerText = "";
                    }
                    pos1B += num;
                    if (pos1B > 28)
                        pos1B = pos1B - 28;
                    let getidofpieces = document.getElementById('a' + pos1B);
                    getidofpieces.innerHTML += `<div class="tokenb" >1B</div>`;
                }
                else {
                    if (pos1B + num <= 14) {
        
                        document.getElementById('a' + pos1B).innerHTML = `<div class="empty"></div>`;
                        pos1B += num;
                        let getidofpieces = document.getElementById('a' + pos1B);
                        getidofpieces.innerHTML += `<div class="tokenb" >1B</div>`;
                    }
                }
            }
            if (moveB == 2) {
                if (!(pos2B >= 8) || !(pos2B <= 14)) {
                    if (pos2B != 15 && pos2B != 1)
                        document.getElementById('a' + pos2B).innerHTML = `<div class="empty"></div>`;
                    else if (pos2B == 15)
                        document.getElementById('B2').innerText = "";
                    else if (pos2B == 1) {
                        document.getElementsByClassName('tokenb2')[0].innerText = "";
                    }
                    pos2B += num;
                    if (pos2B > 28)
                        pos2B = pos2B - 28;
                    let getidofpieces = document.getElementById('a' + pos2B);
                    getidofpieces.innerHTML += `<div class="tokenb2" >2B</div>`;
                }
                else {
                    if (pos2B + num <= 14) {
        
                        document.getElementById('a' + pos2B).innerHTML = `<div class="empty"></div>`;
                        pos2B += num;
                        let getidofpieces = document.getElementById('a' + pos2B);
                        getidofpieces.innerHTML += `<div class="tokenb" >2B</div>`;
                    }
                }
            }
        }
        else if(tokenHomeB===1){
            if(flagB1==0){
                if (!(pos1B >= 8) || !(pos1B <= 14)) {
                    if (pos1B != 15 && pos1B != 1)
                        document.getElementById('a' + pos1B).innerHTML = `<div class="empty"></div>`;
                    else if (pos1B == 15)
                        document.getElementById('B1').innerText = "";
                    else if (pos1B == 1) {
                        document.getElementsByClassName('tokenb')[0].innerText = "";
                    }
                    pos1B += num;
                    if (pos1B > 28)
                        pos1B = pos1B - 28;
                    let getidofpieces = document.getElementById('a' + pos1B);
                    getidofpieces.innerHTML += `<div class="tokenb" >1B</div>`;
                }
                else {
                    if (pos1B + num <= 14) {
        
                        document.getElementById('a' + pos1B).innerHTML = `<div class="empty"></div>`;
                        pos1B += num;
                        let getidofpieces = document.getElementById('a' + pos1B);
                        getidofpieces.innerHTML += `<div class="tokenb" >1B</div>`;
                    }
                }
            }
            else if(flagB2===0){
                if (!(pos2B >= 8) || !(pos2B <= 14)) {
                    if (pos2B != 15 && pos2B != 1)
                        document.getElementById('a' + pos2B).innerHTML = `<div class="empty"></div>`;
                    else if (pos2B == 15)
                        document.getElementById('B2').innerText = "";
                    else if (pos2B == 1) {
                        document.getElementsByClassName('tokenb2')[0].innerText = "";
                    }
                    pos2B += num;
                    if (pos2B > 28)
                        pos2B = pos2B - 28;
                    let getidofpieces = document.getElementById('a' + pos2B);
                    getidofpieces.innerHTML += `<div class="tokenb2" >2B</div>`;
                }
                else {
                    if (pos2B + num <= 14) {
        
                        document.getElementById('a' + pos2B).innerHTML = `<div class="empty"></div>`;
                        pos2B += num;
                        let getidofpieces = document.getElementById('a' + pos2B);
                        getidofpieces.innerHTML += `<div class="tokenb" >2B</div>`;
                    }
                }
            }
        }
    }

    if (turn === true && tokencountA === 1 && num === 6) //A:2nd 6 option
    {
        if( tokenHomeA == 0){
            decideA = prompt("Player A \nEnter 1 to move the 1st piece\n Enter 2 to move out the 2nd piece out of locker \nEnter your choice: ", 1);
            if (decideA == 2) {
                document.getElementById('A2').style.display = "inline-block";
                lockerA.innerText = "0A";
                tokencountA--;
            }
        }
        if( tokenHomeA == 1)
        {
            document.getElementById('A2').style.display = "inline-block";
            lockerA.innerText = "0A";
            tokencountA--;
        }
    }
    if (turn === true && tokencountA === 2 && num === 6) //A:bringing out 1st token
    {
        lockerA.innerText = "1A";
        tokencountA--;
        document.getElementById('A1').style.display = "inline-block";
    }

    if (turn === false && tokencountB === 1 && num === 6 ) //B:2nd 6 option
    {
        if(tokenHomeB == 0){
            decideB = prompt("Player B: \nEnter 1 to move the 1st piece\n Enter 2 to move out the 2nd piece out of locker \nEnter your choice: ", 1);
            if (decideB == 2) {
                document.getElementById("B2").style.display = "inline";
                lockerB.innerText = "0B";
                tokencountB--;
            }
        }
        if(tokenHomeB==1)
        {
            document.getElementById("B2").style.display = "inline";
            lockerB.innerText = "0B";
            tokencountB--;
        }
    }

    if (turn === false && tokencountB === 2 && num === 6) //B:bringing out 1st token
    {
        lockerB.innerText = '1B';
        tokencountB--;
        document.getElementById('B1').style.display = "inline";
    }

    if (turn === true && tokencountA === 1 && flagA1===0 &&((num < 6) || (decideA == 1)))// A : moving 1st token
    {
        if (pos1A + num <= 28) {
            if ((pos1A != 1) && (pos1A != 15))
                document.getElementById('a' + pos1A).innerHTML = `<div class="empty"></div>`;
            else if (pos1A == 1)
                document.getElementById('A1').innerText = "";
            else if (pos1A == 15) {
                document.getElementsByClassName('tokena')[0].innerText = "";
            }
            pos1A = pos1A + num;
            let getidofpieces = document.getElementById('a' + pos1A);
            getidofpieces.innerHTML += '<div class="tokena" >1A</div>';
        }
    }
    if (turn === false && tokencountB == 1 && flagB1===0 && ((num < 6) || (decideB == 1))) //B : moving 1st token
    {
        if (!(pos1B >= 8) || !(pos1B <= 14)) {
            if (pos1B != 15 && pos1B != 1)
                document.getElementById('a' + pos1B).innerHTML = `<div class="empty"></div>`;
            else if (pos1B == 15)
                document.getElementById('B1').innerText = "";
            else if (pos1B == 1) {
                document.getElementsByClassName('tokenb')[0].innerText = "";
            }
            pos1B += num;
            if (pos1B > 28)
                pos1B = pos1B - 28;
            let getidofpieces = document.getElementById('a' + pos1B);
            getidofpieces.innerHTML += `<div class="tokenb" >1B</div>`;
        }
        else {
            if (pos1B + num <= 14) {

                document.getElementById('a' + pos1B).innerHTML = `<div class="empty"></div>`;
                pos1B += num;
                let getidofpieces = document.getElementById('a' + pos1B);
                getidofpieces.innerHTML += `<div class="tokenb" >1B</div>`;
            }
        }
    }
    if(tokenHomeA===1){
        if(pos1A===28 && pos2A===28){
            tokenHomeA=2;
            flagA1=flagA2=1;
            alert("GAME OVER!!!\nPlayer A won the game.");
            return;
        }
        else if(pos1B===14 && pos2B===14){
            tokenHomeB=2;
            flagB1=flagB2=1;
            alert("GAME OVER!!!\nPlayer B won the game.");
            return;
        }
    }
    
    if(tokenHomeA==0){
        if(pos1A==28){
            tokenHomeA=1;
            flagA1=1;
            alert("PlayerA has completed its first token.");
        }
        else if(pos2A==28){
            tokenHomeA=1;
            flagA2=1;
            alert("PlayerA has completed its first token.");
        }
    }
    if(tokenHomeB==0){
        if(pos1B==14){
            tokenHomeB=1;
            flagB1=1;
            alert("PlayerB has completed its first token.");
        }
        else if(pos2B==14){
            tokenHomeB=1;
            flagB2=1;
            alert("PlayerB has completed its first token.");
        }
    }
    turn = turnswap(turn);
    chancedecide(turn);
}
