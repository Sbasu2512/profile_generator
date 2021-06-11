const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// rl.question(,(answer)=>{});
rl.question('What is your name? Nicknames are also acceptable :)', (answer) => {
  console.log(`your name is: ${answer}`);
  rl.close();
});

rl.question('What is an activity you like doing? :)', (answer) => {
  console.log(`your answer is: ${answer}`);
  rl.close();
});

rl.question('what do you lilsten to while doing that? ', (answer) =>{
  console.log(`your answer is:${answer}`);
  rl.close();
})

rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)',(answer)=>{
  console.log(`your answer is: ${answer}`);
  rl.close();
})

rl.question('What is your favourite thing to eat for that meal?',(answer)=>{
  console.log(`your answer is ${answer}`);
  rl.close();
})

rl.question('Which sport is your absolute favourite?',(answer)=>{
  console.log(`you answer is: ${answer}`);
  rl.close();
})

rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer)=>{
  console.log(`your answer is: ${answer}`);
  rl.close();
})