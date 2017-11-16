export class Haiku
constructor (lineOne, lineTwo, lineThree) {
  this.lineOne = lineOne;
  this.lineTwo = lineTwo;
  this.lineThree = lineThree;
}

//method
checkType(){
let splitArray=user.split(" ");
let vowelArray = ["a","e","i","o","u"];
let letters = [];
let pushWord =[];

splitArray.forEach(function(word) {

    let splitWord = word.split("");

  	splitWord.forEach(function(splitted){
        pushWord.push(splitted);
    })
    })

    pushWord.forEach(function(letter){

      for(i=0; i < vowelArray.length; i++) {
        if(letter == vowelArray[i]){

          letters.push(letter);
        }
      }
     })
     return letters;

     }
     }

  function lineOneCheck() {
  let IsHaiku = false;
  var syllable = require('syllable');
  // var count = lineOne.length
  var lineOneSyllable = syllable(lineOne)
  if (syllable == 5) {
    IsHaiku = true;
  }
  if (lineOne != "") {
    IsHaiku = true;
  }
}

function lineTwoCheck() {
  let IsHaiku = false;
  var syllable = require('syllable');
  // var count = lineTwo.length
  var lineTwoSyllable = syllable(lineTwo)
  if (syllable == 7) {
    IsHaiku = true;
  }
  if (lineTwo != "") {
    IsHaiku = true;
  }
}

function lineThreeCheck() {
  let IsHaiku = false;
  var syllable = require('syllable');
  // var count = lineThree.length
  var lineThreeSyllable = syllable(lineThree)
  if (syllable == 5) {
    IsHaiku = true;
  }
}
