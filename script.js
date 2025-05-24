let startPageBackground;
let RomanFont;
let Background;
let mainTitle;
let learnButton;
let enterButton;
let learnText;
let Bill;
let Next1;
let screen2Background;
let Back;
let Question1;
let ans1;
let ans2;
let ans3;
let ans4;
let Question2;
let ans5;
let ans6;
let Question3;
let ans7;
let ans8;
let Question4;
let ans9;
let ans10;
let Question5;
let ans11;
let ans12;
let Question6;
let ans13
let ans14
let Question7;
let ans15;
let ans16;
let Question8;
let ans17;
let ans18;
let Question9;
let ans19;
let ans20;
let Question10;
let scoreDisplay
score = 0;
let screen = 0;
let Message1;
let homeButton;
let Message2;
let gameButton;
let gameTitle;
let Person_1;
let Person_2;
let Person_3;
let Box_1;
let Box_2;
let Box_3;
let Eye1;
let Eye2;
let Mouth1;
let Mouth2;
let Eye3;
let Eye4;

function preload() {
  RomanFont = loadFont('assets/ROMANS.ttf');
}

function setup() {
  createCanvas(400, 500);
  background(10, 10, 80);
  textSize(16);
  noStroke();
  
  //Customizing Start Screen Background
startPageBackground = new Sprite(width/2, height/2); // Fixed sprite creation
startPageBackground.width = width-50;
startPageBackground.height = height-50;
startPageBackground.collider = 'static';
startPageBackground.color = color(250, 235, 200);

//Setting the title
mainTitle = new Sprite(width/2, height/2-150);
mainTitle.collider = 'static';
mainTitle.width = width-100
mainTitle.height = height-400
mainTitle.color = color(250, 235, 200);
mainTitle.textSize= 20
textFont(RomanFont) 
mainTitle.text='The Constitution Game\nWE THE PEOPLE'

//Creating enter button
enterButton = new Sprite(width / 2, height / 2);
enterButton.w = 120;
enterButton.h = 50;
enterButton.collider = 'k';
textFont(RomanFont);//CHANGE FONT
enterButton.text = 'ENTER'
enterButton.color = color(139,0,0)

//Creating learn button
learnButton = new Sprite(width / 2, height / 2+70);
learnButton.w = 120;
learnButton.h = 50;
learnButton.collider = 'k';
textFont(RomanFont);//CHANGE FONT
learnButton.text = 'LEARN'
learnButton.color = color(139,0,0)

  gameButton = new Sprite(width / 2, height / 2+140);
  gameButton.w = 120;
  gameButton.h = 50;
  gameButton.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  gameButton.text = 'GAME'
  gameButton.color = color(139,0,0)

//Creating all sprites
  learnText = new Sprite(width / 2-1000, height / 2-1000);
learnText.rotationLock = true;
  
  Bill = new Sprite(width / 2-1000, height / 2-1000);
Bill.rotationLock = true;

  Next1 = new Sprite(width / 2-1000, height / 2-1000);
  Next1.rotationLock = true;

  screen2Background = new Sprite(width/2 -1000, height/2 -1000);
  screen2Background.rotationLock = true;

  Back = new Sprite(width/2 -1000, height/2 -1000);
  Back.rotationLock = true;

  Question1 = new Sprite(width/2 -1000, height/2 -1000);
  Question1.rotationLock = true;

  ans1 = new Sprite(width/2 -1000, height/2 -1000);
  ans1.rotationLock = true;

  ans2 = new Sprite(width/2 -1000, height/2 -1000);
  ans2.rotationLock = true;

  ans3 = new Sprite(width/2 -1000, height/2 -1000);
  ans3.rotationLock = true;

  ans4 = new Sprite(width/2 -1000, height/2 -1000);
  ans4.rotationLock = true;

  Question2 = new Sprite(width/2 -1000, height/2 -1000);
  Question2.rotationLock = true;

  Question3 = new Sprite(width/2 -1000, height/2 -1000);
  Question3.rotationLock = true;

  ans5 = new Sprite(width/2 -1000, height/2 -1000);
  ans5.rotationLock = true;

  ans6 = new Sprite(width/2 -1000, height/2 -1000);
  ans6.rotationLock = true;

  Question4 = new Sprite(width/2 -1000, height/2 -1000);
  Question4.rotationLock = true;

  ans7 = new Sprite(width/2 -1000, height/2 -1000);
  ans7.rotationLock = true;

  ans8 = new Sprite(width/2 -1000, height/2 -1000);
  ans8.rotationLock = true;

  Question5 = new Sprite(width/2 -1000, height/2 -1000);
  Question5.rotationLock = true;

  ans9 = new Sprite(width/2 -1000, height/2 -1000);
  ans9.rotationLock = true;

  ans10 = new Sprite(width/2 -1000, height/2 -1000);
  ans10.rotationLock = true;

  Question6 = new Sprite(width/2 -1000, height/2 -1000);
  Question6.rotationLock = true;

  ans11 = new Sprite(width/2 -1000, height/2 -1000);
  ans11.rotationLock = true;

  ans12 = new Sprite(width/2 -1000, height/2 -1000);
  ans12.rotationLock = true;

  Question7 = new Sprite(width/2 -1000, height/2 -1000);
  Question7.rotationLock = true;

  ans13 = new Sprite(width/2 -1000, height/2 -1000);
  ans13.rotationLock = true;

  ans14 = new Sprite(width/2 -1000, height/2 -1000);
  ans14.rotationLock = true;

  Question8 = new Sprite(width/2 -1000, height/2 -1000);
  Question8.rotationLock = true;

  ans15 = new Sprite(width/2 -1000, height/2 -1000);
  ans15.rotationLock = true;

  ans16 = new Sprite(width/2 -1000, height/2 -1000);
  ans16.rotationLock = true;

  Question9 = new Sprite(width/2 -1000, height/2 -1000);
  Question9.rotationLock = true;

  ans17 = new Sprite(width/2 -1000, height/2 -1000);
  ans17.rotationLock = true;

  ans18 = new Sprite(width/2 -1000, height/2 -1000);
  ans18.rotationLock = true;

  Question10 = new Sprite(width/2 -1000, height/2 -1000);
  Question10.rotationLock = true;

  ans19 = new Sprite(width/2 -1000, height/2 -1000);
  ans19.rotationLock = true;

  ans20 = new Sprite(width/2 -1000, height/2 -1000);
  ans20.rotationLock = true;

  Message1 = new Sprite(width/2 -1000, height/2 -1000);
  Message1.rotationLock = true;

  homeButton = new Sprite(width/2 -1000, height/2 -1000);
  homeButton.rotationLock = true;

  Message2 = new Sprite(width/2 -1000, height/2 -1000);
  Message2.rotationLock = true;  

gameButton.rotationLock = true;

  gameTitle = new Sprite(width/2 -1000, height/2 -1000);
  gameTitle.rotationLock = true;  

}

function draw() {

  //What happens if buttons is pressed
if (learnButton.mouse.presses()) {
print("pressed");
showScreen1();
screen = 1;
}

if (Next1.mouse.presses()) {
print("pressed");
showScreen2();
screen = 2;}

if (Back.mouse.presses()) {
print("pressed");
showScreen0();
screen = 0;}


if (enterButton.mouse.presses()) {
print("pressed");
showScreen3();
screen = 3;}

if (ans1.mouse.presses()) {
print("pressed");
score = score + 1;
updateScore();
print(score)
showScreen4();
screen = 4;}

if (ans2.mouse.presses()) {
print("pressed");
showScreen4();
screen = 4;}

  if (ans3.mouse.presses()) {
  print("pressed");
  showScreen5();
  screen = 5;}

  if (ans4.mouse.presses()) {
  print("pressed");
    score = score + 1;
    updateScore();
    print(score)
  showScreen5();
  screen = 5;}

  if (ans5.mouse.presses()) {
    print("pressed");
    showScreen6();
    screen = 6;}

    if (ans6.mouse.presses()) {
    print("pressed");
      score = score + 1;
      updateScore();
      print(score)
    showScreen6();
    screen = 6;}
  
  if (ans7.mouse.presses()) {
    print("pressed");
    score = score + 1;
    updateScore();
    print(score)
    showScreen7();
    screen = 7;}

    if (ans8.mouse.presses()) {
    print("pressed");
    showScreen7();
    screen = 7;}

  if (ans9.mouse.presses()) {
    print("pressed");
    score = score + 1;
    updateScore();
    print(score)
    showScreen8();
    screen = 8;}

  if (ans10.mouse.presses()) {
    print("pressed");
    showScreen8();
    screen = 8;}

  if (ans11.mouse.presses()) {
    print("pressed");
    showScreen9();
    screen = 9;}

  if (ans12.mouse.presses()) {
    print("pressed");
    score = score + 1;
    updateScore();
    print(score)
    showScreen9();
    screen = 9;}

  if (ans13.mouse.presses()) {
    print("pressed");
    score = score + 1;
    updateScore();
    print(score)
    showScreen10();
    screen = 10;}

  if (ans14.mouse.presses()) {
    print("pressed");
    showScreen10();
    screen = 10;}

  if (ans15.mouse.presses()) {
    print("pressed");
    showScreen11();
    screen = 11;}

  if (ans16.mouse.presses()) {
    print("pressed");
    score = score + 1;
    updateScore();
    print(score)
    showScreen11();
    screen = 11;}

  if (ans17.mouse.presses()) {
    print("pressed");
    showScreen12();
    screen = 12;}

  if (ans18.mouse.presses()) {
    print("pressed");
    score = score + 1;
    updateScore();
    print(score)
    showScreen12();
    screen = 12;}

  else if (ans19.mouse.presses()) {
    if (score >= 7) {
      showScreen13();
      updateScore();
      print(score)
    } else {
      showScreen14();
      updateScore();
      print(score)
    }
  }

  else if (ans20.mouse.presses()) {
    if (score >= 7) {
      score = score + 1;
      updateScore();
      print(score)
      showScreen13();
    } else {
      showScreen14();
      updateScore();
      print(score)
    }
  }

  if (homeButton.mouse.presses()) {
    print("pressed");
    showScreen0();
    screen = 0;
  scoreDisplay.pos={ x:-1000,y:-1000};
  }

  if (gameButton.mouse.presses()) {
    print("pressed");
    showScreen15();
    screen = 15;}
  
}


/* FUNCTIONS */
function updateScore() {
  
 if (scoreDisplay) {
    scoreDisplay.remove();
 }
   // Create new score display
   scoreDisplay = new Sprite(width / 2, 30);
   scoreDisplay.collider = 'static';
   scoreDisplay.width = width-100;
   scoreDisplay.height = 40;
   scoreDisplay.color = color(250, 235, 200);
   scoreDisplay.textColor = color(139,0,0);
   scoreDisplay.textSize = 12;
   textFont(RomanFont);
   scoreDisplay.text = 'Score: '+ score + "/10";

  scoreDisplay.pos = { x: width / 2, y: height / 2 + 170};

 }


//Home Screen
function showScreen0() {
  score = 0;
  background(10, 10, 80);

  // Move screen 2 elements off screen
  Back.pos = { x: -1000, y: -1000 };
  screen2Background.pos = { x: -1000, y: -1000 };

  // Move home screen elements back onscreen
  startPageBackground.pos = { x: width / 2, y: height / 2 };
  mainTitle.pos = { x: width / 2, y: height / 2 - 150 };
  enterButton.pos = { x: width / 2, y: height / 2 };
  learnButton.pos = { x: width / 2, y: height / 2 + 70 };
  gameButton.pos = { x: width /2, y: height /2 + 140};

//Move elements off screen
  Message1.pos = { x: -1000, y: -1000 };
  Message2.pos = { x: -1000, y: -1000 };
  homeButton.pos = { x: -1000, y: -1000 };
  
}



//Screen 1
function showScreen1() {
background(10, 10, 80);

//Move buttons & sprite off the screen
learnButton.pos = { x: -1000, y: -1000 };
enterButton.pos = { x: -1000, y: -1000 };
mainTitle.pos = { x: -1000, y: -1000 };
gameButton.pos = { x:-1000, y: -1000};
startPageBackground.pos = { x: 200, y: 250 };

// Creating Text
learnText.collider = 'static';
learnText.pos = { x: width / 2, y: height / 2-170};
learnText.width = width-100
learnText.height = height-400
learnText.color = color(250, 235, 200);
learnText.textColor=color(139,0,0)
learnText.textSize= 12
textFont(RomanFont) 
learnText.text='The first 10 amendments of the Constitution\nis called "The Bill of Rights" you can find\neach of the amendments below:'

Bill.collider = 'static';
Bill.pos = { x: width / 2, y: height / 2+20};
Bill.width = width-100
Bill.height = 200
Bill.color = color(250, 235, 200);
Bill.textSize= 10
Bill.textColor=color(139,0,0)
textFont(RomanFont) 
Bill.text='1) Freedom of religion, speech, the press,\nassemply and peition\n\n2) Right to bear arms\n\n3) Right to refuse quartering soldiers\n\n4) Protected from unreasonable search\n and seizure\n\n5) Right to fair trial, no double jeopardy or\n forced confessions\n\n6) Right to fair and speedy trial\n\n7) Right to trial by jury\n\n8) Protection from cruel and unusual\n punishments\n\n9) Unlisted rights still belong to the people\n\n10) Powers that are not federal go to the states'

Next1.pos = { x: width / 2+100, y: height / 2+195};
Next1.w = 100;
Next1.h = 30;
Next1.collider = 'k';
textFont(RomanFont);//CHANGE FONT
Next1.text = 'NEXT'
Next1.color = color(139,0,0)}

  function showScreen2() {
    background(10, 10, 80);

//Move buttons & sprite off the screen
Next1.pos = { x: -1000, y: -1000 };
learnText.pos = { x: -1000, y: -1000 };
Bill.pos = { x: -1000, y: -1000};

screen2Background.pos = { x: width/2, y: height/2};
screen2Background.width = width-50;
screen2Background.height = height-50;
screen2Background.collider = 'static';
screen2Background.color = color(250, 235, 200);
screen2Background.textSize= 10
screen2Background.textColor=color(139,0,0)
textFont(RomanFont)
screen2Background.text = 'The Constitution is the supreme law of the United States.\n It was written in 1787 to create a stronger federal\n government\n\nThe Constitution sets up the three banches of the\ngovernment: Legislative(creates laws),\n Executive(enforces laws), Judicial(interprets laws)\n\nThe Constitution starts with a preamble, it explains the\npurpose of the government\n\n The Constitution has 7 articles which explains how the\ngovernment works and the division of powers\n\nArticle I: Powers given to Congress\nArticle II: Powers given to the President\nArticle III: Powers given to the Supreme Court\nArticle IV: Establishes the balance between state and\nfederal governments\nArticle V: Amending the Constitution\nArticle VI: Supremacy clause\nArticle VII: Ratifying the Constitution\n\n The Constitution has a system of checks and balances to\nprevent the branches from becoming too powerful\n\nThe Constitution can only be amended through amendments'

Back.pos = { x: width / 2+100, y: height / 2+195};
Back.w = 100;
Back.h = 30;
Back.collider = 'k';
textFont(RomanFont);//CHANGE FONT
Back.text = 'BACK'
Back.color = color(139,0,0)
}

function showScreen3() {
background(10, 10, 80);
  
  //Move buttons & sprite off the screen
  learnButton.pos = { x: -1000, y: -1000 };
  enterButton.pos = { x: -1000, y: -1000 };
  mainTitle.pos = { x: -1000, y: -1000 };
  gameButton.pos = { x:-1000, y: -1000};
  startPageBackground.pos = { x: 200, y: 250 };

Question1.collider = 'static';
Question1.pos = { x: width / 2, y: height / 2-170};
Question1.width = width-100
Question1.height = height-400
Question1.color = color(250, 235, 200);
Question1.textColor=color(139,0,0)
Question1.textSize= 12
  textFont(RomanFont) 
Question1.text='What amendment gave you the right to\nown a firearm?'

 ans1.pos = { x: width / 2-70, y: height / 2};
  ans1.w = 120;
  ans1.h = 50;
  ans1.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans1.textSize = 10
  ans1.text = '2nd amendment'
  ans1.color = color(139,0,0)

  ans2.pos = { x: width / 2+70, y: height / 2};
  ans2.w = 120;
  ans2.h = 50;
  ans2.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans2.textSize = 10
  ans2.text = '4th amendment'
  ans2.color = color(139,0,0)
}

function showScreen4() {
background(10, 10, 80);

  //Move buttons & sprite off the screen
  Question1.pos = { x: -1000, y: -1000 };
  ans1.pos = { x: -1000, y: -1000 };
  ans2.pos = { x: -1000, y: -1000 };

  ans3.pos = { x: width / 2-70, y: height / 2};
  ans3.w = 120;
  ans3.h = 100;
  ans3.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans3.textSize = 10
  ans3.text = 'The constitution\ngave the power of\nstopping the\nexpansion of\npower to the\nstates'
  ans3.color = color(139,0,0)

  ans4.pos = { x: width / 2+70, y: height / 2};
  ans4.w = 120;
  ans4.h = 100;
  ans4.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans4.textSize = 10
  ans4.text = 'The Constitution\ngives each branch\ntheir power,which\nestablished \nthe system of\nchecks and\nbalances'
  ans4.color = color(139,0,0)

  Question2.collider = 'static';
  Question2.pos = { x: width / 2, y: height / 2-170};
  Question2.width = width-100
  Question2.height = height-400
  Question2.color = color(250, 235, 200);
  Question2.textColor=color(139,0,0)
  Question2.textSize= 12
    textFont(RomanFont) 
  Question2.text='What stops the expansion of government power?'
  
}

function showScreen5() {
background(10, 10, 80);

  //Move buttons & sprite off the screen
  Question2.pos = { x: -1000, y: -1000 };
  ans3.pos = { x: -1000, y: -1000 };
  ans4.pos = { x: -1000, y: -1000 };

  ans5.pos = { x: width / 2-70, y: height / 2};
  ans5.w = 120;
  ans5.h = 50;
  ans5.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans5.textSize = 10
  ans5.text = 'Amending the\nConstitution'
  ans5.color = color(139,0,0)

  ans6.pos = { x: width / 2+70, y: height / 2};
  ans6.w = 120;
  ans6.h = 50;
  ans6.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans6.textSize = 10
  ans6.text = 'Powers given\nto Congress'
  ans6.color = color(139,0,0)

  Question3.collider = 'static';
  Question3.pos = { x: width / 2, y: height / 2-170};
  Question3.width = width-100
  Question3.height = height-400
  Question3.color = color(250, 235, 200);
  Question3.textColor=color(139,0,0)
  Question3.textSize= 12
    textFont(RomanFont) 
  Question3.text='What is Article I of the Constitution?'
}

function showScreen6() {
background(10, 10, 80);

  //Move buttons & sprite off the screen
  Question3.pos = { x: -1000, y: -1000 };
  ans5.pos = { x: -1000, y: -1000 };
  ans6.pos = { x: -1000, y: -1000 };

  ans7.pos = { x: width / 2-70, y: height / 2};
  ans7.w = 120;
  ans7.h = 60;
  ans7.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans7.textSize = 10
  ans7.text = 'To give enumerated\nrights and liberties\nto Americans'
  ans7.color = color(139,0,0)

  ans8.pos = { x: width / 2+70, y: height / 2};
  ans8.w = 120;
  ans8.h = 60;
  ans8.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans8.textSize = 10
  ans8.text = 'So the\ngovernment can\nincrease their\npower'
  ans8.color = color(139,0,0)

  Question4.collider = 'static';
  Question4.pos = { x: width / 2, y: height / 2-170};
  Question4.width = width-100
  Question4.height = height-400
  Question4.color = color(250, 235, 200);
  Question4.textColor=color(139,0,0)
  Question4.textSize= 12
    textFont(RomanFont) 
  Question4.text='What is the purpose of the bill of rights?'
}

function showScreen7() {
background(10, 10, 80);

  //Move buttons & sprite off the screen
  Question4.pos = { x: -1000, y: -1000 };
  ans7.pos = { x: -1000, y: -1000 };
  ans8.pos = { x: -1000, y: -1000 };

  ans9.pos = { x: width / 2-70, y: height / 2};
  ans9.w = 120;
  ans9.h = 60;
  ans9.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans9.textSize = 10
  ans9.text = 'The Constitution'
  ans9.color = color(139,0,0)

  ans10.pos = { x: width / 2+70, y: height / 2};
  ans10.w = 120;
  ans10.h = 60;
  ans10.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans10.textSize = 10
  ans10.text = 'Declaration of\nIndependence'
  ans10.color = color(139,0,0)

  Question5.collider = 'static';
  Question5.pos = { x: width / 2, y: height / 2-170};
  Question5.width = width-100
  Question5.height = height-400
  Question5.color = color(250, 235, 200);
  Question5.textColor=color(139,0,0)
  Question5.textSize= 12
    textFont(RomanFont) 
  Question5.text='What is the supreme law of the land?'

}

function showScreen8() {
background(10, 10, 80);

  //Move buttons & sprite off the screen
  Question5.pos = { x: -1000, y: -1000 };
  ans9.pos = { x: -1000, y: -1000 };
  ans10.pos = { x: -1000, y: -1000 };

  ans11.pos = { x: width / 2-70, y: height / 2};
  ans11.w = 120;
  ans11.h = 90;
  ans11.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans11.textSize = 10
  ans11.text = "Gives the president\nthe most power and\ngives the\ngovernment the\npower to ignore\nindividual's rights\nwhen necessary."
  ans11.color = color(139,0,0)

  ans12.pos = { x: width / 2+70, y: height / 2};
  ans12.w = 120;
  ans12.h = 90;
  ans12.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans12.textSize = 10
  ans12.text = 'Establishes the\nbranches, ensures\nrights and liberties,\nand limits\ngovernment power'
  ans12.color = color(139,0,0)

  Question6.collider = 'static';
  Question6.pos = { x: width / 2, y: height / 2-170};
  Question6.width = width-100
  Question6.height = height-400
  Question6.color = color(250, 235, 200);
  Question6.textColor=color(139,0,0)
  Question6.textSize= 12
    textFont(RomanFont) 
  Question6.text='What is the purpose of the Constitution?'

}

function showScreen9() {
background(10, 10, 80);

  //Move buttons & sprite off the screen
  Question6.pos = { x: -1000, y: -1000 };
  ans11.pos = { x: -1000, y: -1000 };
  ans12.pos = { x: -1000, y: -1000 };

  ans13.pos = { x: width / 2-70, y: height / 2};
  ans13.w = 120;
  ans13.h = 70;
  ans13.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans13.textSize = 10
  ans13.text = "All powers not\nmentioned in\nthe Constitution\nare reserved to\nthe states."
  ans13.color = color(139,0,0)

  ans14.pos = { x: width / 2+70, y: height / 2};
  ans14.w = 120;
  ans14.h = 70;
  ans14.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans14.textSize = 10
  ans14.text = 'No excessive bail\nor cruel\npunishments.'
  ans14.color = color(139,0,0)

  Question7.collider = 'static';
  Question7.pos = { x: width / 2, y: height / 2-170};
  Question7.width = width-100
  Question7.height = height-400
  Question7.color = color(250, 235, 200);
  Question7.textColor=color(139,0,0)
  Question7.textSize= 12
    textFont(RomanFont) 
  Question7.text='What is the tenth amendment?'
}

function showScreen10() {
background(10, 10, 80);

  //Move buttons & sprite off the screen
  Question7.pos = { x: -1000, y: -1000 };
  ans13.pos = { x: -1000, y: -1000 };
  ans14.pos = { x: -1000, y: -1000 };

  ans15.pos = { x: width / 2-70, y: height / 2};
  ans15.w = 120;
  ans15.h = 60;
  ans15.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans15.textSize = 10
  ans15.text = "Article VI"
  ans15.color = color(139,0,0)

  ans16.pos = { x: width / 2+70, y: height / 2};
  ans16.w = 120;
  ans16.h = 60;
  ans16.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans16.textSize = 10
  ans16.text = 'Preamble'
  ans16.color = color(139,0,0)

  Question8.collider = 'static';
  Question8.pos = { x: width / 2, y: height / 2-170};
  Question8.width = width-100
  Question8.height = height-400
  Question8.color = color(250, 235, 200);
  Question8.textColor=color(139,0,0)
  Question8.textSize= 12
    textFont(RomanFont) 
  Question8.text='Where in the Constitution does it\nmention the purpose of the Government?'
}

function showScreen11() {
background(10, 10, 80);

  //Move buttons & sprite off the screen
  Question8.pos = { x: -1000, y: -1000 };
  ans15.pos = { x: -1000, y: -1000 };
  ans16.pos = { x: -1000, y: -1000 };

  ans17.pos = { x: width / 2-70, y: height / 2};
  ans17.w = 120;
  ans17.h = 75;
  ans17.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans17.textSize = 10
  ans17.text = "States the powers\ngiven to the\nPreisdent"
  ans17.color = color(139,0,0)

  ans18.pos = { x: width / 2+70, y: height / 2};
  ans18.w = 120;
  ans18.h = 75;
  ans18.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans18.textSize = 10
  ans18.text = 'Creates the judicial\nbranch and states\nthe power of the\nsupreme court'
  ans18.color = color(139,0,0)

  Question9.collider = 'static';
  Question9.pos = { x: width / 2, y: height / 2-170};
  Question9.width = width-100
  Question9.height = height-400
  Question9.color = color(250, 235, 200);
  Question9.textColor=color(139,0,0)
  Question9.textSize= 12
    textFont(RomanFont) 
  Question9.text='What is Article III of the Constitution?'
}

function showScreen12() {
background(10, 10, 80);

  //Move buttons & sprite off the screen
  Question9.pos = { x: -1000, y: -1000 };
  ans17.pos = { x: -1000, y: -1000 };
  ans18.pos = { x: -1000, y: -1000 };

  ans19.pos = { x: width / 2-70, y: height / 2};
  ans19.w = 120;
  ans19.h = 75;
  ans19.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans19.textSize = 10
  ans19.text = "Rights not\nmentioned in\nthe constitution\nremain to the\nstates to decide"
  ans19.color = color(139,0,0)

  ans20.pos = { x: width / 2+70, y: height / 2};
  ans20.w = 120;
  ans20.h = 75;
  ans20.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  ans20.textSize = 10
  ans20.text = 'Rights not\nmentioned in\nthe Constitution\nremain to the\npeople'
  ans20.color = color(139,0,0)

  Question10.collider = 'static';
  Question10.pos = { x: width / 2, y: height / 2-170};
  Question10.width = width-100
  Question10.height = height-400
  Question10.color = color(250, 235, 200);
  Question10.textColor=color(139,0,0)
  Question10.textSize= 12
    textFont(RomanFont) 
  Question10.text='What is the 9th Amendment?'
}

function showScreen13() {
background(10, 10, 80);

  //Move buttons & sprite off the screen
  Question10.pos = { x: -1000, y: -1000 };
  ans19.pos = { x: -1000, y: -1000 };
  ans20.pos = { x: -1000, y: -1000 };

  Message1.collider = 'static';
  Message1.pos = { x: width / 2, y: height / 2};
  Message1.width = width-100
  Message1.height = height-400
  Message1.color = color(250, 235, 200);
  Message1.textColor=color(139,0,0)
  Message1.textSize= 16
    textFont(RomanFont) 
  Message1.text='YOU PASSED!'

  homeButton.pos =  { x: width / 2, y: height / 2+130};
  homeButton.w = 120;
  homeButton.h = 50;
  homeButton.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  homeButton.textSize = 15
  homeButton.text = 'BACK'
  homeButton.color = color(139,0,0)
}

function showScreen14() {
background(10, 10, 80);

  //Move buttons & sprite off the screen
  Question10.pos = { x: -1000, y: -1000 };
  ans19.pos = { x: -1000, y: -1000 };
  ans20.pos = { x: -1000, y: -1000 };

  Message2.collider = 'static';
  Message2.pos = { x: width / 2, y: height / 2};
  Message2.width = width-100
  Message2.height = height-400
  Message2.color = color(250, 235, 200);
  Message2.textColor=color(139,0,0)
  Message2.textSize= 16
    textFont(RomanFont) 
  Message2.text='UNFORTUNATELY, YOU DID NOT PASS.'

  homeButton.pos = { x: width / 2, y: height / 2+130};
  homeButton.w = 120;
  homeButton.h = 50;
  homeButton.collider = 'k';
  textFont(RomanFont);//CHANGE FONT
  homeButton.textSize = 15
  homeButton.text = 'BACK'
  homeButton.color = color(139,0,0)
}

function showScreen15() {
background(10, 10, 80);
learnButton.pos = { x: -1000, y: -1000 };
enterButton.pos = { x: -1000, y: -1000 };
mainTitle.pos = { x: -1000, y: -1000}; 
gameButton.pos = {x:-1000, y:-1000};

gameTitle.collider = 'static';
gameTitle.pos = { x: width / 2, y: height / 2-170};
gameTitle.width = width-100
gameTitle.height = height-400
gameTitle.color = color(250, 235, 200);
gameTitle.textColor=color(139,0,0)
gameTitle.textSize= 12
textFont(RomanFont) 
gameTitle.text='YOU HAVE BEEN TASKED WITH DETERMINING YOU\nIS GUILTY AND NOT GUILTY. SELECT WHICH CASE YOU\nWANT TO PICK. USE YOUR KNOWLEDGE\nABOUT THE CONSTITUTION TO MAKE THE\nBEST CHOICE. GOOD LUCK!'

Box_1 = new Sprite
Box_1.rotationLock = true;  
Box_1.collider = 'static';
Box_1.pos = { x: width / 2-80, y: height / 2-20};
Box_1.width = 130
Box_1.height = 130
Box_1.color = color(139,0,0);

Box_2 = new Sprite
Box_2.rotationLock = true;  
Box_2.collider = 'static';
Box_2.pos = { x: width / 2+80, y: height / 2-20};
Box_2.width = 130
Box_2.height = 130
Box_2.color = color(139,0,0);

Box_3 = new Sprite
Box_3.rotationLock = true;  
Box_3.collider = 'static';
Box_3.pos = { x: width / 2, y: height / 2+140};
Box_3.width = 130
Box_3.height = 130
Box_3.color = color(139,0,0);

//Person 1
Person_1 = new Sprite
Person_1.rotationLock = true;  
Person_1.collider = 'static';
Person_1.pos = { x: width / 2-80, y: height / 2-20};  
Person_1.diameter = 120
Person_1.color = color(88,57,39);

Mouth1 = new Sprite
Mouth1.rotationLock = true;  
Mouth1.collider = 'static';
Mouth1.pos = { x: width / 2-80, y: height / 2};  
Mouth1.height = 10
Mouth1.width = 50
Mouth1.color = color(194,24,7);

Eye1 = new Sprite
Eye1.rotationLock = true;  
Eye1.collider = 'static';
Eye1.pos = { x: width / 2-100, y: height / 2-50}; 
Eye1.diameter = 15
Eye1.color = color(0,0,0);

Eye2 = new Sprite
Eye2.rotationLock = true;  
Eye2.collider = 'static';
Eye2.pos = { x: width / 2-55, y: height / 2-50}; 
Eye2.diameter = 15
Eye2.color = color(0,0,0);

//Person 2
Person_2 = new Sprite
Person_2.rotationLock = true;  
Person_2.collider = 'static';
Person_2.pos = { x: width / 2+80, y: height / 2-20};  
Person_2.diameter = 120
Person_2.color = color(210,180,140);

  Mouth2 = new Sprite
  Mouth2.rotationLock = true;  
  Mouth2.collider = 'static';
  Mouth2.pos = { x: width / 2-80, y: height / 2}; 
  Mouth2.height = 10
  Mouth2.width = 50
  Mouth2.color = color(194,24,7);

  Eye3 = new Sprite
  Eye3.rotationLock = true;  
  Eye3.collider = 'static';
  Eye3.pos = { x: width / 2-100, y: height / 2-50}; 
  Eye3.diameter = 15
  Eye3.color = color(0,0,0);

  Eye4 = new Sprite
  Eye4.rotationLock = true;  
  Eye4.collider = 'static';
  Eye4.pos = { x: width / 2-55, y: height / 2-50}; 
  Eye4.diameter = 15
  Eye4.color = color(0,0,0);

//Person 3
Person_3 = new Sprite
Person_3.rotationLock = true;  
Person_3.collider = 'static';
Person_3.pos = { x: width / 2, y: height / 2+140};  
Person_3.diameter = 120
Person_3.color = color(255,242,232);




}