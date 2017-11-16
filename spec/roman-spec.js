import {Haiku} from './../js/haiku.js';

describe('Haiku', function() {

  it('should test whether there are 3 lines in a haiku', function() {

    var line1 = "Five syllables here"
    var line2 = "Another seven right here"
    var line3 = "And now back to five"
    var haikuChecker = new Haiku();
    var result = haikuChecker.LineChecker(line1 + line2 + line3);

    expect(result).toEqual(true)
  });
});

describe('Haiku', function() {

  it('should test whether there are not 3 lines in a haiku', function() {

    var line1 = "Five syllables here"
    var line2 = "Another seven right here"
    var haikuChecker = new Haiku();
    var result = haikuChecker.LineChecker(line1 + line2);

    expect(result).toEqual(false)
  });
});

describe('Haiku', function() {

  it('should test whether a line has 5 syllables', function() {

    var fiveSyllableArray = ["I", "am", "not", "a", "dog"];
    var haikuChecker = new Haiku();
    var result = haikuChecker.SyllableChecker(fiveSyllableArray);

    expect(result).toEqual(true)
  });
});

describe('Haiku', function() {

  it('should test whether a line does not have 5 syllables', function() {

    var fiveSyllableArray = ["I", "am", "a", "cat"];
    var haikuChecker = new Haiku();
    var result = haikuChecker.SyllableChecker(fiveSyllableArray);

    expect(result).toEqual(false)
  });
});

describe('Haiku', function() {

  it('should test whether a line has 7 syllables', function() {

    var sevenSyllableArray = ["one", "two", "three", "four", "five", "six", "nine"];
    var haikuChecker = new Haiku();
    var result = haikuChecker.SyllableChecker(sevenSyllableArray);

    expect(result).toEqual(false)
  });
});

describe('Haiku', function() {

  it('should test whether a line does not have 7 syllables', function() {

    var sevenSyllableArray = ["one", "two", "three", "four", "five", "six", "seven"];
    var haikuChecker = new Haiku();
    var result = haikuChecker.SyllableChecker(sevenSyllableArray);

    expect(result).toEqual(false)
  });
});
