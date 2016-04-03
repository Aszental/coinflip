var headWin = 0
var tailWin = 0
var coin = document.getElementById('coin')
var headsCounter = document.getElementById('headsCounter')
var tailsCounter = document.getElementById('tailsCounter')



coin.addEventListener('click', coinFlip)

function coinFlip(){
  var rand = Math.floor(Math.random()*2);
  if (rand === 1) {
    console.log("Heads");
    headWin++;
    headsCounter.innerHTML="Heads Has Won: " + headWin
    winChecker();
  }
  else {
    console.log("tails")
    tailWin++;
    tailsCounter.innerHTML="Tails Has Won: " + tailWin 
    winChecker();
  }

}

function winChecker() {
  if (headWin === 5) {
    console.log("Heads is the winner!")
  }
  else if (tailWin === 5) {
    console.log("Tails is the winner!")
  }
}
