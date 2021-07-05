'use strict'

class ControllerContry {
  constructor(data) {
    this.name = data.name;
    this.capital = data.capital;
    this.flag = data.flag;
    this.regionalBlocs = data.subregion;

  }
}

module.exports = ControllerContry