const PlayerFactory=function (name,symbol){
    return {name,symbol};
};
const Gameboard=(function(){
    let arr=[['m','m','m'],['m','m','m'],['m','m','m']];
    function arrAdd(row,col,symbol){

        if(arr[row][col]!='O'&&arr[row][col]!='X'){
            arr[row][col]=symbol;
        }
        else{
            alert('ERROR!');
            return;
        }        
        return arr;
    }
    return {arrAdd};
})();

const GameController=(function(){
    let round=1;
    let player;
    let isOver=false;
    
    
    function inputWhere(row,col){
        if(isOver){
            alert('The game is over. No more move allowed.');
            return;
        }
        if(round%2!=0){
            player=player1;
        }
        else{
            player=player2;
        }        
        let arrnew=Gameboard.arrAdd(row,col,player.symbol);
        if(!arrnew){
            return;
        }
        console.log(arrnew);
        function checkWinner(arr){
            if((arr[0][0]=='X'&&arr[0][1]=='X'&&arr[0][2]=='X')||(arr[1][0]=='X'&&arr[1][1]=='X'&&arr[1][2]=='X')||(arr[2][0]=='X'&&arr[2][1]=='X'&&arr[2][2]=='X')){
                isOver=true;
                return 'Winner is '+player1.name+'!';
            }
            else if((arr[0][0]=='O'&&arr[0][1]=='O'&&arr[0][2]=='O')||(arr[1][0]=='O'&&arr[1][1]=='O'&&arr[1][2]=='O')||(arr[2][0]=='O'&&arr[2][1]=='O'&&arr[2][2]=='O')){
                isOver=true;
                return 'Winner is '+player2.name+'!';
            }
            else if((arr[0][0]=='X'&&arr[1][0]=='X'&&arr[2][0]=='X')||(arr[0][1]=='X'&&arr[1][1]=='X'&&arr[2][1]=='X')||(arr[0][2]=='X'&&arr[1][2]=='X'&&arr[2][2]=='X')){
                isOver=true;
                return 'Winner is '+player1.name+'!';
            }
            else if((arr[0][0]=='O'&&arr[1][0]=='O'&&arr[2][0]=='O')||(arr[0][1]=='O'&&arr[1][1]=='O'&&arr[2][1]=='O')||(arr[0][2]=='O'&&arr[1][2]=='O'&&arr[2][2]=='O')){
                isOver=true;
                return 'Winner is '+player2.name+'!';
            }
            else if((arr[0][0]=='X'&&arr[1][1]=='X'&&arr[2][2]=='X')||(arr[0][2]=='X'&&arr[1][1]=='X'&&arr[2][0]=='X')){
                isOver=true;
                return 'Winner is '+player1.name+'!';
            }
            else if((arr[0][0]=='O'&&arr[1][1]=='O'&&arr[2][2]=='O')||(arr[0][2]=='O'&&arr[1][1]=='O'&&arr[2][0]=='O')){
                isOver=true;
                return 'Winner is '+player2.name+'!';
            }
            
        }
        function checkFull(arr){
            for(let i=0;i<=2;i++){
                for(let j=0;j<=2;j++){
                    if(arr[i][j]!='O'&&arr[i][j]!='X'){
                        return 0;//0:not full; 1:full
                    }
                }
                
            }
            return 1;
        }
        if(checkWinner(arrnew)){
            alert(checkWinner(arrnew));
        }
        else if(checkFull(arrnew)){
            alert('It is a tie!');
            isOver=true;
            return;
        }
        
        round++;
        return player.symbol;
    }
    
    return {inputWhere};
})();
const playerInfo1=document.querySelector('#player1');
const playerInfo2=document.querySelector('#player2');
const buttons=document.querySelector('.button');
buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(!checkFirst()){
            return;
        }
        let inputWhere=GameController.inputWhere(e.target.dataset.row,e.target.dataset.col);
        if(!inputWhere){
            return;
        }    
        e.target.textContent=inputWhere;
    })
})
let player1={},player2={};
playerInfo1.addEventListener('click',()=>{
    let info1;
    do{
        info1=prompt('Please enter your name:','Alice');
    }while(!info1);
    playerInfo1.textContent=info1+' X';
    
    player1=PlayerFactory(info1,'X');
    
    
});
playerInfo2.addEventListener('click',()=>{
    let info2;
    do{
        info2=prompt('Please enter your name:','Bob');
    }while(!info2);
    playerInfo2.textContent=info2+' O';
    player2=PlayerFactory(info2,'O');
})

const container=document.querySelector('#container');

function checkFirst(){
    
    if((!player1.name)||(!player2.name)){
        alert('Enter the name first!');
        return;
    }
    
    return 1;
}