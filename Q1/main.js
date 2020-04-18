// JavaScript Document

let main = document.querySelector('main');//changing to querySelector
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body'); //documant
let input = document.querySelector('input[type="text"]');//input was not set

submitButton.addEventListener('click', function(e) { // clickityclick to click
    e.preventDefault(); // stops refreshing
  let personName = input.value;
  let para = document.createElement('p');
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>';
  main.appendChild(para);//changed para to paragraph
  body.setAttribute('class', 'meow');
  console.log('=^..^=');
});
