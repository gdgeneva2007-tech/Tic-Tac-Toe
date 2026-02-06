const PlayerFactory=function (name,symbol){
    return {name,symbol};
};
const Gameboard=(function(){
    let arr=[['m','m','m'],['m','m','m'],['m','m','m']];
    function arrAdd(row,col,symbol){

        if(arr[row][col]=='m'){
            arr[row][col]=symbol;
        }
        else{
            console.log('ERROR!');
            return;
        }        
        return arr;
    }
    return {arrAdd};
})();
const player1=PlayerFactory('Alice','X');
const player2=PlayerFactory('Bob','O');
const GameController=(function(){
    let round=1;
    let player;
    let isOver=false;
    function inputWhere(row,col){
        if(isOver){
            console.log('The game is over. No more move allowed.');
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
                return 'Winner is Alice!';
            }
            else if((arr[0][0]=='O'&&arr[0][1]=='O'&&arr[0][2]=='O')||(arr[1][0]=='O'&&arr[1][1]=='O'&&arr[1][2]=='O')||(arr[2][0]=='O'&&arr[2][1]=='O'&&arr[2][2]=='O')){
                isOver=true;
                return 'Winner is Bob!';
            }
            else if((arr[0][0]=='X'&&arr[1][0]=='X'&&arr[2][0]=='X')||(arr[0][1]=='X'&&arr[1][1]=='X'&&arr[2][1]=='X')||(arr[0][2]=='X'&&arr[1][2]=='X'&&arr[2][2]=='X')){
                isOver=true;
                return 'Winner is Alice!';
            }
            else if((arr[0][0]=='O'&&arr[1][0]=='O'&&arr[2][0]=='O')||(arr[0][1]=='O'&&arr[1][1]=='O'&&arr[2][1]=='O')||(arr[0][2]=='O'&&arr[1][2]=='O'&&arr[2][2]=='O')){
                isOver=true;
                return 'Winner is Bob!';
            }
            else if((arr[0][0]=='X'&&arr[1][1]=='X'&&arr[2][2]=='X')||(arr[0][2]=='X'&&arr[1][1]=='X'&&arr[2][0]=='X')){
                isOver=true;
                return 'Winner is Alice!';
            }
            else if((arr[0][0]=='O'&&arr[1][1]=='O'&&arr[2][2]=='O')||(arr[0][2]=='O'&&arr[1][1]=='O'&&arr[2][0]=='O')){
                isOver=true;
                return 'Winner is Bob!';
            }
            
        }
        if(checkWinner(arrnew)){
            console.log(checkWinner(arrnew));
        }
        
        round++;
    }
    return {inputWhere};
})();
