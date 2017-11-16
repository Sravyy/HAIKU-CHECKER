export class HaikuGen {
  constructor() {
  }

  GenerateIP() {
    //Generate a random IP address
    let randomip = require('random-ip');
    let ipAddress = randomip('0.0.0.0', 2);

    return ipAddress;
  }

  DecodeIP(ipAddress) {
    //Decodes IP Address into Haiku
    var hipku = require('hipku');
    let thisipAddress = ipAddress;
    // let newHaiku = this.newHaiku;
    let newHaiku = hipku.encode(thisipAddress);

    return newHaiku;
  }
}
