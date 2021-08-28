class Question {
  constructor(ques, opts, correct) {
    this.ques = ques;
    this.opts = opts;
    this.correct = correct;
  }
}

document.getElementById('add').addEventListener('submit', (e) => {
  e.preventDefault();
  var ques = document.getElementById('ques').value;
  document.getElementById('ques').value = '';
  var correct = -1;
  let opts_value = [];

  var opts = document.getElementsByClassName('opt');
  var checkbox = document.getElementsByClassName('answer');

  for (var i = 0; i < 4; i++) {
    opts_value[i] = opts[i].value;
    opts[i].value = '';
    if(checkbox[i].checked) {
      correct = i;
    }
  }
  const question = new Question(ques, opts_value, correct);
  console.log(question);
})
