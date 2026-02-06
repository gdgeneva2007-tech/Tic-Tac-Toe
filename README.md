# Tic-Tac-Toe
1.Factory:
use factory when you want to make many similar things
eg:
const PlayerFactory(name,symbol){
    return {name,symbol};
}
const player1=PlayerFactory('Alice','X');
console.log(player1.name);  //Alice


2.Closure:(Module)
use closure when you wan to hide something and only return a few functions or variables.
use closure when you need a static variable (put the variable in the closure)
eg:
const GameBoard(function(){
    let arr=.....;
    function arrAdd(){
        .......
    }
    return {arrAdd};   //Don't forget the '{}'
})();

3.forEach:
write code for every similar element instead of editing them one by one
eg:
HTML:
    <button class="button" data-row="0" data-col="0"></button>
    <button class="button" data-row="0" data-col="1"></button>
    <button class="button" data-row="0" data-col="2"></button>
    <button class="button" data-row="1" data-col="0"></button>
    <button class="button" data-row="1" data-col="1"></button>
    <button class="button" data-row="1" data-col="2"></button>
    <button class="button" data-row="2" data-col="0"></button>
    <button class="button" data-row="2" data-col="1"></button>
    <button class="button" data-row="2" data-col="2"></button>
    You can use data-somename="..." to make the element unique
JS:
const buttons=document.querySelector('.button');
buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e.target.dataset.row); //eg:0
        console.log(e.target.dataset.col); //eg:1
    })
});

You can use 'e.target' && 'dataset.somename' to get which button you are clicking.