$(document).ready(function() {
  function updateTemperature() {
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr("class", thermostat.temperatureDisplay());
  }

  function updatePowerSavingMode() {
    $("#powersaving-status").text(thermostat.powerSavingMode);
  }

  var thermostat = new Thermostat();
  updateTemperature();
  updatePowerSavingMode();

  $("#temperature-up").click(function() {
    thermostat.upButton();
    updateTemperature();
  });

  $("#temperature-down").click(function(){
    thermostat.downButton();
    updateTemperature();
  });

  $("#temperature-reset").click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $("#powersaving-on").click(function(){
    thermostat.powerSavingModeOn();
    updateTemperature();
    updatePowerSavingMode();
  });

  $("#powersaving-off").click(function(){
    thermostat.powerSavingModeOff();
    updatePowerSavingMode();
  });
});
