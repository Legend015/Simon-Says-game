let s = "";
let box = document.querySelectorAll(".box");
let count = 0;
let body = document.querySelector("body");
let p = document.querySelector("p");
let inst = document.querySelector(".instruction");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    body.style.backgroundColor = "greenyellow";
    body.style.color = "black";
    p.innerText = "Level :: 0.";
    inst.innerText ="Follow the pattern , click as per that..!";
    btn.classList.toggle("disp");
    if(s.length == 0 ){
        setTimeout(restart,600);
        count++;
    }
})

let counter =0;
let highscore=0;
box.forEach((boxElement, index) => {
    boxElement.addEventListener("click", function(){
        blink(index);
        check(index);
    });
});

function check(n){
    if(s[counter] != n){
        p.innerText = `Oops, you are out!,highest score: ${highscore}`;
        inst.innerText ="Click on start button to start again";
        body.style.backgroundColor = "red";
        body.style.color = "white";
        btn.classList.toggle("disp");
        btn.style.backgroundColor= "white";
        btn.style.border="1px solid white";
        btn.style.color="blue";
        s = "";
        counter = 0; 
    } else {
        counter++; 
        if (counter === s.length) {
            p.innerText = `currently at level ${counter}`;
            highscore =counter;
            counter = 0; 
            setTimeout(restart,400);
        }
    }
}


function restart(){
    let no = randomColorNo();
        s = s + no;
        blink(no);
}


function randomColorNo(){
    let number = Math.floor(Math.random()*4);
    return number;
}

function blink(no){
    let originalColor = box[no].getAttribute('data-original-color');
    if (!originalColor) {
        originalColor = window.getComputedStyle(box[no]).backgroundColor;
        box[no].setAttribute('data-original-color', originalColor);
    }

    clearTimeout(box[no].blinkTimeout);

    box[no].style.backgroundColor = "white";

    box[no].blinkTimeout = setTimeout(function(){
        box[no].style.backgroundColor = originalColor;
    }, 200);
}
