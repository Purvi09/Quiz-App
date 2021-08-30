class Question {
  constructor(ques, opts, correct) {
    this.ques = ques;
    this.opts = opts;
    this.correct = correct;
  }
}

var ques_arr = JSON.parse(localStorage.getItem("quiz"));

// Display play now when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
   document.getElementById('main').style.display = 'None';
});

document.getElementById('play').addEventListener('click', () => {
  document.getElementById('main').style.display = 'block';
  document.getElementById('playnow').style.display = 'None';
  game();
});

function game() {
  // var timeleft =  Math.floor(document.getElementById('timer').textContent);
  // timeleft -= 1;
  // document.getElementById('timer').textContent = timeleft;

  var quesnum =  Math.floor(document.getElementById('quesnum').textContent);

  document.getElementById('ques-title').textContent = ques_arr[quesnum - 1]['ques']

  var opts = document.getElementsByClassName('opt')
  for (var i = 0; i < opts.length; i++) {
    opts[i].textContent = ques_arr[quesnum - 1]['opts'][i];
  }
}
