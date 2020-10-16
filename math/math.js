const readline = require('readline');

let num = Math.round(Math.random() * 10) + 1;
console.log(num);
let attempt = 5;

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

rl.on('line', (input) =>
{
  let ans = parseInt(input);

if (ans > num){
    console.log('Gissa lite lägre!');
  }
else if (ans < num){
      console.log("Gissa lite högre!");
  }

else if (ans === num){
    console.log('Du har rätt!');
    process.exit();
  }

  attempt--;
if (attempt == 0){
    console.log('Försök igen kompis!');
    process.exit();
  }

  rl.prompt();
});

rl.on('close', function()
{
  console.log('varför?')
  process.exit(1);
});