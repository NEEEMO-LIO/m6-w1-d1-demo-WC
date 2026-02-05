class Tablet {
    constructor({ ram = 0, hdd = 0, network = "", name = "" } = {}) {
      this.ram = ram;
      this.hdd = hdd;
      this.network = network;
      this.name = name;
    }
  }
  
  module.exports = Tablet;
