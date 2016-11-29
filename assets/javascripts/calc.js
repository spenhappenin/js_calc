var numbers = ""

var calcButtons = document.getElementsByClassName('calc-button')
  for(var i = 0; i < calcButtons.length; i++) {
    var calcButton = calcButtons[i];
    calcButton.addEventListener('click', function(){
      numbers += this.innerText;
      putNumber(numbers);
  });
}

// printing on the screen
var screen = document.getElementById('screen');
function putNumber(number) {
  screen.innerHTML = number;
  console.log(number);
    console.log(number.innerText);
    number.innerText = calcButtons;
}

// getting result
var equalButton = document.getElementById('equal-button');

equalButton.addEventListener('click', function(){
  numbers = eval(numbers);
  putNumber(numbers);
  if(screen.innerHTML === 'Infinity' || screen.innerHTML === 'NaN') {
    putNumber('error');
    numbers = ""
  }
});

// specific buttons
var acButton = document.getElementById('clear-button');

acButton.addEventListener('click', function(){
  numbers = ""
  putNumber(0);
});

var percentageButton = document.getElementById('percentage-button');
percentageButton.addEventListener('click', function(){
  putNumber(numbers / 100);
  numbers = numbers / 100
});

var plusminusButton = document.getElementById('plusminus-button');
plusminusButton.addEventListener('click', function(){
  putNumber(-numbers);
  numbers = -numbers
});





