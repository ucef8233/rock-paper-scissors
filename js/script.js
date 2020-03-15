const image = [
  "images/icon-scissors.svg",
  "images/icon-paper.svg",
  "images/icon-rock.svg"
];
var choise = document.getElementsByClassName("main__img");
const ImgAdd = document.getElementsByClassName("header__img");
let affiches = document.getElementById("affiches");
let scores = document.getElementById("scores");
let userAffiche = scores.children[0];
let ordAffiche = scores.children[1];
let opp = document.getElementById("opp");
let userchois;
let ordChoise;
let userScore = 0;
let ordScore = 0;
let finalScore = 0;

for (let i = 0; i < 3; i++) {
  choise[i].addEventListener("click", function() {
    ImgAdd[0].setAttribute("src", image[i]);
    userchois = i;
    affiches.style.display = "flex";
    scores.style.display = "flex";
    execut(trt);
    ImgAdd[1].setAttribute("src", image[ordChoise]);
  });
}

var trt = {
  ordChois: function() {
    return Math.floor(Math.random() * 3);
  },

  calcScore: function(a, b) {
    if ((a == 2 && b == 1) || (a == 1 && b == 0) || (a == 0 && b == 2)) {
      ordScore = ordScore + 1;
      ordAffiche.innerHTML = ordScore;
    } else if (a == b) {
    } else {
      userScore = userScore + 1;
      userAffiche.innerHTML = userScore;
    }
    return a, b;
  },
  aff: function(t, r) {
    if (t == 3) {
      finalScore = finalScore + 1;
      userScore = 0;
      userAffiche.innerHTML = userScore;
      ordScore = 0;
      ordAffiche.innerHTML = ordScore;
      opp.innerHTML = finalScore;
      // window.setInterval(function() {
      //   affiches.style.display = "none";
      //   scores.style.display = "none";
      // }, 1000);
      affiches.style.display = "none";
      scores.style.display = "none";
    } else if (r == 3) {
      finalScore = finalScore - 1;
      userScore = 0;
      userAffiche.innerHTML = userScore;
      ordScore = 0;
      ordAffiche.innerHTML = ordScore;
      opp.innerHTML = finalScore;
      affiches.style.display = "none";
      scores.style.display = "none";
    }
    return t, r;
  },
  color: function() {
    if (finalScore < 0) {
      opp.style.color = "red";
    } else if (finalScore > 0) {
      opp.style.color = "blue";
    } else {
      opp.style.color = "black";
    }
  }
};
var execut = function(e) {
  ordChoise = e.ordChois();
  e.calcScore(userchois, ordChoise);
  e.aff(userScore, ordScore);
  e.color();
};
