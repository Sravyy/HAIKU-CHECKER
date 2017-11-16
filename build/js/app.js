(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Haiku = exports.Haiku = function () {
  function Haiku() {
    _classCallCheck(this, Haiku);
  }

  //method

  _createClass(Haiku, [{
    key: "checkType",
    value: function checkType() {
      var splitArray = user.split(" ");
      var vowelArray = ["a", "e", "i", "o", "u"];
      var letters = [];
      var pushWord = [];

      splitArray.forEach(function (word) {

        var splitWord = word.split("");

        splitWord.forEach(function (splitted) {
          pushWord.push(splitted);
        });
      });

      pushWord.forEach(function (letter) {

        for (i = 0; i < vowelArray.length; i++) {
          if (letter == vowelArray[i]) {

            letters.push(letter);
          }
        }
      });
      alert(letters);
    }
  }]);

  return Haiku;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _haiku = require("./../js/haiku.js");

$(function () {
  $(".formOne").submit(function (event) {
    event.preventDefault();

    var userInput = $("#input").val().toUpperCase();
    var match = void 0;
    var lineCheck = userInput.match(/\r|\n/g);
    if (lineCheck === null) {
      match = 0;
    } else {
      match = lineCheck.length;
    }

    if (match === 2) {

      var haikuChecker = new _haiku.Haiku();
      var output = haikuChecker.checkHaiku(userInput);
      $("#output").text("It is a Haiku!!!");
    } else {
      alert("Not a Haiku");
    };
  });
});

},{"./../js/haiku.js":1}]},{},[2]);
