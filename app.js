let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll( ".choice" );
const msg = document.querySelector("#msg");
const userscorepara=document.querySelector( "#user-score" ) ; 
const compscorepara=document.querySelector( "#comp-score" ); 

const gencompchoice=(choices)=>{
    //rock paper scissor
    const options = ["rock", "paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]

}
const drawgame = ()=>{
    console.log("game is draw");
    msg.innerText="Ohh! Its a Draw!!/Play Again";
    msg.style.backgroundColor="#081b31";


}

const showwinner=(userwin, userchoice, compchoice)=>{
    if(userwin== true){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win!");
        msg.innerText="You Win!";
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText=`You Loose! ${compchoice} beats Your ${userchoice}`;

        msg.style.backgroundColor="red";


    }
}

const playgame =(userchoice)=>{
    console.log("user choice =",userchoice);
    //genrate computer choice
    const compchoice = gencompchoice();
    console.log("comp choice = ",compchoice);

    if(userchoice == compchoice){
        //draw
        drawgame();
    }else{
        let userwin = true;
        if(userchoice == "rock"){
           userwin = compchoice == "paper" ? false : true;

        } else if(userchoice=="paper") {
           userwin =  compchoice == "scissor" ? false : true;
        }
        else{
            userwin = compchoice =="rock" ? false: true
        }

        showwinner(userwin, userchoice, compchoice);
    }



};




choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});