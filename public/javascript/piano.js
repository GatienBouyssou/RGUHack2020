const C4 = new Audio("sounds/C4.mp3");
const Db4 = new Audio("sounds/Db4.mp3");
const D4 = new Audio("sounds/D4.mp3");
const Eb4 = new Audio("sounds/Eb4.mp3");
const E4 = new Audio("sounds/E4.mp3");
const F4 = new Audio("sounds/F4.mp3");
const Gb4 = new Audio("sounds/Gb4.mp3");
const G4 = new Audio("sounds/G4.mp3");
const Ab4 = new Audio("sounds/Ab4.mp3");
const A4 = new Audio("sounds/A4.mp3");
const Bb4 = new Audio("sounds/Bb4.mp3");
const B4 = new Audio("sounds/B4.mp3");
const C5 = new Audio("sounds/C5.mp3");
const Db5 = new Audio("sounds/Db5.mp3");
const D5 = new Audio("sounds/D5.mp3");
const Eb5 = new Audio("sounds/Eb5.mp3");
const E5 = new Audio("sounds/E5.mp3");
const Q1 = new Audio("sounds/Q1.mp3")
const Q2 = new Audio("sounds/Q2.mp3");
const Q3 = new Audio("sounds/Q3.mp3");
const Q4 = new Audio("sounds/Q4.mp3");
const Q5 = new Audio("sounds/Q5.mp3");
const Q6 = new Audio("sounds/Q6.mp3");
const Q7 = new Audio("sounds/Q7.mp3");
const Q8 = new Audio("sounds/Q8.mp3");
const Q9 = new Audio("sounds/Q9.mp3");
const Q10 = new Audio("sounds/Q10.mp3");
const Q11 = new Audio("sounds/Q11.mp3");
const Q12 = new Audio("sounds/Q12.mp3");
const Q13 = new Audio("sounds/Q13.mp3");
const Q14 = new Audio("sounds/Q14.mp3");
const Q15 = new Audio("sounds/Q15.mp3");
const Q16 = new Audio("sounds/Q16.mp3");
const Q17 = new Audio("sounds/Q17.mp3");
const Q18 = new Audio("sounds/Q18.mp3");
const Q19 = new Audio("sounds/Q19.mp3");
const Q20 = new Audio("sounds/Q20.mp3");




const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

// C4
const C4Key = document.querySelector(".C4-key");
const playC4 = () => {
  playSound(C4);
  C4Key.classList.add("active");
  setTimeout(() => C4Key.classList.remove("active"), 200);
};
C4Key.addEventListener("click", playC4);

// Db4
const Db4Key = document.querySelector(".Db4-key");
const playDb4 = () => {
  playSound(Db4);
  Db4Key.classList.add("active");
  setTimeout(() => Db4Key.classList.remove("active"), 200);
};
Db4Key.addEventListener("click", playDb4);

// D4
const D4Key = document.querySelector(".D4-key");
const playD4 = () => {
  playSound(D4);
  D4Key.classList.add("active");
  setTimeout(() => D4Key.classList.remove("active"), 200);
};
D4Key.addEventListener("click", playD4);

// Eb4
const Eb4Key = document.querySelector(".Eb4-key");
const playEb4 = () => {
  playSound(Eb4);
  Eb4Key.classList.add("active");
  setTimeout(() => Eb4Key.classList.remove("active"), 200);
};
Eb4Key.addEventListener("click", playEb4);

// E4
const E4Key = document.querySelector(".E4-key");
const playE4 = () => {
  playSound(E4);
  E4Key.classList.add("active");
  setTimeout(() => E4Key.classList.remove("active"), 200);
};
E4Key.addEventListener("click", playE4);

// F4
const F4Key = document.querySelector(".F4-key");
const playF4 = () => {
  playSound(F4);
  F4Key.classList.add("active");
  setTimeout(() => F4Key.classList.remove("active"), 200);
};
F4Key.addEventListener("click", playF4);

// Gb4
const Gb4Key = document.querySelector(".Gb4-key");
const playGb4 = () => {
  playSound(Gb4);
  Gb4Key.classList.add("active");
  setTimeout(() => Gb4Key.classList.remove("active"), 200);
};
Gb4Key.addEventListener("click", playGb4);

// G4
const G4Key = document.querySelector(".G4-key");
const playG4 = () => {
  playSound(G4);
  G4Key.classList.add("active");
  setTimeout(() => G4Key.classList.remove("active"), 200);
};
G4Key.addEventListener("click", playG4);

// Ab4
const Ab4Key = document.querySelector(".Ab4-key");
const playAb4 = () => {
  playSound(Ab4);
  Ab4Key.classList.add("active");
  setTimeout(() => Ab4Key.classList.remove("active"), 200);
};
Ab4Key.addEventListener("click", playAb4);

// A4
const A4Key = document.querySelector(".A4-key");
const playA4 = () => {
  playSound(A4);
  A4Key.classList.add("active");
  setTimeout(() => A4Key.classList.remove("active"), 200);
};
A4Key.addEventListener("click", playA4);

// Bb4
const Bb4Key = document.querySelector(".Bb4-key");
const playBb4 = () => {
  playSound(Bb4);
  Bb4Key.classList.add("active");
  setTimeout(() => Bb4Key.classList.remove("active"), 200);
};
Bb4Key.addEventListener("click", playBb4);

// B4
const B4Key = document.querySelector(".B4-key");
const playB4 = () => {
  playSound(B4);
  B4Key.classList.add("active");
  setTimeout(() => B4Key.classList.remove("active"), 200);
};
B4Key.addEventListener("click", playB4);

// C5
const C5Key = document.querySelector(".C5-key");
const playC5 = () => {
  playSound(C5);
  C5Key.classList.add("active");
  setTimeout(() => C5Key.classList.remove("active"), 200);
};
C5Key.addEventListener("click", playC5);

// Db5
const Db5Key = document.querySelector(".Db5-key");
const playDb5 = () => {
  playSound(Db5);
  Db5Key.classList.add("active");
  setTimeout(() => Db5Key.classList.remove("active"), 200);
};
Db5Key.addEventListener("click", playDb5);

// D5
const D5Key = document.querySelector(".D5-key");
const playD5 = () => {
  playSound(D5);
  D5Key.classList.add("active");
  setTimeout(() => D5Key.classList.remove("active"), 200);
};
D5Key.addEventListener("click", playD5);

// Eb5
const Eb5Key = document.querySelector(".Eb5-key");
const playEb5 = () => {
  playSound(Eb5);
  Eb5Key.classList.add("active");
  setTimeout(() => Eb5Key.classList.remove("active"), 200);
};
Eb5Key.addEventListener("click", playEb5);

// E5
const E5Key = document.querySelector(".E5-key");
const playE5 = () => {
  playSound(E5);
  E5Key.classList.add("active");
  setTimeout(() => E5Key.classList.remove("active"), 200);
};
E5Key.addEventListener("click", playE5);
/*
// Q1
const Q1Key = document.querySelector(".Q1-key");
const playQ1 = () => {
  playSound(Q1);
  Q1Key.classList.add("active");
  setTimeout(() => Q1Key.classList.remove("active"), 200);
};
Q1Key.addEventListener("click", playQ1);

// Q2
const Q2Key = document.querySelector(".Q2-key");
const playQ2 = () => {
  playSound(Q2);
  Q2Key.classList.add("active");
  setTimeout(() => Q2Key.classList.remove("active"), 200);
};
Q2Key.addEventListener("click", playQ2);

// Q3
const Q3Key = document.querySelector(".Q3-key");
const playQ3 = () => {
  playSound(Q3);
  Q3Key.classList.add("active");
  setTimeout(() => Q3Key.classList.remove("active"), 200);
};
Q3Key.addEventListener("click", playQ3);

// Q4
const Q4Key = document.querySelector(".Q4-key");
const playQ4 = () => {
  playSound(Q4);
  Q4Key.classList.add("active");
  setTimeout(() => Q4Key.classList.remove("active"), 200);
};
Q4Key.addEventListener("click", playQ4);

// Q5
const Q5Key = document.querySelector(".Q5-key");
const playQ5 = () => {
  playSound(Q5);
  Q5Key.classList.add("active");
  setTimeout(() => Q5Key.classList.remove("active"), 200);
};
Q5Key.addEventListener("click", playQ5);

// Q6
const Q6Key = document.querySelector(".Q6-key");
const playQ6 = () => {
  playSound(Q6);
  Q6Key.classList.add("active");
  setTimeout(() => Q6Key.classList.remove("active"), 200);
};
Q6Key.addEventListener("click", playQ6);

// Q6
const Q7Key = document.querySelector(".Q7-key");
const playQ7 = () => {
  playSound(Q7);
  Q7Key.classList.add("active");
  setTimeout(() => Q7Key.classList.remove("active"), 200);
};
Q7Key.addEventListener("click", playQ7);

// Q6
const Q8Key = document.querySelector(".Q8-key");
const playQ8 = () => {
  playSound(Q8);
  Q8Key.classList.add("active");
  setTimeout(() => Q8Key.classList.remove("active"), 200);
};
Q8Key.addEventListener("click", playQ8);

// Q6
const Q9Key = document.querySelector(".Q9-key");
const playQ9 = () => {
  playSound(Q9);
  Q9Key.classList.add("active");
  setTimeout(() => Q9Key.classList.remove("active"), 200);
};
Q9Key.addEventListener("click", playQ9);

// Q6
const Q10Key = document.querySelector(".Q10-key");
const playQ10 = () => {
  playSound(Q10);
  Q10Key.classList.add("active");
  setTimeout(() => Q10Key.classList.remove("active"), 200);
};
Q10Key.addEventListener("click", playQ10);

// Q6
const Q11Key = document.querySelector(".Q11-key");
const playQ11 = () => {
  playSound(Q11);
  Q11Key.classList.add("active");
  setTimeout(() => Q11Key.classList.remove("active"), 200);
};
Q11Key.addEventListener("click", playQ11);

// Q6
const Q12Key = document.querySelector(".Q12-key");
const playQ12 = () => {
  playSound(Q12);
  Q12Key.classList.add("active");
  setTimeout(() => Q12Key.classList.remove("active"), 200);
};
Q12Key.addEventListener("click", playQ12);

// Q6
const Q13Key = document.querySelector(".Q13-key");
const playQ12 = () => {
  playSound(Q13);
  Q13Key.classList.add("active");
  setTimeout(() => Q13Key.classList.remove("active"), 200);
};
Q13Key.addEventListener("click", playQ13);

// Q6
const Q14Key = document.querySelector(".Q14-key");
const playQ14 = () => {
  playSound(Q14);
  Q14Key.classList.add("active");
  setTimeout(() => Q14Key.classList.remove("active"), 200);
};
Q14Key.addEventListener("click", playQ14);

// Q6
const Q15Key = document.querySelector(".Q15-key");
const playQ15 = () => {
  playSound(Q15);
  Q15Key.classList.add("active");
  setTimeout(() => Q15Key.classList.remove("active"), 200);
};
Q15Key.addEventListener("click", playQ15);
*/

window.addEventListener("keydown", ({ keyCode }) => {
  // Press Z
  if (keyCode === 90) return playC4();

  // Press X
  if (keyCode === 88) return playDb4();

  // Press C
  if (keyCode === 67) return playD4();

  // Press V
  if (keyCode === 86) return playEb4();

  // Press B
  if (keyCode === 66) return playE4();

  // Press N
  if (keyCode === 78) return playF4();

  // Press M
  if (keyCode === 77) return playGb4();

  // Press ,
  if (keyCode === 188) return playG4();

  // Press .
  if (keyCode === 190) return playAb4();

  // Press /
  if (keyCode === 191) return playA4();

  // Press A
  if (keyCode === 65) return playBb4();

  // Press S
  if (keyCode === 83) return playB4();

  // Press D
  if (keyCode === 68) return playC5();

  // Press F
  if (keyCode === 70) return playDb5();

  // Press G
  if (keyCode === 71) return playD5();

  // Press H 
  if (keyCode === 72) return playEb5();

  // Press J
  if (keyCode === 74) return playE5();

  //Press K
  if(keyCode === 75) return playQ1();

  //Press L
  if(keyCode === 76) return playQ2();

  //Press ;
  if(keyCode === 186) return playQ3();

  //Press ''
  if(keyCode === 192) return playQ4();

  //Press \
  if(keyCode === 222) return playQ5();

  //Press Q
  if(keyCode === 81) return playQ6();

  //Press W
  if(keyCode === 87) return playQ67();

  //Press E
  if(keyCode === 69) return playQ8();

  //Press R
  if(keyCode === 82) return playQ9();

  //Press T
  if(keyCode === 84) return playQ10();

  //Press Y
  if(keyCode === 89) return playQ11();

  //Press U
  if(keyCode === 85) return playQ12();

  //Press I
  if(keyCode === 73) return playQ13();

  //Press O
  if(keyCode === 79) return playQ14();

  //Press P
  if(keyCode === 80) return playQ15();

  //Press [
  if(keyCode === 219) return playQ16();

  //Press ]
  if(keyCode === 221) return playQ17();

  
}); 