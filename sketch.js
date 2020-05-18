var lines, markovPlanes, markovElven, markovA, markovE, markovI, markovO, markovU, button, textCongrats, textElem;
let planes = ['XFL-1', 'P-39', 'P-59', 'A-36', 'C-61', 'XP-55', 'TBF', 'TBM', 'A-30', 'XP-67', 'F8F', 'A-34', 'SB2A', 'XP-56', 'P-61', 'F2T', 'AT-8', 'UC-78', 'B-18', 'DB-7', 'A-20', 'A-34', 'SB2A', 'F2A', 'C-76', 'OA-10', 'XP-58', 'SB2U', 'C-46', 'C-69', 'PT-26', 'PB2Y', 'F4U', 'F3A', 'FG-1', 'AT-17', 'AT-15', 'L-4', 'C-47', 'A-24', 'SNC-1', 'SB2D', 'B-18', 'B-32', 'B-23', 'P-75', 'JR2S', 'C-45', 'AT-9', 'B-17', 'XP-79B', 'B-17', 'C-61', 'F6F', 'L-3', 'AT-12', 'AT-14', 'A-20', 'P-36', 'F6F', 'A-26', 'A-36', 'AT-9', 'C-87', 'B-26', 'F4F-3', 'XA-22', 'B-25', 'P-36', 'P-51', 'AT-7', 'P-70', 'PT-22', 'P-44', 'A-25', 'XF5U-1', 'C-54', 'R5D', 'XF5F-1', 'C-47', 'C-53', 'BT-12', 'B-29', 'XP-54', 'P-47', 'F7F', 'AT-10'];
let elven = ['ar', 'atamar', 'deshu', 'drii', 'irasku', 'ent', 'tarine', 'hithar', 'elandi', 'shaalth', 'esk', 'bag', 'enyor', 'lani', 'kesha', 'lothos', 'saaden', 'ausa', 'ary', 'cerlyn', 'ilphu', 'thablu', 'athel', 'kathan', 'kulaa', 'nai', 'bre', 'kukisha', 'sain', 'leha', 'sanerek', 'surinya', 'beneral', 'surnar', 'tenya', 'arranaseer', 'reloseer', 'quar', 'daquim', 'nevae', 'nevaedarn', 'noresh', 'azrsurinya', 'karask', 'holi', 'mion', 'mor', 'hakarmaskannar', 'erkatam', 'erek', 'kesir', 'hakar', 'vaarn', 'noarun', 'ennamar', 'maskan', 'sekkar', 'ama', 'klatha', 'nesh', 'ravan', 'revanthas', 'lia', 'kiir', 'yewl', 'sharatam', 'shan', 'scient', 'thar', 'chas', 'sherekir', 'faenya', 'meli', 'enial', 'heriryar', 'bhen', 'aul', 'scennal', 'mault', 'cor', 'anharad', 'ivae', 'staleen', 'lerret', 'rell', 'klathmor', 'mithral', 'nodel', 'silath', 'lahr', 'tham', 'lo', 'neh', 'nars', 'amne', 'arta', 'enna', 'quin', 'hakavarn', 'adon', 'xilo', 'alushtas', 'harsan', 'revar', 'jharran', 'lersaat', 'don', 'sarash', 'kekual', 'desha', 'hinue', 'quarlani', 'hinual', 'stacia', 'maskaula', 'diir', 'neshanas', 'kessuk', 'kerym', 'teshuel', 'leshere', 'eshaal', 'nae', 'morenial', 'belath', 'sehan', 'lath', 'avae', 'biir', 'mormhaor', 'ernath', 'keryth', 'alus', 'quen', 'kerymeth', 'gala', 'ivae', 'asa', 'faer', 'rilis', 'ashanela', 'thuen', 'avavaen', 'aelth', 'nehel']
let algebraic = ['X', '=', '≠', '≡', '≜', ':=', '~', '≈', '∝', '∞', '≪', '≫', '( )', '[ ]', '{ }', '⌊X⌋', '⌈X⌉', 'X!', '| X', 'F', '(X)', '∘', 'f∘g', '(a,b)', '[a,b]', '∆', '∆', '∑', '∑∑', '∏', 'E', 'γ', 'φ', 'π'];
 let a = ['ä', 'ae', 'ai','au'];
 let e = ['ei','ê','ɛ'];
 let i = ['j','í','î'];
 let o = ['ö','ô','oe','œ'];
 let u = ['ui','û','ʊ'];

function setup() {

    createCanvas(innerWidth,innerHeight);
    myFont = loadFont('Comfortaa-VariableFont_wght.ttf')
    textSize(72);
    textAlign(CENTER);

    textElem = document.getElementById('copy-text');
    textCongrats = document.getElementById('congrats');

  x = width/2;
  y = height/4;

  button = createButton('Generate');
  button.size(100,50);
  button.mouseClicked(drawText);
  button.touchStarted(drawText);
  

    // create markov models
   markovElven = new RiMarkov(2);
   markovPlanes = new RiMarkov(4);
   markovA = new RiMarkov(2);
   markovE = new RiMarkov(1);
   markovI = new RiMarkov(1);
   markovO = new RiMarkov(2);
   markovU = new RiMarkov(1);

   // load text into the models
   markovElven.loadTokens(elven);
   markovPlanes.loadTokens(planes);
   loadTolkiens(markovA, a);
   loadTolkiens(markovE, e);
   loadTolkiens(markovI, i);
   loadTolkiens(markovO, o);
   loadTolkiens(markovU, u);
   console
}

function draw() {
  button.position(innerWidth/2-60,height/2);
}

function drawText() {
  print('trig')
  //limit length of elven string
  var elvenSlice;
  var elven2 =  markovElven.generateTokens(1);
  if (elven2[0].length>2) {
  	elvenSlice = elven2[0].slice(0,2).toString();
    //replace vowels with more accurate elven vowels
    elvenSlice = elvenSlice.replace('u', generateTolkiens(markovU, 1));
    elvenSlice = elvenSlice.replace('a', generateTolkiens(markovA, 1));
    elvenSlice = elvenSlice.replace('e', generateTolkiens(markovE, 1));
    elvenSlice = elvenSlice.replace('i',generateTolkiens(markovI, 1));
    elvenSlice = elvenSlice.replace('o',generateTolkiens(markovO, 1));
}
 textCongrats.innerHTML = "Congratulations it's a:";
  //combine markov chains into response
 var alg = algebraic[int(random(35))];
 if(alg && elvenSlice) {
    
    textElem.innerHTML = alg + " " + elvenSlice + " " + markovPlanes.generateTokens(1).toString();
 }
}

// function copyText(){
//    await clipboardData.setData('text/plain', textCopy);
// }

function loadTolkiens(markov,token){
 markov.loadTokens(token);
}

function generateTolkiens(markov, length){
 if (markov) return markov.generateTokens(length);
}