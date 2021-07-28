var randomnum1=Math.floor(Math.random()*6)+1;
var randomsrc1="images/dice"+randomnum1+".png";
var selectedimg1=document.querySelectorAll("img")[0];
selectedimg1.setAttribute("src",randomsrc1);
var randomnum2=Math.floor(Math.random()*6)+1;
var randomsrc2="images/dice"+randomnum2+".png";
var selectedimg2=document.querySelectorAll("img")[1];
selectedimg2.setAttribute("src",randomsrc2);

if(randomnum1>randomnum2)
{
    document.querySelector("h1").innerHTML="🏁 Player 1 Wins!!"
}
else if(randomnum2>randomnum1)
{
    document.querySelector("h1").innerHTML="🏁 Player 2 Wins!!"
}
else
{
    document.querySelector("h1").innerHTML="Draw! 🤔  Mmm"
}