// Variablar
let word = '';
let dArray = [];
let fails = 0;

// Array av 75 ord
const wordList = {
  easy: [
    'fold',
    'eye',
    'slam',
    'far',
    'fist',
    'chip',
    'rest',
    'brag',
    'show',
    'sex',
    'mind',
    'name',
    'orgy',
    'zone',
    'pie',
    'film',
    'full',
    'lump',
    'halt',
    'bin',
    'bend',
    'my',
    'gown',
    'old',
    'hand'
  ],
  normal: [
    'stroke',
    'relieve',
    'reward',
    'rehearsal',
    'fine',
    'insight',
    'false',
    'trip',
    'quarrel',
    'extreme',
    'archive',
    'dividend',
    'monkey',
    'nursery',
    'review',
    'expose',
    'beef',
    'cream',
    'glide',
    'purpose',
    'counter',
    'policy',
    'statement',
    'strange',
    'gradual',
  ],
  hard: [
    "qualification",
    "extraterrestrial",
    "consideration",
    "inappropriate",
    "enthusiasm",
    "constituency",
    "possibility",
    "ideology",
    "association",
    "environmental",
    "operational",
    "superintendent",
    "examination",
    "hospitality",
    "revolutionary",
    "beneficiary",
    "responsibility",
    "sensitivity",
    "investigation",
    "representative",
    "multimedia",
    "intermediate",
    "administration",
    "discrimination",
    "vegetarian",
  ]
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  wordCheck(line);
})

// Vad svårighets graden är
const difficulties = ["easy", "normal", "hard"];
  const choose = difficulties[random(3)];
  word = wordList[choose][random(random(wordList[choose].length))];
  dArray = Array(word.length);
  fails = 0;

  // Funktion till random orden
  function random(max) {
    return Math.floor(Math.random() * (max));
  }

function difficulty() {
  console.log('You have 3 difficulties to chose from; "easy", "normal" or "hard".' );

  console.log('Difficulty is ' + choose + '\n' + dArray.join ('_ ') + '_');
  rl.prompt();  
}

// Om orden finns
function wordCheck(letter) {
  let failed;
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter) {
      dArray[i] = word[i];
      sap = true;
    } else if (dArray[i] === undefined) {
      dArray[i] = '_';
    }
  }

  failed ? failed = false : fails++;
  

  // Om man har förlorat
  if (fails === 6) {
    console.log(fails);
    console.log('Game over, you are hanged',
    
    ` 
    +===++
    |   ||              mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
   😵   ||            I, QUEEN MARGARETH, AM VICTORIUS!
   /T\\  ||       👸/    wwwwwwwwwwwwwwwwwwwwwwwwwwwwww
   / \\  ||       /T
        ||       / \\
  ======================` 

    );
    console.log('Word is ', word);
    difficulty();
    return;
  } else {
    console.log(fails);
  }
  // Om man har vunnit
  dArray.includes('_') ? rl.prompt() : console.log('You won! I am surprised!',
  ` 
    +===++
    |   ||              
        ||            
   \\😁/ ||           
     T  ||       
    / \\ ||       
  ==========` );
  console.log(dArray.join(' '));
}

// Om man lämnar utan att spela
rl.on('close', function()
{
  console.log('Goodbye! ... <|> ... <|> ... <|> ... loser :( ')
  process.exit(1);
});

difficulty();