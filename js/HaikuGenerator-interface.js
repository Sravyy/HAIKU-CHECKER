import {HaikuGen} from './../js/HaikuGenerator.js';

$(document).ready(function() {
  $("button#newHaiku").submit(function(event) {
    event.preventDefault();


    var autoHaiku = new HaikuGen();
    let ipAddress = autoHaiku.GenerateIP();


    let newHaiku = autoHaiku.DecodeIP(ipAddress);

    $("#output").text(newHaiku);

  });

});
