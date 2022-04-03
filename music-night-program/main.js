var startBtn = document.getElementById('start')
var stopBtn = document.getElementById('stop')
var start2 = document.getElementById('start2')
num = 1;

document.getElementById('reset').addEventListener('click' ,function(){
location.reload()
})

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = new AudioContext();
var nextNotetime = audioContext.currentTime;

function repeat() {

    if(num<88) {
    var timeOut = setTimeout(()=>{
        sound((notes[num]), time[num])
        moveBars(notes[num])
        moveWords(num)
            num = num+1  
            repeat()
            },time[num-1])
    }
}
function sound(frequency, time) {
    var oscillator = audioContext.createOscillator();
    var g = audioContext.createGain()
    oscillator.connect(g)
    oscillator.type = 'sine'
    oscillator.frequency.value = frequency;
    g.connect(audioContext.destination);
    oscillator.start()
    
    var timeout = setTimeout(()=>{
        g.gain.setTargetAtTime(0, audioContext.currentTime, 0.003);
    },time)
    
  };

  startBtn.addEventListener('click', function() {
    repeat();
//    var time = setTimeout(()=>{//BACKGROUND
//     background()
// },2000)
  }, false)


  function moveBars(baseFreq){
    document.getElementById('freq').innerHTML = baseFreq + 'Hz'

    for (i=1; i<30; i++){
        barRef= ('bar'+i)

if(baseFreq==0){
    document.getElementById(barRef).style.height = (200 + 'px')
    document.getElementById(barRef).style.transform = ('translateY(' + -200 + 'px)')
}else{
    document.getElementById(barRef).style.height = ((baseFreq*multipliers[i])+ 'px') //----
    document.getElementById(barRef).style.transform = ('translateY(' + -1*(baseFreq*multipliers[i])+ 'px)' )
}}
}


var multipliers = {
    1: 0.2,
    2: 0.4,
    3: 0.6,
    4: 0.8,
    5: 1,
    6: 0.8,
    7: 0.6,
    8: 0.4,
    9: 0.2,
    10: 0.1,
    11: 0.2,
    12: 0.4,
    13: 0.6,
    14: 0.8,
    15: 1,
    16: 0.8,
    17: 0.6,
    18: 0.4,
    19: 0.2,
    20: 0.1,

    21: 0.2,
    22: 0.4,
    23: 0.6,
    24: 0.8,

    25: 1,
    26: 0.8,
    27: 0.6,
    28: 0.4,
    29: 0.2,
}

var pause = 0;
// var c4 = 277.18;
// var d4 = 293.66;
// var e4 = 329.63;
// var f4 = 369.99;
// var g4 = 392.00;
// var a4 = 440.00;
// var a4s = 466.16;
// var b4 = 493.88;
// var c5 = 554.37;
// var d5 = 587.33;
// var e5 = 659.25;
// var f5 = 739.99;
// var g5 = 783.99;
// var a5 = 880;
// var a5s = 932.33;
// var b5 = 887.77;
// var c6 = 1108.73;

var c4 = 138.6; //sharp
var d4 = 146.8;
var e4 = 164.8;
var f4 = 185.0; //shap
var g4 = 196.0;
var a4 = 220.0;
var a4s = 233.1;
var b4 = 246.9;
var c5 = 277.2; //shsrp
var d5 = 293.7;
var e5 = 329.6;
var f5 = 369.99; //sharp
var g5 = 392.0;
var a5 = 440;
var a5s = 466.2;
var b5 = 493.9;
var c6 = 554.4; //sharp

var wn = 1558.44156;
var dwn = wn*1.5;
var hn = wn/2;
var dhn = hn*1.5
var qn = wn/4;
var dqn = qn*1.5;
var en = wn/8;
var den = en*8.5;
var sn = wn/16;
var dsn = sn*1.5;








var notes = {
    1: b5,
    2: pause,
    3: pause,
    4: a5s,
    5: pause,
    6: f4,
    7: d5,  
    8: d5,
    9: d5,
    10:d5,
    11: b4,
    12: b4,
    13: b4,
    14: d5,
    15: d5, 
    16: d5,
    17: d5,
    18: b4,
    19: b4,
    20: c5,
    21: c5,
    22: c5,
    23: c5,
    24: a4s,
    25: a4s,
    26: a4s,
    27: c5,
    28: c5,
    29: c5,
    30: c5,//30
    31: a4s,
    32: b4,
    33: d5,
    34: d5,
    35: d5,
    36: d5,
    37: b4,
    38: b4,
    39: d5,
    40: d5,
    41: d5,
    42: d5,
    43: b4,
    44: b4,
    45: b4,
    46: c5,
    47: c5,
    48: c5,
    49: c5,
    50: a4s,
    51: a4s,
    52: a4s,
    53: c5,
    54: c5,
    55: c5,
    56: c5,
    57: a4s,
    58: a5s,
    59: b5,
    60: a5,
    61: g5,
    62: e5,//60
    63: f5,
    64: e5,
    65: b5,
    66: b5,
    67: a5,
    68: g5,
    69: e5,
    70: f5,
    71: a5s,
    72: b5,
    73: pause,
    74: e5,
    75: f5,
    76: e5,
    77: d5,
    78: b4,
    79: pause,
    80: e5,
    81: d5,
    82: e5,
    83: d5,
    84: e5,
    85: d5,
    86: e5,
    87: d5,
}


var time = {
    1: hn,
    2: hn,
    3: wn,
    4: hn,
    5: dhn,
    6: qn,//start of x2
    7: qn,
    8: en,
    9: en,
    10: (hn),
    11: en,
    12: en,
    13: qn,
    14: qn,
    15: en,
    16: en,
    17: hn,
    18: en,
    19: en,//end of x2
    20: qn,
    21: qn,
    22: en,
    23: en,
    24: hn,
    25: en,
    26: en,
    27: qn,
    28: qn,
    29: en,
    30: en, //30
    31: hn,
    32: qn,
    33: qn,
    34: qn,
    35: en,
    36: en,
    37: hn,
    38: qn,
    39: qn,
    40: qn,
    41: en,
    42: en,
    43: hn,
    44: en,
    45: en,//p1 end
    46: qn,
    47: qn,
    48: en,
    49: en,
    50: hn,
    51: en,
    52: en,
    53: qn,
    54: qn,
    55: en,
    56: en,
    57:dqn,
    58:dqn,
    59: hn,
    60: hn,
    61: hn,
    62: qn,
    63: wn,
    64: wn,
    65: qn,
    66: hn,
    67: hn,
    68: hn,
    69: qn,
    70: 1558.4,
    71: 1948, //wn+qn
    72: qn,
    73: qn,
    74: dqn,
    75: en,
    76: en,
    77: en,
    78: hn,
    79: qn,
    80: en,
    81: en,
    82: en,
    83: en,
    84: en,
    85: en, 
    86: en,
    87: en,
}


var element = document.getElementById("words");
num2 = 0

function moveWords(pos){
  
    if(pos<2) {
        element.innerHTML ='Enemy by Imagine Dragons'
      
    }
    else if (pos<6){
element.innerHTML ='From Arcane'

    }
    else{
    element.innerHTML = lyrics[num2]
num2 = num2 + 1
    }
};


var lyrics = ["I" ,"wake up" ,"to" ,"the" ,'sounds' ,"of", 'the', "silence","silence", 'that', "allows","allows",
    "For", "my", "mind" ,"to","run", "around","around", "with", "my", "ear", "up", "to", "the","ground",
    "I'm", "searching","searching", "to", "behold","behold", "the", 'stories','stories', 'that', 'are', "told",'When', "my", "back", "is", 
    "to", 'the', "world", "that", "was", "smiling","smiling", "when", "I", "turned.", //good
    'They', "tell","you", "you're", "the", "greatest","greatest",
    "But", "once","you", "turn", "they", "hate","hate", "us",//good
    "Oh,","Oh,", "the", "misery","misery","misery",
    "Everybody", "Everybody","Everybody", "Everybody","wants", "to", 'be', "my", "enemy",
    "Spare", "the", "sympathy",
    "Everybody", "wants", "to", 'be', "my", "enemy",]
    



    // function background() {
    //     var audio = new Audio('background.mp3');
    //     audio.play();
    //   }