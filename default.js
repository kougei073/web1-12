var answer = parseInt(window.prompt('Fizz-Buss問題　数字を入力してください'));

for(var i = 1; i <= answer; i++){
var li = document.createElement('li');
 if(answer < 100　|| answer < 0){
  li.textContent = 'error';
  break;
 }else if(i % 3 === 0 && i % 5 === 0){
 li.textContent = 'FizzBuzz';
 }else if(i % 3 === 0){
 li.textContent = 'Fizz';
 }else if(i % 5 === 0){
 li.textContent = 'Buzz';
 }else{
   li.textContent = i;
 }
  document.getElementById('list').appendChild(li);
}
