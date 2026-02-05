class Laptop {
    constructor({ ram = 0, ssd = 0, name = "" } = {}) {
      this.ram = ram;
      this.ssd = ssd;
      this.name = name;
    }
  }
  
  module.exports = Laptop;