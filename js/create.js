class Question {
    constructor(ques, opts, correct) {
      this.ques = ques;
      this.opts = opts;
      this.correct = correct;
    }
  }

  let ques_arr = []; // array in which the quiz will be stored

  // event listerner for add question button
  document.getElementById('add').addEventListener('submit', (e) => {
    e.preventDefault();
    var ques = document.getElementById('ques').value;
    var correct = -1;
    let opts_value = [];

    var opts = document.getElementsByClassName('opt');
    var checkbox = document.getElementsByClassName('answer');

    for (var i = 0; i < 4; i++) {
      opts_value[i] = opts[i].value;
      if(checkbox[i].checked) {
        correct = i;
        checkbox[i].checked = false;
      }
    }
    if(correct === -1) {
        alert("Choose the option which is correct by marking the checkbox besides it.");
    }
    else {
        const question = new Question(ques, opts_value, correct);
        ques_arr.push(question);
        document.getElementById('numQ').textContent = ques_arr.length;
        for (var i = 0; i < 4; i++) {
          opts[i].value = '';
        }
        document.getElementById('ques').value = '';
    }

    // console.log(question);
  })

  // event listerner for adding the quiz to local storage
  document.getElementById('SubmitB').addEventListener('click', (e) => {
    e.preventDefault();
    if (ques_arr.length == 0) {
      alert("Add atleast one question!!");
    }
    else {
      localStorage.setItem("quiz", JSON.stringify(ques_arr));
      document.getElementById('numQ').textContent = 0;
      window.location.replace("quiz.html");
    }

  })
