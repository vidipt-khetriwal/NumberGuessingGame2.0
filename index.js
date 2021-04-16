let count = 3;

function check(c_id) 
{
    count-=1;
    let x=c_id;
    if (parseInt(x) === 8)
    {
        document.getElementById(x).style.background = "green";
        document.getElementById(x).style.border = "none";
        document.getElementById("res").textContent = "Bravo! You guessed it right. This page will reload in 5 sec.";
        on();
        setTimeout(function() {
            location.reload();
          }, 5000);
    } 
    else
    {
        document.getElementById(x).style.background = "red";
        document.getElementById(x).style.border = "none";
        document.getElementById("res").textContent =
        "Sorry, wrong answer. Please try again! "+(count)+" chances left!";

    }
    

    if (count === 0) 
    {
        document.getElementById("res").textContent =
        "Your 3 chances are over. The page will be reloaded in 5 sec.";
        setTimeout(function() {
            location.reload();
          }, 5000);
        on();
    }
}
function on() {
    document.getElementById("overlay").style.display = "block";
  }