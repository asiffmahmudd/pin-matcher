let click = 3;
enableBtns();

function generatePin(){
    let pin = "";
    while(pin.length != 4){
        pin = Math.round(Math.random()*10000).toString();
    }
    document.getElementById('randomPin').value = pin;
    
}

function enableBtns(){
    document.querySelectorAll('.button').forEach(item => {
        item.addEventListener('click', event => {
            let userInput = document.getElementById('userInput').value;
            let x = event.srcElement.textContent;
            if(x >= 0 && x <= 9){
                document.getElementById('userInput').value += x;
            }
            else if(x === "C"){
                document.getElementById('userInput').value = "";
            }
            else if(x == "<"){
                document.getElementById('userInput').value = userInput.substring(0, userInput.length-1);
            }
        });
    })
}

function disableBtns(){
    
}

function isGenerated(){
    if(document.getElementById('randomPin').value != "")
        return true;
    else 
        return false;
}

function validate(){
    if(!isGenerated()){
        alert("You have to generate a pin first");
    }
    else{
        if(document.getElementById('userInput').value === document.getElementById('randomPin').value){
            document.getElementById('not-matched').style.display = "none";
            document.getElementById('matched').style.display = "block";
            document.getElementById("generate").disabled = true;
            document.getElementById("submit").disabled = true; 
            disableBtns();
        }
        else{
            document.getElementById('matched').style.display = "none";
            document.getElementById('not-matched').style.display = "block";    
            click--;
            document.getElementById('try').textContent = click+" try left";
        }
        if(click == 0){
            startCount();
        }
    }
}

function startCount(){
    document.getElementById("generate").disabled = true;
    document.getElementById("submit").disabled = true; 
    let seconds = 10;
    let interval = setInterval(timer, 1000);
    function timer(){
        document.getElementById('try').textContent = "Too many attempts. Please try again in "+ seconds + "s";
        seconds--;
        if(seconds == -1){
            clearInterval(interval);
            reset();
        }
    }
}

function reset(){
    click = 3;
    document.getElementById('try').textContent = click+" try left";
    document.getElementById('not-matched').style.display = "none";
    document.getElementById('matched').style.display = "none";
    document.getElementById("generate").disabled = false;
    document.getElementById("submit").disabled = false;
}