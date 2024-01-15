var scoreList = document.querySelector("#highscores");
var clearButton = document.querySelector("#clear");

var storedD = JSON.parse(localStorage.getItem("Storage")) || [];

scoreList.textContent = JSON.stringify(storedD);

clearButton.addEventListener("click", function(){
    scoreList.textContent = "";
   localStorage.removeItem("Storage");
  })


var displayScores = function(){
    scoreList.textContent = "";
    for (let i = 0; i < storedD.length; i+= 1) {
        var li = document.createElement("li");
        li.textContent = `${storedD[i].storedI} ${storedD[i].storedT}`;
        scoreList.append(li);        
    }
}

displayScores ();

