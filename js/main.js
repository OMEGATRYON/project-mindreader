let headingText = document.getElementById('hdnText');
let nextButton = document.getElementById('nextButton');
let proceed = document.getElementById('prd');
let goButton = document.getElementById('goBtn');
let returnButton = document.getElementById('returnButton');
let page = 0;

goButton.addEventListener("click", nextPage);
revealButton.addEventListener("click", nextPage);
nextButton.addEventListener("click", nextPage);




function nextPage() {
    page++;
    state();
}

function resetPage() {
    page = 0;
    state();
}


function show(object) {
    object.style.visibility = 'visible';
}

function hide(object) {
    object.style.visibility = 'hidden';
}

function state() {
//switch statement is the only thing that really made sense to me
    switch (page) {
        case 0:
            hdnText.innerHTML = "I can read your mind!";
            hide(nextButton);
            show(goBtn);
            hide(returnButton);
            hide(prd)
            //add a break???????????????????????????????????????????
        case 1:
            hdnText.innerHTML = "Pick a number from 01 - 99";
            show(nextButton);
            hide(goBtn);
            show(returnButton);
            hide(prd);

        case 2:
            hdnText.innerHTML = "Add both digits together to get a new number";
            show(nextButton);
            hide(revealButton);
            show(prd);
            hide(goBtn);

        case 3:let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(']
        let arr = []
        for (let i = 0; i < 100; i++) {
            arr.push(i + " - " + symbols[i % 9] + '<br/>');
        }
        
            hdnText.innerHTML = "Subtract your new number from the original number";
            show(nextButton);
            hide(revealButton);
            show(prd);
            hide(goBtn);
            show(returnButton);

        case 4:
            //dont forget to move arr at bottom to top
            hdnText.innerHTML = arr;
            show(revealButton);
            hide(nextButton);
            subText.innerHTML = "Find your new number";
            show(prd);
            hide(goBtn);
            show(returnButton);

        case 5:
            hdnText.innerHTML = "&";
            hide(revealButton);
            hide(nextButton);
            proceed.innerHTML = "&";
            show(prd);
            hide(goBtn);
            show(returnButton);
    }
}

function init() {
    resetPage();
    state();

}

let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(']
let arr = []
for (let i = 0; i < 100; i++) {
    arr.push(i + " - " + symbols[i % 9] + '<br/>');
}
