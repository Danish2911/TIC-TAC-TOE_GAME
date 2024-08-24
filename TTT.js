let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winPatterns=[
    //ALL Winning Possibilities:
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
};
const disableBoxes=()=>{
    for(let box of boxes){
        
        box.disabled=true;
    }
    
};
const enableBoxes=()=>{
    for(let box of boxes){
        
        box.disabled=false;
        box.innerText="";
    }
    
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            //player1
        box.innerText="O";
        turnO=false;
        }
        else{
              //player2
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
         let pos2val=boxes[pattern[1]].innerText;
         let pos3val=boxes[pattern[2]].innerText;
        
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
    
};
newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
