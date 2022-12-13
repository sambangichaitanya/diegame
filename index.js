var rd1 = Math.floor(Math.random()*6)+1;
document.querySelectorAll('img')[0].setAttribute("src","dice"+rd1+".png");
var rd2 = Math.floor(Math.random()*6)+1;
document.querySelectorAll('img')[1].setAttribute("src","dice"+rd2+".png");
if(rd1>rd2)
{
    document.querySelector('h1').innerHTML = "player1 wins!";
}
else if(rd1<rd2)
{
    document.querySelector('h1').innerHTML = "player2 wins!";
}
else
{
    document.querySelector('h1').innerHTML = "Match tied!";
}