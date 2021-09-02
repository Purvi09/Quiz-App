var ques_arr = JSON.parse(localStorage.getItem("quiz"));
correct = -1;

function game() {
  var quesnum =  Math.floor(document.getElementById('quesnum').textContent);

  document.getElementById('ques-title').textContent = ques_arr[quesnum - 1]['ques']

  var opts = document.getElementsByClassName('opt')
  for (var i = 0; i < opts.length; i++) {
    opts[i].textContent = ques_arr[quesnum - 1]['opts'][i];
  }
  correct = ques_arr[quesnum - 1]['correct'];
  document.getElementById('timer').textContent = 10;
}

function timer() {
  if (document.getElementById('check').textContent == "Check") {
    var timeleft =  Math.floor(document.getElementById('timer').textContent);
    timeleft -= 1;
    document.getElementById('timer').textContent = timeleft;
    if (timeleft == 0) {
      if (Math.floor(document.getElementById('quesnum').textContent) == ques_arr.length) {
        document.getElementById('check').textContent = 'End'; //If the question is last
      } else {
        document.getElementById('check').textContent = 'Next';
      }
      document.getElementsByClassName('opt-div')[correct].style.border = "2px solid green";
      document.getElementsByClassName('opt-div')[correct].style.backgroundColor = "lightgreen";
    }
  }
}


// Display play now when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
   document.getElementById('main').style.display = 'None';
   document.getElementById('end').style.display = 'None';
});

// Start the game
document.getElementById('play').addEventListener('click', () => {
  document.getElementById('main').style.display = 'block';
  document.getElementById('playnow').style.display = 'None';
  setInterval(timer, 1000);
  game();
});


document.getElementById('check').addEventListener('click', (e) => {
  options = document.getElementsByClassName('opt-radio');
  var marked = -1;
  // Checking if the correct ans is marked
  if (e.target.textContent == 'Check') {
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        marked = i;
      }
    }
    if (marked == -1) {
      alert("Pls choose one option.");
    }
    else {
      if (Math.floor(document.getElementById('quesnum').textContent) == ques_arr.length) {
        document.getElementById('check').textContent = 'End'; //If the question is last
      } else {
        document.getElementById('check').textContent = 'Next';
      }
      if(marked === correct) {
        var score =  Math.floor(document.getElementById('score').textContent);
        score += 10;
        document.getElementById('score').textContent = score;
        document.getElementsByClassName('opt-div')[correct].style.border = "2px solid green";
        document.getElementsByClassName('opt-div')[correct].style.backgroundColor = "lightgreen";
      }
      else {
        document.getElementsByClassName('opt-div')[correct].style.border = "2px solid green";
        document.getElementsByClassName('opt-div')[correct].style.backgroundColor = "lightgreen";
        document.getElementsByClassName('opt-div')[marked].style.border = "2px solid red";
        document.getElementsByClassName('opt-div')[marked].style.backgroundColor = "rgb(255,127,127)";
      }
    }
  }
  else if (e.target.textContent == 'Next') {
    // Moving to next question
    var quesnum =  Math.floor(document.getElementById('quesnum').textContent);
    quesnum += 1;
    document.getElementById('quesnum').textContent = quesnum;

    optDiv = document.getElementsByClassName('opt-div');
    for (var i = 0; i < 4; i++) {
      options[i].checked = false;
      optDiv[i].style.border = "0px";
      optDiv[i].style.backgroundColor = "white";

    }

    document.getElementById('check').textContent = 'Check';
    game();
  }
  else {
    // Display the score card
    var score =  Math.floor(document.getElementById('score').textContent);
    document.getElementById('main').style.display = 'None';
    document.getElementById('end').style.display = 'block';
    document.getElementById('endscore').textContent = score;
  }

});
