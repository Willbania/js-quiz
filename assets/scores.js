var highScore = JSON.parse(localStorage.getItem("count"));
function highScores() {

    document.getElementById("test").innerHTML = highScore;
  
  
    
  }


  highScores()