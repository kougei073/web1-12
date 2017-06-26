var answer = parseInt(window.prompt('Fizz-Buss問題　数字を入力してください'));

for(var i=0; i <= answer; i++){
var li = document.createElement('li');
  li.textContent = i;
  document.getElementById('list').appendChild(li);
}
