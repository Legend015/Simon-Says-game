let s = "";
let box = document.querySelectorAll(".box");
let count = 0;
let body = document.querySelector("body");
let p = document.querySelector("p");
let inst = document.querySelector(".instruction");

document.addEventListener("dblclick", function(){
    body.style.backgroundColor = "greenyellow";
    body.style.color = "black";
    p.innerText = "Level :: 0.";
    inst.innerText ="Follow the pattern , click as per that..!";
    if(s.length == 0 ){
        setTimeout(restart,400);
        count++;
    }
})

// for(let i=0; i<s.length ;i++)
// {
//     box[0].addEventListener("click",function(){
//         blink(0);
//         check(0);
//     })
//     box[1].addEventListener("click",function(){
//         blink(1);
//         check(1);
//     })
//     box[2].addEventListener("click",function(){
//         blink(2);
//         check(2);
//     })
//     box[3].addEventListener("click",function(){
//         blink(3);
//         check(3);
//     })
//     function check(n){
//         n=n+'0';
//         if(n != s[i]){
//             let p = document.querySelector("p");
//             p.innerText = "oops you are out..!";
//             i==s.length;
//             s="";
//             count=0;
//         }
//     }
// }
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
        inst.innerText ="Double click on screen to start the game";
        body.style.backgroundColor = "red";
        body.style.color = "white";
        s = "";
        counter = 0; // Reset counter
    } else {
        counter++; // Increment counter if correct
        if (counter === s.length) {
            p.innerText = `currently at level ${counter}`;
            //s = ""; // Reset sequence
            highscore =counter;
            counter = 0; // Reset counter
           // restart();
            setTimeout(restart,400);
        }
    }
}


function restart(){
    // for(let x of s){
    //     blink(x);
    // }
    let no = randomColorNo();
        s = s + no;
        blink(no);
}


function randomColorNo(){
    let number = Math.floor(Math.random()*4);
    return number;
}

// function blink(no){
//     box[no].style.backgroundColor = "white";
    
//     setTimeout(function(){
//         switch(no){
//             case 0: box[no].style.backgroundColor = rgb(208, 42, 42);
//                     break;
//             case 1: box[no].style.backgroundColor = rgb(52, 214, 190);
//                     break;
//             case 2: box[no].style.backgroundColor = rgb(72, 91, 214);
//                     break;
//             case 3: box[no].style.backgroundColor = rgb(255, 186, 8);
//                     break;
//         }
//     }, 1); // 1000 milliseconds = 1 second
// }


function blink(no){
    let originalColor = box[no].getAttribute('data-original-color');
    if (!originalColor) {
        originalColor = window.getComputedStyle(box[no]).backgroundColor;
        box[no].setAttribute('data-original-color', originalColor);
    }

    // Clear any previous timeout to avoid overlapping
    clearTimeout(box[no].blinkTimeout);

    box[no].style.backgroundColor = "white";

    // Revert to the original color after 1 second
    box[no].blinkTimeout = setTimeout(function(){
        box[no].style.backgroundColor = originalColor;
    }, 200); // 1000 milliseconds = 1 second
}
