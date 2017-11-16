export class Haiku {
  constructor() {
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
     alert(letters);

     }
     }
