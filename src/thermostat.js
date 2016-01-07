var Thermostat = function() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.maximumTemperature = 25;
  this.powerSavingMode = 'On';
};

Thermostat.prototype.upButton = function() {
  if (this.temperature === this.maximumTemperature) {
    throw new Error("Cannot increase any more maximum temperature reached");
  }
  this.temperature++;
};

Thermostat.prototype.downButton = function() {
  if (this.temperature === this.MINIMUM_TEMPERATURE) {
    throw new Error("Temperature is 10: Cannot decrease further.");
  }
  this.temperature--;
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.maximumTemperature = 25;
  this.powerSavingMode = 'On';
  if (this.temperature > 25) {
    this.temperature = 25;
  }
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.maximumTemperature = 32;
  this.powerSavingMode = 'Off';

};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.temperatureDisplay = function() {
  if (this.temperature < 18) {
    return 'low';
  } else if (this.temperature < 25) {
    return 'medium';
  } else {
    return 'high';
  }
};
